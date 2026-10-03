# Care — low-fidelity wireframe plan

**Academic prototype only. No real ambulance request, assignment, tracking or call.**

| Metadata | Value |
|---|---|
| Owner / version | Design Agent / v1 |
| Required inputs | [User flow](user-flow.md) v1, saved then reread before this artifact; [persona](../phase-01/persona.md) v1 |
| Supporting inputs | [Concept](../phase-02/concept-direction.md) v1; [features](../phase-02/feature-opportunities.md) v1; [pain points](../phase-01/pain-points.md) v1; [BRD](../../input/brd.md) v1 |
| Authorization / procedure | [D2](../reviews/d2-review.md) APPROVED; [Wireframe Planning](../../skills/wireframe-planning.md) |
| Reference / limit | [Coinbase snapshot](../../input/design-reference.md): visual inspiration only; no product evidence or detailed UI specification |
| Status / next dependency | Self-validated; human wireframe sign-off required before UI Spec Generation; subsequent D3 still required before app build |

## Shared mobile frame

390px canvas; single column with 16px side gutters (358px content). All diagrams show vertical content order, not fixed-height pages. Scroll naturally. Every screen begins with Care, a persistent readable academic disclaimer and **Emergency / contact help (demo)**; V07 instead identifies itself as that destination. Fallback remains near the top, independent of primary actions. V02–V04 show request step 1/3–3/3; V05–V06 use explicit status headings.

At 320px, content is 288px wide: wrap text, stack summary labels/values and actions, use full-width fields/buttons and expandable multiline address areas. No side-by-side cards, truncation of critical content, horizontal scrolling or fixed footer covering content. A larger viewport centers the mobile composition. Typeface/color/radius tokens await sign-off; Coinbase informs calm hierarchy and restrained action emphasis only.

Diagrams omit the repeated shared header. `[ ]` = action/field; `( )` = radio choice; braces = dynamic text.

## V01 — Home · F01, F08

```text
┌────────────────────────────────┐
│ Arrange transport — demo       │
│ Explore a fictional request.   │
│ This app cannot dispatch or    │
│ contact anyone.                │
│ [Start demo request]           │
│ Use fictional pickup details.  │
└────────────────────────────────┘
```

One primary entry goes to V02, restoring a retained draft. Help goes to V07/general context. No validation, urgency classifier or service coverage claims. PP02 supports short entry; details remain on V04 for PP01's price-inspection need.

## V02 — Pickup · F02

```text
┌────────────────────────────────┐
│ [Back]                Step 1/3 │
│ Where is the demo pickup?      │
│ Pickup address (required)      │
│ [Multiline fictional address]  │
│ {Inline address error}         │
│ Landmark (optional)            │
│ [Fictional landmark]           │
│ Check your pickup              │
│ {Address; landmark or “None”}   │
│ Address is not verified.       │
│ [Continue to type]             │
│ [Cancel demo request]          │
└────────────────────────────────┘
```

Labels stay visible; placeholders are examples, not labels. The summary updates from entered text and remains editable in the fields. Trim-empty address triggers the flow's exact error and stays here; landmark is optional. Back returns V01 with draft. Continue goes V03; cancel uses inline Keep editing / Discard and return home confirmation. PP03 motivates review without a verified-location badge.

## V03 — Ambulance type · F03, F08

```text
┌────────────────────────────────┐
│ [Back]                Step 2/3 │
│ Compare demo categories        │
│ No clinical recommendation.    │
│ ( ) Standard transport (demo)  │
│     Mock vehicle transport     │
│     setup; not a suitability   │
│     recommendation.            │
│ ( ) Equipment-supported       │
│     transport (demo)           │
│     Mock equipment setup;      │
│     not a suitability claim.   │
│ {Selection error}              │
│ [Not sure? Ask a provider      │
│  (demo help)]                  │
│ [View demo estimates]          │
│ [Cancel demo request]          │
└────────────────────────────────┘
```

No selection is prefilled. Use one labeled radio group with descriptions linked to choices; whole option labels are tappable. Missing selection triggers the flow's exact error; clarify route remains usable without selection. Back → V02; Continue → V04; help → V07/clarification. D-A1 names/descriptions remain provisional and require provider review (PP04).

## V04 — ETA / fare · F04, F05, F08

