# Concept direction — Care: clear request, clear status

**Sample-only academic concept.** This direction selects design hypotheses for a mock app, not a validated service, clinical decision tool, or claim of improved response time.

| Metadata | Value |
|---|---|
| Owner | Product Ideation Agent |
| Artifact version | v1 |
| Required input revisions | [Feature opportunities](feature-opportunities.md) v1, produced and checked before this step; [competitor patterns](../phase-01/competitor-notes.md) v1; [persona](../phase-01/persona.md) v1; [pain points](../phase-01/pain-points.md) v1 |
| Supporting input revisions | [HMW](hmw.md) v1; [research notes](../../input/research-notes.md) v1; [BRD](../../input/brd.md) v1 |
| Visual reference | [Design reference](../../input/design-reference.md), supplied Coinbase reference snapshot; visual inspiration only |
| Readiness | [D1](../reviews/d1-review.md) APPROVED on 2026-10-02 for Phase 1 v1 |
| Applied skill | `skills/concept-direction.md` |
| Status / next dependency | Self-validated; human D2 concept review required before Phase 3 |

## Selected audience and promise

Focus on the BRD's provisional family member or caregiver arranging transport in the Chennai / Tamil Nadu concept setting. Planned transport supplies an additional comparison context, not a second persona validated by research. Patients and coordinators remain research gaps.

**Concept promise:** In a clearly labeled simulation, the requester can enter and review a pickup, inspect plain transport information and fictional estimates, submit a demo request, understand the resulting demo status, and find help when uncertain or when no demo option is available. This promises a comprehensible prototype task, not actual ambulance availability, assignment, calling, pricing, arrival, or clinical suitability.

## Why this single direction

Combine C01's direct-contact access, a restrained use of C02's comparison pattern, and C03's explicit status stages. These are invented archetypes from the supplied sample, not evaluated competitors. Their combination is a design inference:

- F01 provides a clear entry tied to HMW02/PP02/S01.
- F02–F04 provide pickup checking, category explanation, and estimate inspection tied to HMW03/PP03/S02, HMW04/PP04/S03, and HMW01/PP01/S04/S07.
- F05–F06 separate receipt and simulated assignment/arrival tied to HMW05/PP05/S05 and C03.
- F07–F08 preserve pending-state help, uncertainty clarification, and unavailable recovery tied to HMW08/PP08's weak inference and HMW06/PP06/S06.

A single guided journey is narrow enough for the seven-view static BRD prototype and leaves the S01/S07 tension visible: short entry, explanations at comparison and review, no automatic urgency classification. Its effectiveness remains untested.

## Selected features and seven-view allocation

Selected for the future mock: **F01–F08**. P0 covers the core journey and recovery; F07's P1 pending placement shares F08's existing help view. **F09 is deferred** pending fluent Tamil review and language research.

| Proposed view | Purpose / selected feature IDs | Key boundary |
|---|---|---|
| 1. Home | Clear demo-request action, brief explanation, fallback access — F01, F08 | Visible academic disclaimer; no fastest-response or coverage claim. |
| 2. Pickup | Manual address and optional landmark, inline review/edit — F02 | Fictional test inputs; no location verification or geolocation. |
| 3. Ambulance type | Small provisional mock category set and clarification route — F03, F08 | No clinical recommendation, default suitability, or symptom assessment. |
| 4. ETA / fare | Fictional availability, estimated arrival interval and total fare, pre-submit summary — F04, F05, F08 | Empty-result variant lives in this view; all values are demo data. |
| 5. Confirmation | Explicit demo request receipt and what remains pending — F05, F07 | Receipt is not assignment; no real request was sent. |
| 6. Simulated tracking | User-controlled demo stages and reset — F06, F07 | Explicit simulation on each stage; no live map, dispatch feed, or automatic progress. |
| 7. Fallback | Contextual unavailable, type clarification, and call-intent demonstration — F08 | No fabricated dialable number or claim that a call was placed. Return preserves current demo inputs; reset clears them. |

This allocation is a concept boundary, not a completed user flow, wireframe, UI specification, or app. Phase 3 owns those outputs after D2. The app can be built only after D3.

## Scope and visual direction

After future approvals, use a roughly 390px mobile composition built with static HTML/CSS/vanilla JavaScript, compatible with GitHub Pages and responsive at 320px. Data stays in memory and reset clears fictional inputs and state. No backend, payments, production personal-data storage, background location, real dispatch, or automatic clinical decisions.

