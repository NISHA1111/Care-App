# Care — UI specification

**This is a design prototype for academic purposes and does not provide real emergency dispatch.**

| Metadata | Value |
|---|---|
| Owner / version | Design Agent / v1 |
| Required inputs | Human-signed [wireframe plan](wireframe-plan.md) v1; approved [concept](../phase-02/concept-direction.md) v1; supplied [design reference](../../input/design-reference.md) snapshot |
| Supporting inputs | [User flow](user-flow.md) v1; [features](../phase-02/feature-opportunities.md) v1; [BRD](../../input/brd.md) v1; [persona](../phase-01/persona.md) v1; [pain points](../phase-01/pain-points.md) v1 |
| Authorization / procedure | [D2](../reviews/d2-review.md) APPROVED; [wireframe checkpoint](../reviews/d3-review.md) SIGNED_OFF on 2026-10-02; [UI Spec Generation](../../skills/ui-spec-generation.md) |
| Status / next dependency | Self-validated specification; human final D3 approval required before implementation |

## Layout and visual tokens

Preserve signed-off V01–V07 order and hierarchy. Static HTML/CSS/vanilla JavaScript, no framework or backend required. Center a maximum 390px composition with 16px horizontal padding: 358px content at 390px and 288px at 320px. White canvas, natural vertical scrolling, no fixed footer. Main sections have 24px separation; related elements use 8–12px gaps. Address/value text wraps, including long unbroken text. Cards and fields use border-box sizing and min-width zero. At 320px stack all actions, radio options and summary values; allow multiline labels to increase control height.

Coinbase supplies white canvas, restrained blue, light headings, pills and rounded cards as inspiration. Use Care's text identity without copied Coinbase logos, trading content, marketing heroes or licensed fonts.

| Token | Value / use |
|---|---|
| Canvas / soft surface | `#ffffff` / `#f7f7f7` |
| Ink / supporting text | `#0a0b0d` / `#5b616e`; supporting text includes disclaimers |
| Primary / pressed | `#0052ff` / `#003ecc`, white action text |
| Secondary surface | `#eef0f3`, ink text |
| Control border | `#5b616e`, 1px; decorative separators may use `#dee1e6` |
| Error | Ink text, explicit “Error:” prefix and strong border; color is unnecessary |
| Focus | 3px blue outline, 3px white offset; never clipped |
| Radius | Cards 24px; inputs 12px; buttons 999px |
| Spacing | 4, 8, 12, 16, 20, 24, 32px |
| Font | `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif` |
| Heading | 28px / 1.2 / weight 400; allow wrapping |
| Section title | 18px / 1.35 / 600 |
| Body / control | 16px / 1.5; controls 600, body 400 |
| Supporting text | 14px / 1.5; never lower critical disclaimer/error text |
| Numbers | System font with tabular numerals, 20px / 1.4 / 600 |

Calculated token contrasts on white: primary 5.75:1, pressed 8.20:1, ink 19.69:1, supporting text 6.21:1; supporting text on soft surface 5.80:1. These sRGB calculations are not a rendered accessibility audit. Implementation targets: at least 4.5:1 for all text and 3:1 for meaningful control boundaries/focus against adjacent backgrounds. Recheck every used combination after D3.

## Shared shell and components

Header order on every view: **Care**; exact banner above (“This is a design prototype for academic purposes and does not provide real emergency dispatch.”); **Emergency / contact help (demo)** navigation, except V07 where that destination is the heading. Keep banner visible in normal reading order on every screen, never hidden in a tooltip. Within the screen, Back and step label precede the heading where approved. One primary action per task; help remains clearly labeled and near the top.

Buttons use native `button`, minimum 44px height and width, 12px vertical/20px horizontal padding, full available width for main actions. Primary is blue; secondary is soft gray; text actions use blue text with underline and padded target. Hover preserves contrast; pressed darkens primary. Focus uses the shared ring. Disabled controls expose native disabled state and readable text; avoid disabling validation actions because errors must be discoverable. Unavailable submission is removed rather than presented as an actionable choice.

Cards use white or soft surface, 16px padding and flat depth. Radio choices have native visible radios, one labeled fieldset, descriptions associated with each option and at least 44px tappable labels. Selected state shows checked radio plus strong border, never “recommended.” Inputs have persistent labels, minimum 48px height, 12px/16px padding; address is a multiline textarea. Summaries are labeled text or definition lists. Render user-entered values as text, never interpolated HTML.

Cancel/reset confirmation is inline within the originating view. Exact question: “Discard this demo?” before submission or “Reset this demo?” after receipt/on fallback. Supporting copy: “This clears all fictional inputs and demo status.” Actions retain approved labels: **Keep editing** / **Discard and return home**, or **Keep demo** / **Reset and return home**. No new screen or real cancellation claim.

## Screen content and behavior

