# Illustrative competitor-pattern notes

Owner: Research Agent. Artifact version: v1. Input revisions: `input/brd.md` v1; `input/research-notes.md` v1 (initial supplied sample). Skill: `skills/competitor-analysis.md`. Phase: 01 Discover. Status: self-validated; awaiting human D1 review.

## Scope and evidence

This is an illustrative comparison of three invented interface archetypes, not an evaluation of named competitors. C01–C03 and S01–S08 resolve to `input/research-notes.md`. All observations are authored simulations. No services, apps, dispatch systems, participants, prices, or arrival times were examined. The BRD establishes the academic Chennai / Tamil Nadu setting, goals, constraints, and exclusions; it does not establish market demand. No current market claims or external sources are used.

## Capability comparison

| Capability | C01: call-first directory | C02: booking marketplace | C03: request-and-status interface |
|---|---|---|---|
| Initial action | Direct provider contact is the defining pattern. | Compare service cards before requesting. | Request submission followed by distinct status stages. |
| Availability visibility | May be learned during the call, outside the interface. | Service cards can present availability; the sample does not specify data freshness. | Status can communicate known request progress; the sample does not establish live supply visibility. |
| Type explanation | May depend on provider conversation. | Comparison cards offer space for explanations; implementation is unspecified. | Type selection and explanation are unspecified. |
| ETA and price | May be clarified outside the interface. | Card comparison could show both estimates; neither accuracy nor inclusion is established. | Estimate display is unspecified; status must reflect actual system knowledge. |
| Request versus assignment | Provider conversation may clarify this; no interface state model is supplied. | Submission/assignment distinction is unspecified. | Explicit request received, provider assigned, and arrival stages are the defining pattern. |
| Decision effort | A direct contact route offers a short entry path, but may require conversation. | Many choices may add effort. | Status distinctions offer clarity but require understandable language. |
| Unavailable and fallback behavior | Direct contact exists; unavailable handling is unspecified. | Unavailable handling and contact fallback are unspecified. | Unavailable handling and contact fallback are unspecified. |

“May” and “could” identify interpretation or a design possibility, not observed functionality. Unspecified means the input does not support a conclusion; it does not mean a capability is absent.

## Design hypotheses for Care

| Hypothesis | Traceability | Support within sample | Proposed validation |
|---|---|---|---|
| H-C01: Give the home view one primary request action and a visible call fallback, borrowing C01's direct-contact pattern. | C01, S01, S06; BRD Q1/Q5/Q6 | Inference across two distinct scenarios; neither tests a combined home design. | Observe whether caregivers find the main action and fallback during simulated request and unavailable tasks. |
| H-C02: Use a small comparison set with plain transport descriptions and a provider-clarification route; do not infer suitability from symptoms. | C02, S03; BRD Q3, A3 | Weak design inference from one explicit comprehension concern. | Review labels with providers and test user understanding without clinical recommendations. |
| H-C03: Present estimated arrival and estimated total cost together, with uncertainty visible before submission. | C02, S04, S07; BRD Q4, A5 | Within-sample repeated concern for cost; combined ETA/cost appears explicitly only in S04. Actual comprehension is unvalidated. | Ask participants to explain the estimates, their limitations, and what would happen if they change. |
| H-C04: Separate “request received” from “provider assigned” and arrival; for the prototype keep all states explicitly simulated. | C03, S05; BRD Q4 and exclusions | Weak design inference from one explicit status-misinterpretation scenario. | Test whether participants can correctly distinguish request receipt from assignment and actual service confirmation. |
| H-C05: Make pickup review and an explicit unavailable view part of the flow; archetype comparison alone cannot establish their design. | S02, S06; BRD Q2/Q6, A2 | One explicit scenario per need; interface design remains an inference. | Observe landmark/address entry and review, then test recovery when the simulated results list is empty. |

## Contradictions, assumptions, and gaps

- S01 favors a fast entry while S07 favors price explanation. A clear entry and optional explanation is a hypothesis to test; there is no evidence for clinical urgency detection or automated journey assignment.
- C02's comparison pattern may increase decision effort; no optimum option count, sorting method, or user preference has been established.
- C03 depends on system knowledge. The academic prototype has no dispatch integration and cannot show real assignment, tracking, availability, or arrival guarantees.
- S08 motivates proposed Tamil comprehension research; this comparison establishes neither language demand nor translation quality.
- Provider trust, accreditation, coverage, accessibility, pricing policy, cancellation, and data freshness are unknown. No capability scoring or winner is justified.
- Coinbase-inspired styling is visual reference material only and contributes no competitor or user evidence.

## Proposed research and next dependency

1. Recruit consenting caregivers and hospital coordinators to verify who requests transport, what they need first, and how planned journeys differ.
2. With providers, validate type terminology, address/landmark requirements, estimate semantics, and possible service states. Obtain dated primary sources before making any real competitor capability claim.
3. Run comparative comprehension tasks for entry actions, transport cards, estimate wording, and request/assignment states; document success and misunderstandings rather than assuming these hypotheses hold.
4. Test empty results and fallback access, and review proposed Tamil content with fluent users.

Hand off to the Phase 1 owner for integration with personas and pain points, then D1 human review. Do not advance to Phase 2 without the required APPROVED gate record. The Research Agent's validation is not human approval.

## Validation report

PASS: nonempty required artifact; owner/version/input revisions recorded; C01–C03 and S references resolve to supplied notes; capabilities distinguish supported patterns from unspecified details; assumptions, contradictions, and gaps visible; no current market claims; no clinical guidance, dispatch claims, or guaranteed estimates; consistent with BRD. Unresolved research questions remain Q1–Q6. Sources: `input/brd.md` and `input/research-notes.md`. Next dependency: Phase 1 consolidation and human D1 decision.