Apply the supplied Coinbase snapshot only as a restrained visual direction: white canvas, ink text, light-weight headings, scarce #0052ff primary actions, pill buttons, rounded cards, and minimal depth. Use a system font stack; do not require proprietary fonts. Adapt spacing to the small viewport rather than copying marketing-scale heroes or trading surfaces. Validate contrast, focus, labels and touch targets during design/prototype checks; appearance alone provides no evidence of trust or usability.

English content remains provisional. Do not expose a working Tamil toggle or publish unreviewed translations. Retain F09/HMW07/PP07/S08 as an explicit deferred requirement, including fluent review of critical terminology and comprehension testing.

## Tradeoffs and exclusions

| Choice | Reason for this mock | Cost / unresolved issue |
|---|---|---|
| One guided request journey | Keeps F01 entry clear and preserves later F04 explanation | Actual differences between urgent and planned contexts remain unknown. |
| Manual pickup with optional landmark | BRD A2 supports a backend-free demonstration | Provider address requirements and real pickup accuracy are unvalidated. |
| Small category set with uncertainty route | Makes F03 understandable within the static scope | No category selection is established as clinically appropriate; terminology needs provider review. |
| Explicit receipt and controlled demo progress | Makes F05–F06 stage boundaries inspectable | Real integration, data freshness, failed assignment and operational status semantics remain unknown. |
| Simulated contact intent | Demonstrates F08 access without invented operational contacts | Cannot fulfill actual emergency calling; real destinations require authoritative validation before service use. |
| English first, Tamil deferred | Avoids implying ready language support without fluent review | Leaves the S08 need unanswered until research/review occurs. |

Exclude symptom-driven type recommendations, diagnosis, triage, provider credentials, provider ranking, confirmed service coverage, live availability/tracking, guaranteed fares/ETAs, payments, and operational calling. These exclusions follow the BRD and missing evidence; they are not assertions about existing services.

## Assumptions and outstanding decisions

- BRD/persona **A1–A5** remain hypotheses accepted only as sample inputs at D1.
- HMW **I-A1** (guided flow with optional explanation) and **I-A2** (explicit pending wording) remain untested. Feature **I-A3** (small comparison set) supplies no validated optimum count.
- **I-A4:** A persistent disclaimer plus local demo labels may prevent service misinterpretation; test this, as polished visual design can still imply a working service.
- PP08 remains weak even though F07 is included; do not report reduction in waiting or increased safety.
- Missing field research, provider terminology/requirements, official local contact verification, estimate semantics, accessibility evaluation, language review, and distinct secondary-audience evidence remain unresolved.
- D2 should assess the focused caregiver audience, seven-view scope, F01–F08 selection, simulated contact boundary, and deferred F09. Any upstream revision requires downstream revalidation and rereview.

## Proposed evaluation, not completed results

1. **Comprehension and journey test:** With five future consenting participants, use fictional pickup details for the S01 and S07 contexts. Observe unaided completion, address edits, category uncertainty, and estimate interpretation. The BRD target of 4/5 completing the simulated flow is proposed; no result exists.
2. **Status and service interpretation:** After receipt and each controlled demo stage, ask what is known, whether a real ambulance is assigned, how status changed, and what help is available. Any mistaken belief that dispatch/calling occurred triggers revision before public sharing.
3. **Recovery task:** Trigger no demo availability and category uncertainty. Observe help discovery, return navigation, and whether users understand that contact is simulated. Keep PP08 behavior observations separate from general task success.
4. **Terminology and content review:** Providers review categories, pickup detail expectations, estimate meanings, and stage semantics. Fluent Tamil reviewers review F09 content before translation is exposed; later test comprehension with Tamil-preferring users.
5. **Prototype acceptance after D3:** Check all seven views, complete/reset behavior, unavailable and clarification paths, persistent disclaimer/fallback access, no overflow at 320/390px, keyboard operation, labeled inputs, visible focus, readable contrast, and touch targets. These checks do not validate real service effectiveness.

## Self-validation and handoff

**PASS:** One concept is selected, with a provisional audience, bounded promise, F01–F08 selection, deferred F09, explicit exclusions, tradeoffs, assumptions, and proposed evaluation. The PP/HMW/F/S and C references resolve to v1 inputs. Scope remains the BRD's seven-view academic mock; Coinbase is visual-only. No clinical decisions, empirical success claims, current service facts, or automatic human approvals are introduced.

Recipient: workflow orchestrator for human D2 review. Review this artifact with [HMW v1](hmw.md) and [feature opportunities v1](feature-opportunities.md). This is an artifact validation report, not a D2 decision. Stop before Phase 3 until the project user approves the current package.
