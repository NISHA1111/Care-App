# Feature opportunities — hypotheses for a simulated request

**Sample-only academic artifact.** Every opportunity below is a design hypothesis derived from simulations. Priority reflects prototype scope, dependency, and review needs; it is not measured frequency, severity, clinical priority, or commercial value.

| Metadata | Value |
|---|---|
| Owner | Product Ideation Agent |
| Artifact version | v1 |
| Required input revisions | [HMW](hmw.md) v1, produced and checked before this step; [persona](../phase-01/persona.md) v1; [pain points](../phase-01/pain-points.md) v1 |
| Supporting input revisions | [Research notes](../../input/research-notes.md) v1; [BRD](../../input/brd.md) v1; [competitor patterns](../phase-01/competitor-notes.md) v1 |
| Readiness | [D1](../reviews/d1-review.md) APPROVED for Phase 1 v1 on 2026-10-02 |
| Applied skill | `skills/feature-decomposition.md` |
| Status / next dependency | Self-validated; concept direction, then human D2 |

## Priority rule

**P0 — core demonstration:** required to complete and understand the BRD's seven-view simulation, including recovery. **P1 — supporting comprehension:** supports a core task and can fit within those views. **Deferred — research-dependent:** retain traceability without promising an implementation before missing review. All implementation is conditional on human D2 and D3 approval.

## Proposed opportunities

### F01 — One clear request entry

- **Trace:** HMW02 → PP02 → S01, with PP01/S07 tension; persona next-action goal.
- **Benefit hypothesis / scope:** A single primary “Start demo request” action on home with concise explanation and accessible fallback may make the next action apparent. The label must identify a simulation.
- **Priority / rationale:** P0; it starts the BRD journey while leaving later comparison information available for planned-transport exploration.
- **Dependencies:** F08 fallback; common academic disclaimer; future design review for action hierarchy.
- **Risk / limit:** Minimal entry content may hide information S07 needs; no optimum content density is established. No urgency classifier or “fastest response” claim.
- **Test:** Ask future participants in both authored contexts to identify the request action and fallback without prompting, then locate information before proceeding.

### F02 — Manual pickup with review and edit

- **Trace:** HMW03 → PP03 → S02; persona pickup goal; BRD A2.
- **Benefit hypothesis / scope:** Labeled address and landmark fields, an inline summary, and an edit path may help requesters check the pickup they intend. Keep entered values in memory only; invite fictional test details. No GPS, geocoding, or verified-location badge.
- **Priority / rationale:** P0; pickup is a required view and supplies information for later request review.
- **Dependencies:** F01; nonempty address validation and understandable field errors; F05 pre-submit summary.
- **Risk / limit:** Syntactic validation does not establish that a provider can locate the address. Required landmark policy is unknown; propose optional landmark until provider research.
- **Test:** Observe entry, correction, and review with fictional addresses. Later ask providers to interpret representative address/landmark pairs; that research is not completed.

### F03 — Plain transport categories with an uncertainty route

- **Trace:** HMW04 → PP04 → S03; persona category-understanding goal; C02 as an illustrative pattern.
- **Benefit hypothesis / scope:** A small mock set with plain equipment/service descriptions may support comparison. Include “Not sure? Ask a provider” leading to F08's illustrative contact-help state; avoid requiring an uninformed category choice to access it. Provider contact is simulated.
- **Priority / rationale:** P0 for the required type view and uncertainty route. Category wording remains provisional, not validated as appropriate for real care.
- **Dependencies:** Provider terminology review before real use; F08 clarification route; explicit fictional option labels. A demo-only selection may proceed through mock comparison, never as a clinical recommendation.
- **Risk / limit:** Category selection may imply suitability. No symptom collection, diagnostic questions, recommended badge, clinical urgency inference, or accreditation claim.
- **Test:** Ask users to explain category descriptions and locate the uncertainty route. Have providers review terminology and whether descriptions invite clinical inference before any service use.

### F04 — Combined illustrative availability, ETA, and fare

- **Trace:** HMW01 → PP01 → S04, S07; persona comparison goal; C02 illustrative cards.
- **Benefit hypothesis / scope:** Before submission, show fictional availability, an estimated arrival interval, and estimated total fare together. Label each value as demo data and explain that estimates are uncertain. No live freshness claim or booking guarantee.
- **Priority / rationale:** P0; satisfies BRD comparison task and preserves the repeated within-sample cost concern. ETA need remains medium.
- **Dependencies:** F02 and F03 selections; fixture for an available option and for no option; F08 recovery; F05 request summary.
- **Risk / limit:** Polished numbers can appear real; invented estimate ranges do not establish accuracy, inclusion policy, or real rates. Avoid countdowns and fabricated scarcity.
- **Test:** Ask users what the values represent, whether arrival/cost is guaranteed, and whether any option is actually available. Observe price inspection in the planned scenario.

### F05 — Pre-submit check and explicit request receipt

- **Trace:** HMW05 → PP05 → S05, plus HMW03/PP03/S02 for checking pickup; persona status goal.
- **Benefit hypothesis / scope:** Review pickup, demo category, and estimates before an action labeled “Submit demo request.” The confirmation view says “Demo request received” and “No real ambulance has been requested or assigned.” Permit return/edit before submission.
- **Priority / rationale:** P0; submission must preserve the difference between receipt and assignment illustrated in S05.
- **Dependencies:** F02–F04 values; F06 state model; F07 continuing fallback. Submission remains an in-memory state change.
- **Risk / limit:** A tick, “confirmed,” or vehicle details may imply assignment. Do not imply that a real provider received information.
- **Test:** Immediately after submission, ask participants what happened, whether any ambulance is assigned, what remains pending, and where they can obtain help.