```text
┌────────────────────────────────┐
│ [Back]                Step 3/3 │
│ Review your demo request       │
│ Pickup: {address; landmark}    │
│ [Edit pickup]                  │
│ Type: {selected category}      │
│ [Edit type]                    │
│ Demo fixture (not live)        │
│ (•) Available  ( ) No option  │
│ Fictional option available     │
│ Fictional estimated arrival    │
│ {20–30 or 25–40 minutes}       │
│ Fictional estimated total fare │
│ {₹1,200 or ₹1,800}             │
│ Invented values, not real      │
│ rates or arrival guarantees.   │
│ [Submit demo request]          │
│ [Cancel demo request]          │
└────────────────────────────────┘
```

No option variant replaces the option/estimate/submit block with **No demo option available**, “Fictional fixture; not a live availability result,” `[Open demo help]` and `[Edit type]`. Review and fixture controls remain. Changing the fixture updates only this view; submit is absent when unavailable. Pickup/type edits follow the flow, retaining values and requiring review again. Submit performs one memory-only transition to V05. PP01/PP05/PP06 motivate estimates, review and recovery.

## V05 — Confirmation · F05, F07

```text
┌────────────────────────────────┐
│ Demo request received          │
│ Recorded in this prototype.    │
│ Assignment pending (demo).     │
│ No real ambulance has been     │
│ requested or assigned.         │
│ Pickup: {address}              │
│ Type: {category}               │
│ [View simulated tracking]      │
│ [Emergency / contact help      │
│  (demo)]                       │
│ [Reset demo]                   │
└────────────────────────────────┘
```

No success tick or “booking confirmed” label. Tracking → V06; help → V07/pending context. Reset asks Keep demo / Reset and return home inline. No return to an editable submitted draft. PP05 drives receipt/assignment separation; F07 retains PP08's weak hypothesis.

## V06 — Simulated tracking · F06, F07

```text
┌────────────────────────────────┐
│ [Back to receipt]              │
│ Simulated tracking             │
│ Updates only when you advance. │
│ 1 Request received             │
│ 2 Simulated provider assigned  │
│ 3 Simulated arrival            │
│ Current demo stage: {stage}     │
│ No real dispatch or arrival.   │
│ [Advance demo status]          │
│ [Emergency / contact help      │
│  (demo)]                       │
│ [Reset demo]                   │
└────────────────────────────────┘
```

Mark current/completed/upcoming stages in text. Each activation advances exactly one stage; at arrival replace advance with “Demo sequence complete.” No timer, countdown, map or vehicle identity. Back → V05 retains stage. Help → V07/status context returns unchanged. Reset clears all fictional values after inline confirmation.

## V07 — Fallback · F08

```text
┌────────────────────────────────┐
│ Emergency / contact help       │
│ Demo only                      │
│ {Context heading + explanation}│
│ This prototype cannot call,    │
│ contact or dispatch anyone.    │
│ [Demonstrate contact intent]   │
│ {No-call feedback after action}│
│ [Return to {origin screen}]    │
│ [Reset demo]                   │
└────────────────────────────────┘
```

Contexts: general “Contact fallback demonstration”; clarification “Category clarification (demo)”; unavailable “No demo option available”; pending/status “Only demo status is known.” Clarification says provider review is absent, without answering clinical suitability. Action shows the flow's exact no-call feedback inline. No number, `tel:` link or advice to wait. Return preserves draft, selection, fixture and stage; reset clears them after confirmation. PP02/PP04/PP06 supply placement hypotheses.

## Accessibility, checks and review

Plan semantic headings, native buttons/fields/radios, visible keyboard focus, reading-order tab order and at least 44px action targets. Associate errors with fields, announce validation errors and changed status in text, focus the heading on navigation and the relevant control on errors. Contextual return restores the invoking control; inline cancel/reset confirmation moves focus to its question and restores it on Keep. Color alone never communicates errors or stages. Readable contrast and zoom/reflow are required checks for the later implementation, not completed results.

**PASS for planning completeness:** all seven flow screens have layouts, labels, hierarchy, actions, validation and navigation; unavailable and cancel/reset variants stay within seven screens. 390px and 320px behavior is specified. D-A1–D-A3 and upstream A1–A5 remain untested; provider terminology, official contacts, usability/accessibility and estimate semantics need validation. F09 remains deferred.

Recipient: workflow orchestrator for explicit human sign-off of **wireframe-plan.md v1 together with user-flow.md v1**. Stop before UI specification; wireframe approval does not replace the final D3 gate.
