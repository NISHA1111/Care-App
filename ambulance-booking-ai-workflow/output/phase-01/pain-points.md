# Pain-point extraction

**Sample-only artifact for academic workflow demonstration.** All supporting scenarios are authored simulations. No participants were interviewed. Evidence strength describes repetition or explicitness within this simulated set, never empirical validity, prevalence, severity, or clinical risk.

| Metadata | Value |
|---|---|
| Owner | Research Agent |
| Artifact version | v1 |
| Inputs | [persona.md](persona.md) v1; [research-notes.md](../../input/research-notes.md) v1 |
| Scope reference | [brd.md](../../input/brd.md) v1 |
| Skill | `skills/pain-point-extraction.md` |
| Status | Self-validated; pending human D1 review |
| Recipient / next dependency | Phase 1 owner (Research Agent); D1 research review |

Strength policy from the research input: **strong** = repeated in at least two scenarios; **medium** = one explicit scenario; **weak** = inference. All proposed consequences and design implications below are hypotheses for validation, not measured outcomes. Persona references identify the relevant row in its “Goals, needs, and behaviors within the sample” table.

## Strong within-sample signal

### PP01 — Comparison needs enough cost information

- **Sources:** [S04 and S07 — sample research table](../../input/research-notes.md); persona need “Estimated arrival and estimated total cost, with uncertainty visible.”
- **Sample content / strength:** **Strong** for the cost-inspection need: S04 uses estimated total cost to understand an option; S07 checks price before proceeding. Arrival information is explicit only in S04 and remains medium.
- **Potential consequence:** Without visible estimated cost, the requester may hesitate to proceed or lack information for comparison. No actual abandonment or affordability finding is established.
- **Design implication:** Show estimated total cost before submission; pair it with an explicitly estimated arrival time in the comparison view. Label all prototype values fictional and estimates uncertain.
- **Validation question:** Can caregivers and planned-transport requesters locate cost and arrival information, explain what each estimate means, and identify what could change?

## Medium within-sample signals

### PP02 — Entry choices can obscure the next action

- **Sources:** [S01 — sample research table](../../input/research-notes.md); persona need “A clear entry action and visible call fallback.”
- **Sample content / strength:** **Medium.** The urgent-transport requester wants one clear action and a visible call fallback instead of several entry choices.
- **Potential consequence:** Competing entry actions may increase decision effort. Time loss is a hypothesis, not a measured result.
- **Design implication:** Establish one clear request entry action with accessible fallback; preserve an opportunity for later explanation appropriate to S07.
- **Validation question:** Do participants identify the request action and fallback unaided, and does this still support people seeking planned transport?

### PP03 — A street address may leave the pickup ambiguous

- **Sources:** [S02 — sample research table](../../input/research-notes.md); persona need “Address, landmark, and an opportunity to review the pickup.”
- **Sample content / strength:** **Medium.** The simulated Chennai requester supplements an address with a landmark and wants to check it before continuing.
- **Potential consequence:** Incomplete pickup information may require clarification. Actual dispatch delays or location failures are not established.
- **Design implication:** Provide labeled manual address and landmark fields, followed by a pickup review and edit opportunity. Do not imply geocoding or provider verification.
- **Validation question:** What address and landmark details do users supply, and can providers interpret them unambiguously?

### PP04 — Transport type terminology is unfamiliar

- **Sources:** [S03 — sample research table](../../input/research-notes.md); persona need “Plain descriptions and a route to provider clarification.”
- **Sample content / strength:** **Medium.** The requester asks for plain descriptions of equipment-oriented labels and a way to ask the provider.
- **Potential consequence:** Unclear labels may make comparison difficult or leave the requester uncertain. The sample does not establish clinically appropriate self-selection.
- **Design implication:** Use plain descriptions and a provider clarification route; avoid symptom-driven recommendations, diagnosis, or triage.
- **Validation question:** Which labels and descriptions do users understand, and what clarification do providers require before confirming a service?

### PP05 — Submission feedback can imply assignment