| View / features | Required content order after shared shell; exact actions |
|---|---|
| V01 / F01, F08 | “Arrange transport — demo”; “Explore a fictional request.”; “This app cannot dispatch or contact anyone.”; **Start demo request**; “Use fictional pickup details.” Resume retained draft through V02. |
| V02 / F02 | **Back**, “Step 1/3”; “Where is the demo pickup?”; **Pickup address (required)** textarea; error; **Landmark (optional)** field; “Check your pickup” summary; “Address is not verified.”; **Continue to type**; **Cancel demo request**. Empty summary uses “Not entered”; absent landmark uses “None.” |
| V03 / F03, F08 | **Back**, “Step 2/3”; “Compare demo categories”; “No clinical recommendation.”; two choices/descriptions below; error; **Not sure? Ask a provider (demo help)**; **View demo estimates**; **Cancel demo request**. No default choice. |
| V04 / F04, F05, F08 | **Back**, “Step 3/3”; “Review your demo request”; pickup/landmark + **Edit pickup**; type + **Edit type**; “Demo fixture (not live)” radios **Available** / **No option**; available or unavailable block; **Cancel demo request**. |
| V05 / F05, F07 | “Demo request received”; “Recorded in this prototype.”; “Assignment pending (demo).”; “No real ambulance has been requested or assigned.”; pickup/type summary; **View simulated tracking**; shared help; **Reset demo**. No success tick or editable submitted draft. |
| V06 / F06, F07 | **Back to receipt**; “Simulated tracking”; “Updates only when you advance.”; three stages; “Current demo stage: {stage}”; “No real dispatch or arrival.”; **Advance demo status**, shared help, **Reset demo**. At final stage replace advance with “Demo sequence complete.” |
| V07 / F08 | “Emergency / contact help”; “Demo only”; context heading/explanation; “This prototype cannot call, contact or dispatch anyone.”; **Demonstrate contact intent**; feedback; **Return to {origin screen name}**; **Reset demo**. Return restores invoking state/control. |

V03 categories: **Standard transport (demo)** — “Mock vehicle transport setup; not a suitability recommendation.” **Equipment-supported transport (demo)** — “Mock equipment setup; not a suitability claim.” These provisional labels provide no medical guidance.

V04 available block: “Fictional option available”; “Fictional estimated arrival”; fixture interval; “Fictional estimated total fare”; fixture amount; “Invented values, not real rates or arrival guarantees.”; **Submit demo request**. Unavailable replaces this entire block with “No demo option available”; “Fictional fixture; not a live availability result.”; **Open demo help**; **Edit type**. Do not repeat the review's existing Edit type control in the variant; preserve one usable action.

V07 contextual text:

| Context | Heading / explanation |
|---|---|
| General | “Contact fallback demonstration” / “Explore contact intent in this academic demo.” |
| Clarification | “Category clarification (demo)” / “Provider review is absent. This demo cannot determine clinical suitability.” |
| Unavailable | “No demo option available” / “This fictional result is not live availability.” |
| Pending/status | “Only demo status is known” / “No real request, assignment or arrival is known.” |

Contact action adds exactly “Demo only: no call was placed and nobody was contacted.” No telephone number, `tel:` link, outgoing request, clinical advice or recommendation to wait.

## Fixture and state contract

Retain D-A1–D-A3: provisional categories; invented estimates; inline contact feedback. Category `standard`: 20–30 minutes, ₹1,200. Category `equipment`: 25–40 minutes, ₹1,800. Neither establishes price inclusion or actual availability. `unavailable` fixture suppresses estimates/submission for either category.

Memory-only state: `view`, `address`, `landmark`, `category` (null/standard/equipment), `fixture` (available/unavailable), `received` (false/true), `stage` (received/assigned/arrived), `helpOrigin`, `helpContext`, `helpInvoker`, inline confirmation and validation feedback. Initial/reload/reset: V01, empty strings, null category, available fixture, false receipt, received stage and cleared context/feedback. No browser storage, cookies, location or backend calls.

Back/edit/help preserve inputs and fixture; edited category derives its matching estimate. V02 → V03 requires trim-nonempty address; V03 → V04 requires explicit category. Submission additionally requires available fixture and false receipt; repeated activation is idempotent. Receipt sets stage received. Advance changes one stage per activation, never via timers. V06 Back → V05 retains stage. Only reset/discard clears state. Help is a context detour from any view, never a second request.

## Accessible feedback and post-D3 verification

Exact validation messages: “Enter a fictional pickup address.” and “Choose a demo category, or open help if unsure.” Prefix rendered errors with “Error:” and associate them through `aria-describedby`; set invalid state when relevant. On failed Continue focus the address or first category radio. Native radio arrow-key interaction remains available; Tab order follows content order. Hidden views/removed actions are absent from focus and accessibility trees.

On navigation focus the view heading using temporary/programmatic focus. On contextual return restore the invoking action; on inline confirmation focus its question, then restore its trigger for Keep. Reset/discard focuses V01 heading. Announce changing fixture, demo stage and contact feedback through one polite status region; errors use an alert without announcing the whole screen. Expose current stage in text and `aria-current="step"`; completed/upcoming labels are textual. No animation required.

After human final D3 approval, verify the available path for both categories; whitespace address and no-selection errors; no-option recovery; back/edit state retention; all contextual help returns; repeated submit/advance behavior; both confirmation outcomes; reset and reload clearance. Inspect seven views at 390px/320px and enlarged text, checking no clipping/overflow, 44px targets, contrast, keyboard/focus order, labels, announcements and disclaimer visibility. Confirm no real calls, dispatch, storage, external service requests or automatic tracking. These are proposed implementation checks, not completed tests or empirical usability results.

**Specification validation: PASS.** Signed-off structure, F01–F08, exact flow labels, fixtures and boundaries remain consistent; source links resolve. F09 remains deferred pending fluent Tamil review. Upstream A1–A5, HMW assumptions, PP08's weak inference and provider/contact/estimate/accessibility research gaps remain unresolved. Recipient: workflow orchestrator for final human D3 review; no implementation is authorized by self-validation.
