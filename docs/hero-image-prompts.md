# Hero Image Generation Prompts

## Specifications

- **Dimensions:** 1920x800px (2.4:1 aspect ratio) for all heroes
- **Format:** WebP or PNG, optimized for web
- **Style:** Professional photography look, warm tones, slight dark overlay will be applied via CSS
- **Text overlay area:** Left 50-60% of the image should be slightly less busy to allow white text readability
- **Brand colors for reference:** Navy #0B2545, Orange #FF6B35, Warm Gray #F2F4F7
- **Save to:** `public/images/heroes/` with filenames listed below

---

## 1. Home Page Hero
**Filename:** `hero-home.webp`

**Prompt:**
> Professional photograph of a branded courier delivery van driving through Colorado Springs with Pikes Peak visible in the background. Golden hour lighting, warm tones. The van is a clean white cargo van with subtle orange accent stripe. The road stretches ahead through a suburban business district. Shallow depth of field on the left side creating a natural bokeh area. Shot from a low angle, slightly to the side. Cinematic, commercial photography style. 1920x800 aspect ratio, landscape orientation.

---

## 2. Services Page Hero
**Filename:** `hero-services.webp`

**Prompt:**
> Professional photograph of a courier driver in a clean uniform carefully handling a sealed package at a loading dock. The driver looks focused and professional, wearing a collared shirt. Multiple delivery packages visible on a dolly nearby. Modern commercial building entrance in the background. Clean, well-lit scene with soft natural lighting. Left third of image slightly out of focus with muted tones. Commercial photography style, warm professional atmosphere. 1920x800 aspect ratio.

---

## 3. Industries Page Hero
**Filename:** `hero-industries.webp`

**Prompt:**
> Overhead photograph of a dispatcher's organized workspace showing multiple delivery routes on a large monitor screen, a two-way radio, clipboard with checklists, and a smartphone showing GPS tracking. The desk surface is clean dark wood. Warm overhead lighting creates soft shadows. Medical specimen bags, legal document envelopes, and small e-commerce packages visible at the edge of frame, representing diverse industries served. Commercial photography, top-down angle, warm tones. 1920x800 aspect ratio.

---

## 4. Coverage Page Hero
**Filename:** `hero-coverage.webp`

**Prompt:**
> Stunning aerial photograph of Colorado's Front Range corridor, looking south from Denver toward Colorado Springs. Interstate 25 visible as a ribbon through the landscape. Pikes Peak prominent in the distance. Morning light with golden highlights on the foothills. Rocky Mountain foothills on the west, plains stretching east. Clear blue sky with a few scattered clouds. Dramatic landscape photography, vivid but natural colors. 1920x800 aspect ratio.

---

## 5. Quote Page Hero
**Filename:** `hero-quote.webp`

**Prompt:**
> Close-up photograph of a business professional's hands typing on a laptop keyboard, with a delivery package and shipping label visible on the desk beside them. Modern, clean office desk setting. Soft window light from the left creating a warm, inviting atmosphere. Shallow depth of field. The laptop screen is not visible (out of frame). A smartphone and coffee cup subtly in the background. Warm, professional commercial photography. 1920x800 aspect ratio.

---

## 6. Tracking/Portal Page Hero
**Filename:** `hero-tracking.webp`

**Prompt:**
> Professional photograph of a modern logistics dashboard displayed on a large widescreen monitor, showing a map with delivery route pins and status indicators. The screen shows orange and blue accent colors on a dark interface. Slight reflection on the glossy screen. A dispatcher's hand reaches for a two-way radio beside the monitor. Clean, modern dispatch office with subtle ambient blue lighting. Technology-focused, professional atmosphere. 1920x800 aspect ratio.

---

## 7. Contact Page Hero
**Filename:** `hero-contact.webp`

**Prompt:**
> Warm photograph of a friendly female dispatcher at a desk, talking on a headset with a genuine smile. She's wearing a professional collared shirt. Behind her, a whiteboard with route schedules is slightly out of focus. Warm natural light from a window to her left. The office looks busy but organized — monitors, phones, and delivery manifests visible. Approachable, welcoming atmosphere. Portrait-style but cropped wide for banner use. 1920x800 aspect ratio.

---

## 8. Careers Page Hero
**Filename:** `hero-careers.webp`

**Prompt:**
> Candid photograph of a diverse team of three courier drivers standing in front of their delivery vehicles, smiling confidently at the camera. They wear matching clean, professional uniforms — polo shirts with subtle orange accents. Behind them, a row of clean white delivery vans in a well-maintained parking lot. Colorado blue sky above. Friendly, team-oriented atmosphere. Group portrait style, commercial photography, natural lighting. 1920x800 aspect ratio.

---

## 9. Blog Page Hero
**Filename:** `hero-blog.webp`

**Prompt:**
> Artistic photograph of stacked shipping boxes, padded envelopes, and a clipboard with logistics paperwork on a rustic wooden table. A laptop is open in the background showing a blog article. A coffee cup adds warmth to the scene. Morning side-light creates long shadows and a cozy editorial atmosphere. Muted warm tones, slightly desaturated. Editorial/lifestyle photography style. 1920x800 aspect ratio.

---

## 10. Colorado Springs City Page Hero
**Filename:** `hero-colorado-springs.webp`

**Prompt:**
> Beautiful photograph of downtown Colorado Springs with Pikes Peak towering in the background. View includes the iconic mix of modern buildings and tree-lined streets. A delivery van is parked at a building entrance in the mid-ground. Clear Colorado sky, golden afternoon light. City photography with mountain landscape. Vibrant but natural colors. 1920x800 aspect ratio.

---

## 11. Denver City Page Hero
**Filename:** `hero-denver.webp`

**Prompt:**
> Photograph of the Denver skyline with the Rocky Mountains behind it, shot from a highway approach. A cargo van drives toward the city on an open highway lane. Late afternoon golden light reflects off the glass skyscrapers. Clear blue sky with mountain silhouettes. Urban landscape photography, professional commercial style. 1920x800 aspect ratio.

---

## 12. Pueblo City Page Hero
**Filename:** `hero-pueblo.webp`

**Prompt:**
> Photograph of Pueblo, Colorado with the Arkansas River and the Riverwalk area. Historic Union Avenue depot visible. Warm, sunny day with blue sky. A delivery vehicle on a tree-lined street in the downtown area. Small-city charm with professional commercial feel. Warm natural lighting, inviting atmosphere. 1920x800 aspect ratio.

---

## 13. Canon City City Page Hero
**Filename:** `hero-canon-city.webp`

**Prompt:**
> Photograph of Canon City, Colorado with the dramatic Royal Gorge canyon landscape in the background. Downtown Main Street with small-town character. Delivery van parked near a courthouse or government building. Rugged mountain terrain frames the town. Clear sky, dramatic natural lighting highlighting the canyon walls. Landscape photography with small-town commercial feel. 1920x800 aspect ratio.

---

## Integration Notes

Once images are generated and saved to `public/images/heroes/`:

1. Each hero section will be updated with:
   - Background image via `next/image` or CSS `background-image`
   - Dark overlay gradient for text readability
   - Responsive sizing with `object-cover`
   - Lazy loading for below-fold images

2. The code changes are already prepared — run `npm run dev` to test once images are in place.

3. Recommended optimization:
   - Convert all images to WebP format
   - Keep file sizes under 200KB each
   - Use `next/image` for automatic optimization