- **Sources:** [S05 — sample research table](../../input/research-notes.md); persona need “Distinct request-received and provider-assigned status language.”
- **Sample content / strength:** **Medium.** The simulated requester interprets a success tick as an ambulance assignment when only receipt is known.
- **Potential consequence:** The requester may form an incorrect expectation about what has been confirmed. No downstream behavior is observed.
- **Design implication:** Label request receipt explicitly, distinguish assignment and arrival as separate states, and keep simulated status visibly identified.
- **Validation question:** After submission, can participants explain what is confirmed, what is pending, and what they should do next?

### PP06 — An unavailable result needs a recovery action

- **Sources:** [S06 — sample research table](../../input/research-notes.md); persona need “Clear unavailable state and an alternative action.”
- **Sample content / strength:** **Medium.** When no option is returned, the requester needs a clear state and next action.
- **Potential consequence:** An empty result without guidance may leave the requester unsure how to proceed. Actual service availability is unknown.
- **Design implication:** Design an explicit unavailable state with an accessible fallback action. Any real contact details require validation before public use.
- **Validation question:** Do participants understand unavailability and identify a viable alternative without assuming the app has dispatched a service?

### PP07 — Preferred-language content may be missing

- **Sources:** [S08 — sample research table](../../input/research-notes.md); persona need “Potential Tamil labels subject to human translation review.”
- **Sample content / strength:** **Medium** for one explicit request for Tamil labels. Comprehension impact and audience-wide language demand remain unknown.
- **Potential consequence:** A language mismatch may affect comprehension; this is an untested hypothesis.
- **Design implication:** Retain language support as a research and review requirement. Use fluent human review before presenting translations as ready for users.
- **Validation question:** Which language options do intended users need, and can they accurately explain the translated pickup, estimate, and status labels?

## Weak inference — separate from explicit sample signals

### PP08 — Request-status confusion may reduce use of fallback

- **Sources:** Inference from [S05 and S01 — sample research table](../../input/research-notes.md); persona needs “Distinct request-received and provider-assigned status language” and “A clear entry action and visible call fallback”; persona hypothesis H1.
- **Sample content / strength:** **Weak.** S05 supplies status confusion and S01 supplies fallback preference. Neither scenario observes a user deferring contact because of the confusion; combining two sources does not make this consequence strong.
- **Potential consequence:** A requester who assumes assignment may wait rather than seek clarification or use fallback. This behavior is unobserved.
- **Design implication:** Keep fallback accessible after submission and state what is still pending. Treat the proposed behavior as a test question rather than an established problem frequency.
- **Validation question:** When only request receipt is shown, what do participants believe will happen, and when would they seek clarification or use fallback?

## Assumptions, contradictions, and gaps

- Caregiver primacy, manual pickup entry, user comprehension of type descriptions, Tamil demand, and fictional service data retain persona A1–A5 and BRD A1–A5 limitations. No new demographic or clinical attributes are introduced.
- **Contradiction:** S01 favors speed and fewer entry choices while S07 allows explanation and wants price inspection. PP02 must not remove information needed for PP01; review progressive disclosure and both contexts without assigning clinical urgency.
- S03 supports a terminology problem, not safe clinical self-selection. S08 does not support a population language-demand claim. PP08 remains inference regardless of its two source IDs.
- No field observations, provider validation, empirical frequency or severity measures, accessibility testing, language review, or service integrations exist. Patients and hospital coordinators lack distinct sample coverage.
- Follow-up research should validate pickup interpretation, terminology, estimates, status comprehension, fallback behavior, and language support. These activities remain proposed.

## Self-validation and handoff

**PASS for artifact completeness and traceability; human approval pending.** PP01–PP08 are unique; every point links to resolvable S IDs in the research table and names a persona need. Strong, medium, and weak signals are separated; each point includes a potential consequence, design implication, and validation question. Owner, v1 input revisions, assumptions, contradictions, and gaps are visible. The artifact stays within the BRD's simulated, nonclinical scope.

Recipient: Phase 1 owner (Research Agent). Review this artifact alongside persona and competitor analysis at D1. This self-validation records no human approval and authorizes no phase advancement.