### F06 — Clearly controlled status simulation

- **Trace:** HMW05 → PP05 → S05; C03 request/status archetype; persona H1; BRD simulated tracking view.
- **Benefit hypothesis / scope:** Display discrete demo stages: request received → simulated provider assigned → simulated arrival. Advance only through an explicit “Advance demo status” control and show a reset action. Any route graphic is illustrative; no map precision or moving real-vehicle claim.
- **Priority / rationale:** P0 to satisfy the BRD tracking view while revealing state boundaries. It does not validate live tracking or improve clinical outcomes.
- **Dependencies:** F05 initial state; F07 fallback; client-only fixture state. No timer pretending to receive live updates.
- **Risk / limit:** Assignment and arrival words may overpower the disclaimer; every stage must say simulated and never announce real dispatch.
- **Test:** Ask participants to distinguish the stages and explain how they changed. Verify that reset clears the demo state and entered fictional values.

### F07 — Fallback remains accessible while pending

- **Trace:** HMW08 → PP08 → weak inference from S05, S01; HMW02 → PP02; persona fallback/status goals.
- **Benefit hypothesis / scope:** Expose contact-help navigation on receipt and simulated tracking views with pending-state explanation. Help stays reachable from every view.
- **Priority / rationale:** P1 for the post-submit placement; shared F08 navigation is P0. Low implementation effort supports exploration of an explicitly weak inference, without claiming it prevents delayed contact.
- **Dependencies:** F05–F06 status copy; F08 single fallback view.
- **Risk / limit:** Extra actions may add confusion or sound like medical instructions. No prescriptive waiting advice or claim that contact resolves the situation.
- **Test:** In a receipt-only task, ask what participants would do next and whether they can locate help. Record interpretation rather than infer actual emergency behavior.

### F08 — Explicit unavailable and contact-help states

- **Trace:** HMW06 → PP06 → S06; HMW02 → PP02 → S01; HMW04 → PP04 → S03; persona recovery and clarification goals.
- **Benefit hypothesis / scope:** Provide an empty mock-results state with “No demo option available” and a help action. One fallback view distinguishes unavailable results, category clarification, and call fallback context. Demonstrate contact intent without a real dialable number; state that this prototype cannot contact or dispatch anyone.
- **Priority / rationale:** P0; BRD requires fallback access and an unavailable path. A separate fourth journey or live call integration is unnecessary for the static demonstration.
- **Dependencies:** Reachable navigation from F01 and each later view; unavailable fixture in F04; contextual return to preserve entered demo values. Real emergency contact details require authoritative local verification before any public service use.
- **Risk / limit:** Users may assume a displayed contact control places a real call. Use an explicit simulation label and no actionable fabricated phone number. Do not claim coverage or offer clinical decisions.
- **Test:** Trigger unavailable results and category uncertainty. Ask users to explain the state, find fallback, and say whether the prototype contacted anyone. Check keyboard access and clear return navigation later.

### F09 — Tamil content and language choice

- **Trace:** HMW07 → PP07 → S08; persona A4 and BRD A4.
- **Benefit hypothesis / scope:** A future reviewed Tamil content set may improve understanding for users who prefer it. Retain an English-only prototype until fluent reviewers verify translation and terminology; omit a working Tamil toggle that lacks approved content.
- **Priority / rationale:** Deferred; one sample cannot establish demand and fluent review is missing. Preserve the gap rather than silently treating English as sufficient.
- **Dependencies:** Language-preference research; fluent Tamil review of pickup, categories, estimates, statuses, errors, disclaimer, and fallback; comprehension testing and human revision review.
- **Risk / limit:** Unreviewed translations can misstate meaning; a token toggle would imply ready support. No completion or localization claim.
- **Test:** After review, ask Tamil-preferring users to explain labels and uncertainties in their own words and complete the same simulated tasks.

## Shared assumptions, tradeoffs, and gaps

- BRD A1–A5 and HMW I-A1–I-A2 remain unresolved. **I-A3:** A small mock comparison set may keep effort manageable; no optimum count or ranking is established. Do not default to a supposedly clinically suitable category.
- F01's short entry and F04's detailed estimates address the S01/S07 tension through progressive explanation. Test both contexts; no separate clinical urgency flow is authorized.
- F08's prototype contact intent is an academic demonstration of fallback placement. Real official contacts and provider responses are absent. The working mock must not imply effective emergency calling.
- Accessibility requirements apply to every opportunity: labeled controls, visible focus, readable contrast, touch targets, responsive layout at 320/390px, and an always-readable prototype disclaimer. These are BRD acceptance requirements, not newly proven user needs.
- Secondary audiences, provider terminology, exact input requirements, estimate semantics, status transitions, language demand, and contact destinations remain research gaps. No production storage, dispatch, payments, diagnosis, or guarantees are proposed.

## Self-validation and handoff

**PASS:** F01–F09 are unique. Each has a benefit hypothesis, scope, HMW/PP/S trace, priority rationale, dependencies, risk, and proposed test. Every upstream ID resolves. Required metadata and uncertainty are visible. Seven future views remain within BRD scope, and F09 explicitly preserves deferred Tamil review. All future tests are proposed.

Recipient: Product Ideation Agent running `skills/concept-direction.md`. Use this v1 decomposition and the Phase 1 v1 artifacts to select one focused concept. Human D2 must approve that package before Phase 3; self-validation grants no approval.
