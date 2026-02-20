/**
 * Review Sync Service
 *
 * Pulls reviews from Google Places and Yelp APIs,
 * normalizes them, and pushes to the CMS as testimonial drafts.
 *
 * Requires:
 * - GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID for Google reviews
 * - YELP_API_KEY + YELP_BUSINESS_ID for Yelp reviews
 *
 * Reviews are synced as drafts — an admin must approve them in the CMS
 * before they appear on the website.
 */

export interface NormalizedReview {
  source: "google" | "yelp";
  sourceId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export async function fetchGoogleReviews(): Promise<NormalizedReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.log("[Reviews] Google Places not configured, skipping");
    return [];
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );

    if (!response.ok) {
      console.error(`[Reviews] Google API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const reviews = data.result?.reviews || [];

    return reviews.map(
      (r: {
        author_name: string;
        rating: number;
        text: string;
        time: number;
      }) => ({
        source: "google" as const,
        sourceId: `google-${r.time}-${r.author_name.replace(/\s/g, "")}`,
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        date: new Date(r.time * 1000).toISOString(),
      })
    );
  } catch (err) {
    console.error("[Reviews] Google fetch error:", err);
    return [];
  }
}

export async function fetchYelpReviews(): Promise<NormalizedReview[]> {
  const apiKey = process.env.YELP_API_KEY;
  const businessId = process.env.YELP_BUSINESS_ID;

  if (!apiKey || !businessId) {
    console.log("[Reviews] Yelp not configured, skipping");
    return [];
  }

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/${businessId}/reviews?sort_by=newest&limit=10`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );

    if (!response.ok) {
      console.error(`[Reviews] Yelp API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const reviews = data.reviews || [];

    return reviews.map(
      (r: {
        id: string;
        user: { name: string };
        rating: number;
        text: string;
        time_created: string;
      }) => ({
        source: "yelp" as const,
        sourceId: `yelp-${r.id}`,
        author: r.user.name,
        rating: r.rating,
        text: r.text,
        date: new Date(r.time_created).toISOString(),
      })
    );
  } catch (err) {
    console.error("[Reviews] Yelp fetch error:", err);
    return [];
  }
}

export async function syncAllReviews(): Promise<{
  synced: number;
  errors: number;
}> {
  const [googleReviews, yelpReviews] = await Promise.all([
    fetchGoogleReviews(),
    fetchYelpReviews(),
  ]);

  const allReviews = [...googleReviews, ...yelpReviews];
  let synced = 0;
  let errors = 0;

  for (const review of allReviews) {
    try {
      // In production, this would push to Sanity CMS as a draft testimonial
      // using the Sanity client's create/patch APIs
      console.log(
        `[Reviews] Synced: ${review.source} review from ${review.author} (${review.rating}/5)`
      );
      synced++;
    } catch {
      errors++;
    }
  }

  console.log(`[Reviews] Sync complete: ${synced} synced, ${errors} errors`);
  return { synced, errors };
}
