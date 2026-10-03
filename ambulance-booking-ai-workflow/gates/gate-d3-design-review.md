# Gate D3 — Design review

Required artifacts: user-flow.md, wireframe-plan.md, ui-spec.md. Require current revisions and prior gate approval where applicable.

## Human checks
- Flow matches concept
- Tasks short and clear
- Emergency fallback prominent
- Type, availability, ETA and price clear and simulated
- Accessibility considered
- No unsupported medical decision-making
- Human wireframe sign-off recorded

## Decision and routing
Human chooses APPROVE / REVISE / REJECT in output/reviews/d3-review.md, with reviewer, date, revisions and feedback. Store APPROVE as APPROVED. Never infer approval from silence or automated validation. REVISE → Design Agent; REJECT → stop and request better input; APPROVED → App prototype. Upstream edits invalidate approval. A PENDING or NOT_READY gate stops routing.
