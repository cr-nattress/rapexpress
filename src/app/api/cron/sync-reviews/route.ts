import { NextRequest } from "next/server";
import { syncAllReviews } from "@/lib/reviews";

/**
 * CRON endpoint for syncing Google/Yelp reviews.
 * Configure in Vercel: runs nightly at 2:00 AM MT.
 *
 * vercel.json config:
 * {
 *   "crons": [{
 *     "path": "/api/cron/sync-reviews",
 *     "schedule": "0 8 * * *"
 *   }]
 * }
 */
export async function GET(request: NextRequest) {
  // Verify this is a legitimate CRON request
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const result = await syncAllReviews();

    return new Response(
      JSON.stringify({
        success: true,
        ...result,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Review sync CRON error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Sync failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
