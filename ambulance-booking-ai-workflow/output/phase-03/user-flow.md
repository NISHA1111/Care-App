# Care — user flow

**Academic prototype only. No real ambulance request, assignment, tracking or call.**

| Metadata | Value |
|---|---|
| Owner / version | Design Agent / v1 |
| Required inputs | [Concept direction](../phase-02/concept-direction.md) v1; [feature opportunities](../phase-02/feature-opportunities.md) v1 |
| Supporting inputs | [Persona](../phase-01/persona.md) v1; [pain points](../phase-01/pain-points.md) v1; [BRD](../../input/brd.md) v1 |
| Authorization / procedure | [D2](../reviews/d2-review.md) APPROVED for Phase 2 v1; [User Flow Generation](../../skills/user-flow-generation.md) |
| Status / next dependency | Self-validated; input to Wireframe Planning; human wireframe sign-off required before UI specification |

## Seven screens and evidence

| ID / screen | Task / features | Sample trace |
|---|---|---|
| V01 Home | Start demo request; help — F01, F08 | PP02 / research S01 |
| V02 Pickup | Enter, review and edit fictional pickup — F02 | PP03 / research S02 |
| V03 Ambulance type | Compare provisional demo categories; clarify — F03, F08 | PP04 / research S03 |
| V04 ETA / fare | Inspect fictional option, review inputs, submit; unavailable variant — F04, F05, F08 | PP01, PP05, PP06 / research S04–S07 |
| V05 Confirmation | Explicit receipt with assignment pending; help — F05, F07 | PP05, PP08 / research S05; PP08 is weak inference |
| V06 Simulated tracking | Inspect and manually advance demo stages; reset — F06, F07 | PP05, PP08 / research S05 |
| V07 Fallback | Contextual contact-intent simulation and return — F08 | PP02, PP04, PP06 / research S01, S03, S06 |

Navigation IDs V01–V07 are distinct from research S01–S08 in the [authored research table](../../input/research-notes.md) v1. F09 / PP07 / research S08 remain deferred pending fluent Tamil review; no language toggle.

## Happy path

```text
V01 Start demo request
  → V02 nonempty fictional address → Continue to type
  → V03 explicit category selection → View demo estimates
  → V04 available fixture + pickup/type/estimate review
       → Submit demo request (in-memory only)
  → V05 Demo request received; assignment pending
       → View simulated tracking
  → V06 Request received
       → Advance demo status → Simulated provider assigned
       → Advance demo status → Simulated arrival
       → Reset demo → V01 empty initial state
Any screen → V07 context-specific help → Return to originating screen
```

The address and optional landmark are echoed beneath V02 fields and again on V04. No location verification occurs. Submission requires valid stored pickup, an explicit category and the available fixture; repeat activation cannot create additional requests. V05 states “No real ambulance has been requested or assigned.” All V06 stages retain this boundary even after simulated assignment.

## Decisions and recovery

| Trigger | Behavior / destination |
|---|---|
| V02 empty or whitespace-only address | Stay on V02; “Enter a fictional pickup address.” Focus address; retain landmark. Nonempty text passes syntax only, not address accuracy. |
| V03 Continue without selection | Stay on V03; “Choose a demo category, or open help if unsure.” Focus category group. No default selection. |
| Category uncertainty | V03 → V07 clarification context without selecting a type; return preserves selection or its absence. |
| V04 fixture selector: No option | Replace estimate/submission with “No demo option available”; explain fixture is fictional; offer Help and Edit type. No submission possible. |
| V04 fixture selector: Available | Restore corresponding fictional estimate and review; switching never submits. |
| Back before submission | V04 → V03 → V02 → V01; preserve draft. V01 resumes draft through Start demo request. |
| V04 Edit pickup / Edit type | Return to V02 / V03 with stored values; normal Continue leads through review again. Category change recomputes its fixture estimate. |
| Cancel demo request before submission | Inline confirmation within current screen: Keep editing / Discard and return home. Discard clears all state; Keep preserves it. |
| Reset on V05, V06 or V07 | Inline confirmation: Keep demo / Reset and return home. Confirmed reset clears draft, fixture, receipt, tracking and help context. No real cancellation implied. |
| Back after receipt | V06 → V05; V05 offers tracking, help or reset, without returning to a submitted editable draft. |
| Fallback from any screen | Save originating screen, help context and state; return restores them exactly, including unavailable fixture or tracking stage. |
| Demonstrate contact intent on V07 | Show “Demo only: no call was placed and nobody was contacted.” Stay on V07; no dialable number, telephone link or external navigation. |

## Proposed state and fixtures

Memory-only state: address, optional landmark, selected category, availability fixture, receipt flag, tracking stage, help origin/context. Initial state is empty with Available fixture selected. Reload starts empty; no persistence or background activity. Back and help retain state; reset/discard erase it.

**Design assumptions D-A1–D-A3, not service facts:** two provisional categories, “Standard transport (demo)” and “Equipment-supported transport (demo),” describe a vehicle transport setup and an equipment setup only. Neither implies clinical suitability; descriptions require provider review. Available fixtures show, respectively, **20–30 minutes / ₹1,200** and **25–40 minutes / ₹1,800**, each labeled fictional estimated arrival and fictional estimated total fare. These values are invented for inspection, with no real rates or included-service claims. No option fixture applies to either category. Contact feedback is inline, keeping seven screens.

## Validation and unresolved questions

**PASS for artifact completeness:** seven screens, F01–F08, happy path, both validation failures, unavailable recovery, edit/back/discard/reset, contextual help and controlled status transitions are defined. Sources resolve to v1 inputs. No clinical advice or operational claim is introduced. This does not report user testing or human design approval.

Remaining gaps: category terminology, provider pickup requirements, real estimate meanings, verified contact destinations, accessibility/usability evaluation and Tamil review. BRD/persona A1–A5 remain hypotheses. Recipient: Design Agent for [wireframe planning](../../skills/wireframe-planning.md); produce wireframes from this saved v1 flow, then stop for human sign-off.
