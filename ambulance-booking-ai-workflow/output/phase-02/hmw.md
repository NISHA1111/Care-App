# How Might We — clearer transport requests

**Sample-only academic artifact.** These opportunities interpret authored scenarios; they are not findings from participants, measures of severity, or evidence that a solution works.

| Metadata | Value |
|---|---|
| Owner | Product Ideation Agent |
| Artifact version | v1 |
| Required input | [Pain points](../phase-01/pain-points.md) v1 |
| Supporting input revisions | [Persona](../phase-01/persona.md) v1; [competitor patterns](../phase-01/competitor-notes.md) v1; [research notes](../../input/research-notes.md) v1; [BRD](../../input/brd.md) v1 |
| Readiness | [D1](../reviews/d1-review.md) APPROVED on 2026-10-02 for Phase 1 v1 |
| Applied skill | `skills/how-might-we.md` |
| Status / next dependency | Self-validated; feature decomposition, then concept direction and human D2 |

Phase 1 artifact bodies retain their original pre-review status; the current D1 record governs readiness. D1 accepts the samples for workflow demonstration and does not validate them empirically.

## Opportunity questions

| ID | Open opportunity | Pain-point and scenario trace | Evidence limits / proposed evaluation |
|---|---|---|---|
| HMW01 | How might we help requesters understand the expected arrival and cost before deciding to proceed, while recognizing uncertainty? | PP01 → S04, S07; persona comparison goal; BRD Q4 | Cost inspection is strong only within the sample; ETA need is medium. Ask future participants to explain both estimates and what could change. |
| HMW02 | How might we make the next action easy to identify while allowing requesters to obtain the explanation they need? | PP02 → S01; tension with PP01 → S07; BRD Q1, Q5 | Medium sample signal; speed versus explanation remains unresolved. Test both authored contexts without classifying clinical urgency. |
| HMW03 | How might we help requesters communicate and check an unambiguous pickup location? | PP03 → S02; BRD Q2, A2 | Medium sample signal; neither address quality nor provider interpretation has been observed. Have users describe pickups and providers interpret them in later research. |
| HMW04 | How might we help requesters understand transport categories and resolve uncertainty without requiring a clinical judgment? | PP04 → S03; BRD Q3, A3 | Medium sample terminology concern; safe self-selection is unvalidated. Obtain provider review and comprehension testing; do not infer suitability from symptoms. |
| HMW05 | How might we help requesters understand what submission establishes and what remains pending? | PP05 → S05; BRD Q4 | Medium sample confusion; any remedy is a hypothesis. Ask participants what has happened after submission and whether a provider is assigned. |
| HMW06 | How might we help requesters find a clear next step when no option is available? | PP06 → S06; PP02 → S01; BRD Q5, Q6 | Each explicit need is medium; combining them does not validate a solution. Test recovery from an empty simulated result. |
| HMW07 | How might we make request information understandable in the languages intended users need? | PP07 → S08; BRD Q5, A4 | One sample asks for Tamil; demand and comprehension are unknown. Research preferences and obtain fluent human translation review before offering Tamil content. |
| HMW08 | How might we help requesters make an informed next-action decision while a request is pending? | PP08 → inference from S05, S01; persona H1; BRD Q4, Q5 | Weak inference: nobody was observed delaying fallback. Test next-action interpretation without claiming reduced waiting or safety benefits. |

These questions describe desired understanding and agency without prescribing screens, controls, algorithms, or a service model. Their wording supplies no clinical advice or current service assertion.

## Assumptions, contradictions, and gaps

- **A1–A5 inherited:** caregiver focus, manual pickup, category comprehension, possible Tamil need, and fictional estimates remain BRD hypotheses.
- **I-A1:** A single request journey with optional explanation may accommodate S01 and S07. It is a proposed resolution to test, not evidence that both contexts share the same needs.
- **I-A2:** Explicit language about submission and pending stages may support comprehension. PP08's proposed effect on fallback behavior remains unobserved.
- HMW04 must permit uncertainty to remain unresolved by the app. Providers and users still need to validate categories and clarification expectations.
- HMW07 remains a research opportunity; no unreviewed Tamil translations or functional language toggle are implied.
- No current coverage, prices, arrival data, official contacts, provider credentials, field research, or real status integration exists. Secondary BRD audiences lack distinct sample coverage.

## Self-validation and handoff

**PASS:** HMW01–HMW08 are unique, open questions; every PP and S reference resolves to the v1 inputs. Owner, revisions, approval dependency, sample limits, assumptions, tension, and gaps are recorded. Scope is simulated and nonclinical. No effectiveness claim or empirical priority is made.

Recipient: Product Ideation Agent running `skills/feature-decomposition.md`. Use these v1 questions with persona and pain points to propose testable features. Human D2 review follows the complete chain; this validation is not approval.
