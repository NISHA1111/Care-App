# App v2 verification

Date: 2026-10-03 (Asia/Kolkata). Result: PASS for the local browser checks below.
Owner: Design Agent; final copy, layout consolidation and browser verification: root agent.
Authorization: explicit user request recorded in [Revision 02](../../workflow/revision-02.md).

## Result
Compact app header, persistent Home / Booking / Help navigation, simplified booking copy and cards, and removal of academic/prototype warning banners. Preview fixture and manual status controls are collapsed by default. Historical v1 design packages and human approvals remain unchanged.

## Browser checks performed
- All seven views at 320px and 390px: no horizontal overflow, visible buttons at least 44px in both dimensions, navigation clearance, correct active tab, and no warning-banner text. [Raw measurements](viewport-audit-v2.json).
- Pickup and type validation, error focus, keyboard radio selection, standard/equipped estimates and editing passed.
- Home and Booking retain draft/request state; empty edited pickup is guarded; a 180-character unbroken address wraps at 320px.
- Unavailable fixture removes estimates and Send request; Help return retains the fixture and previous screen.
- Request receipt initially waits for assignment. Manual preview stages advance only through collapsed controls; receipt reflects the selected stage. Support copy remains accurate after advancement.
- Contextual Help, repeated Help navigation, contact feedback, Keep editing / Keep request, confirmed Start over and reload reset passed.
- Browser logs contained no warnings or errors. App uses local state and has no operational provider connection.

These checks are browser interaction and layout checks. User comprehension and assistive-technology testing were not performed.

## Screenshots
- [01-home](../screenshots/v2/01-home.jpg)
- [02-pickup](../screenshots/v2/02-pickup.jpg)
- [03-type](../screenshots/v2/03-type.jpg)
- [04-review](../screenshots/v2/04-review.jpg)
- [05-request](../screenshots/v2/05-request.jpg)
- [06-status](../screenshots/v2/06-status.jpg)
- [07-support](../screenshots/v2/07-support.jpg)

## Verified build fingerprints
- `app/index.html`: `2aedd86efcfe1f81c259c124702d15c16c3ef9e1b6f022089fc7b3a845c16883`
- `app/style.css`: `0f95c68ed470bd98a594d4225e61b1df896964e41546cb5a32166a4c306738c5`
- `app/script.js`: `a5f0ce6f7bcc62c30064880f334260619ab4f402ef049700e9a3f7b803db9b19`
