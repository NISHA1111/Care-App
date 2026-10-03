# Persona synthesis — caregiver requesting ambulance transport

**Sample-only artifact for academic workflow demonstration.** This is a provisional role-based composite of authored simulations, not a research-validated persona. No participants were interviewed and no demographics, diagnoses, or service usage histories are inferred.

| Metadata | Value |
|---|---|
| Owner | Research Agent |
| Artifact version | v1 |
| Inputs | `input/brd.md` v1; `input/research-notes.md` v1 |
| Skill | `skills/persona-synthesis.md` |
| Status | Self-validated; pending human D1 review |
| Next dependency | Pain-point extraction, then Phase 1 review at D1 |

## Proposed role and context

The primary proposed role is a family member or caregiver arranging transport. The BRD identifies this segment provisionally (A1); sample scenarios S01–S06 illustrate its tasks. Chennai / Tamil Nadu is the concept setting, with a Chennai pickup explicitly illustrated in S02. Neither geographic coverage nor the prevalence of this role is established.

Two contexts need separate emphasis: the urgent-transport requester seeking a clear next action (S01), and the planned-transport requester who has time to inspect price and explanation (S07). “Urgent” describes the authored scenario; it does not establish a diagnosis, clinical priority, or an app triage capability.

## Goals, needs, and behaviors within the sample

| Goal | Need / constraint | Simulated behavior | Traceability |
|---|---|---|---|
| Begin a transport request with little decision effort | A clear entry action and visible call fallback | Looks for one action rather than several entry choices | S01; BRD Q1, Q5 |
| Specify the intended pickup clearly | Address, landmark, and an opportunity to review the pickup | Adds a nearby landmark when a street address may be ambiguous | S02; BRD Q2 |
| Understand transport categories | Plain descriptions and a route to provider clarification | Asks what unfamiliar equipment-oriented labels mean | S03; BRD Q3 |
| Compare an option before proceeding | Estimated arrival and estimated total cost, with uncertainty visible | Uses arrival and cost together; planned requester checks price | S04, S07; BRD Q4 |
| Understand what has actually happened after submission | Distinct request-received and provider-assigned status language | Reads a success tick as assignment although only a request was received | S05; BRD Q4 |
| Recover when there is no available option | Clear unavailable state and an alternative action | Seeks a next step after no option is returned | S06; BRD Q6 |
| Read content in a preferred language | Potential Tamil labels subject to human translation review | Requests Tamil labels in one illustrative scenario | S08; BRD Q5 |

These rows describe sample content. They do not establish observed behavior in real users. The comparison goal is repeated across S04 and S07 and is “strong” only under the input's within-sample policy; the other explicit needs are “medium” within that policy. Every empirical claim remains unvalidated.

## Assumptions and design hypotheses

- **A1 — Proposed primary audience:** Treat caregivers as the initial design focus because the BRD proposes them and S01–S06 illustrate related tasks. Validate who actually initiates requests before treating this as a population finding.
- **A2 — Pickup entry:** Manual address and landmark entry may support a simulation (BRD A2; S02). The sample does not demonstrate address accuracy or successful provider pickup.
- **A3 — Category comprehension:** Plain descriptions and provider clarification may help users understand transport categories (BRD A3; S03). The app must not infer a clinically appropriate type from symptoms or make a triage recommendation.
- **A4 — Language:** Tamil support may be useful (BRD A4; S08), but demand, comprehension, and translation quality remain unknown.
- **A5 — Service information:** Fictional availability, fare, and ETA can illustrate comparison tasks (BRD A5; S04, S07). They cannot support real availability, pricing, or arrival claims.
- **H1 — Status comprehension:** Explicit stage labels may reduce the illustrated confusion around submission (inference from S05). This is a weak design hypothesis until comprehension testing.

## Contradiction and boundary notes

S01 favors speed and few entry choices; S07 favors price inspection and more explanation. Preserve both contexts for design review rather than collapsing them into a single universal preference. The dataset does not show how users switch between contexts or justify automated urgency classification.

S03 identifies a comprehension risk in category selection; it does not validate safe self-selection or automated clinical recommendations. S08 illustrates one language preference; it does not establish language demand across the proposed audience. The proposed patient and hospital-coordinator segments in the BRD have insufficient distinct sample detail for separate personas; no attributes are invented for them.

## Research gaps and questions for review

- Validate who initiates transport requests, including caregivers, patients, and coordinators (BRD Q1; S01, S07).
- Observe pickup entry and provider interpretation of addresses and landmarks (BRD Q2; S02).
- Validate terminology and provider-clarification paths with providers and users (BRD Q3; S03).
- Test comprehension of uncertainty, estimates, and request-versus-assignment status (BRD Q4; S04, S05, S07).
- Investigate fallback expectations and language preferences; obtain fluent human Tamil review (BRD Q5; S01, S08).
- Test what users expect when no option is available (BRD Q6; S06).

These are proposed research activities; none has been completed. No real emergency contacts, rates, ETAs, provider credentials, or coverage assertions are supplied.

## Self-validation and handoff

**PASS for artifact completeness and traceability; human approval pending.** The artifact is nonempty, identifies its owner/version/input revisions, resolves S01–S08 to `input/research-notes.md`, separates sample content from assumptions, records contradictions and gaps, and retains the BRD's nonclinical, simulated scope. No demographic facts or service claims were fabricated.

Recipient: Phase 1 owner (Research Agent). Use this v1 persona as an input to pain-point extraction; retain its sample-only limits. Phase advancement requires the separate human D1 decision and is not authorized by this self-validation.
