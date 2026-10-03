# App v3 — approved visual direction implemented

Date: 2026-10-03. User approved the generated Care home design and requested its application to the app and other screens.

## Changes
Rich Chennai ambulance hero, distinct Standard/Equipped vehicle imagery, interactive visual ride cards, map-style pickup/status illustrations, illustrated support, success confirmation and consistent cobalt-blue cards/navigation across seven screens. Text and controls remain live HTML. Home ride cards preselect the relevant type while keeping pickup required. Review imagery follows the selection. Decorative map is static, with no location/tracking integration. No academic warning banners added.

Images generated using the imagegen skill and stored locally in app/assets. Visual approval source is the image shown in chat before implementation. Original phase approvals and v1 artifacts are unchanged; prior app screenshots/reports remain historical.

## Verification
JavaScript syntax check passed. All seven views checked at 320px and 390px: no horizontal overflow, no missing images, visible buttons at least 44px. [Measurements](viewport-audit-v3.json).

Browser interaction checks passed: both visual ride selections, required pickup validation, retained selection, standard/equipped estimates, unavailable state hiding Send request, Help return, request receipt, manual status advancement, retained request through Home, confirmed Start over and reload. Final browser warning/error logs empty. User comprehension and assistive technology testing not performed.

## Screenshots
- [01-home](../screenshots/v3/01-home.jpg)
- [02-pickup](../screenshots/v3/02-pickup.jpg)
- [03-type](../screenshots/v3/03-type.jpg)
- [04-review](../screenshots/v3/04-review.jpg)
- [05-request](../screenshots/v3/05-request.jpg)
- [06-status](../screenshots/v3/06-status.jpg)
- [07-help](../screenshots/v3/07-help.jpg)

## Current build fingerprints
- `app/index.html`: `1a7511bc5d6c4d7b0a39f33c5277f5d1c69b9507d162163a6292d975e37e0f26`
- `app/style.css`: `04a835a8f132b48069b8d7c33ffa5049385128e6e803d14623a6a7cf620923b1`
- `app/script.js`: `99af31eb6e9c6c577eef4a06a7a77ff90a78c429009c561fcb4e54b414829351`
- `app/assets/care-ambulance.png`: `848029f042acffe0e5306fc479928565b6b69db4b376971c4d74af6e7a3ed758`
- `app/assets/care-equipped.png`: `b36f64a6d91d473c7fe5cefa015d0cc895ffefb2f77d89ac2e04e4e34fffb243`

## Follow-up: estimated fares in selection cards
Added on user request, 2026-10-03. Both card fare rows use the category data shared with review; radio descriptions include the price. Verified 390px capture, 320px no-overflow measurement and Equipped review fare ₹1,800. [Updated selection screenshot](../screenshots/v3/03-type-prices.jpg). Earlier fingerprints above identify the initial v3 build; updated app fingerprints follow.
- `app/index.html`: `ca3d92054ac72da472fa23250f7e38d2f688ec228213f4d420726810d53a0361`
- `app/style.css`: `943e9cf2309d7e81fd4b68df9279244d81ce6525388c7b42c2fd3822f72fc57f`
- `app/script.js`: `88fa45abdd975480d76f764485f28dd73490154a98460e177c99780a4676bff5`

## Selection card arrival times and confirmation label
2026-10-03: added Estimated arrival below each card price: Standard 20–30 minutes, Equipped 25–40 minutes, using the same category data as review. Renamed the action to Confirm selected ambulance; it continues to booking review. Verified both labels at 390px, no horizontal overflow at 320px, and matching Standard arrival on review. Screenshot: output/screenshots/v3/03-type-arrival.jpg. JavaScript syntax passed.

Latest app fingerprints:
- `app/index.html`: `c2544cf22d0e5194561c87e16836e24c2a04fef8026d9e24cf6d1a2c1857c0f2`
- `app/style.css`: `73a60fd73b1a62161cd186907453641f3b333b2d91dd1cebdb9094fdec35acdc`
- `app/script.js`: `a6a71f0ee69a5303b4de3a8a2cfea52ce2f1669f21a165e8b5561935e6292072`
