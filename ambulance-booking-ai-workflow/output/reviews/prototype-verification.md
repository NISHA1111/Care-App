# Prototype verification — Care v1

Date: 2026-10-02 (Asia/Kolkata). Build owner: Design Agent. Verification: assistant browser QA and source checks. Result: **PASS for the academic prototype acceptance checks below**. All human gates D1/D2/D3 are APPROVED; wireframes are SIGNED_OFF before UI generation.

## Environment and method
Static app served on localhost port 8000. Codex in-app browser inspected rendered DOM and screenshots, with 390px/844px and 320px/740px viewport overrides. Interaction checks used visible controls and native keyboard radio navigation with fictional addresses. One initial preview tab changed state during testing, so remaining checks used an isolated background tab. It was closed after verification; the original preview was preserved. JavaScript syntax checked using bundled Node. No test participants were recruited.

## Results
| Check | Result / evidence |
|---|---|
| Seven views and source trace | PASS: V01–V07 correspond to approved flow/wireframes/UI specification and selected F01–F08. |
| Standard fixture | PASS: standard category displays fictional 20–30 minutes / ₹1,200. |
| Equipment fixture | PASS: equipment category displays fictional 25–40 minutes / ₹1,800; keyboard arrow selection works. |
| Invalid pickup | PASS: empty and whitespace-only address stay on pickup; labeled alert, invalid state and focus return to address. |
| Missing category | PASS: no default; Continue reports error and focuses the first radio. |
| Unavailable fixture | PASS: submission and estimates disappear; help stays reachable; switching back restores category estimate. |
| Edit and draft retention | PASS: pickup edit preserves landmark/category; returning through comparison reflects changed address. |
| Help and contact simulation | PASS: general, clarification, unavailable and tracking contexts; return preserves draft/fixture/stage and restores invoking control. Contact shows explicit no-call feedback. |
| Receipt | PASS: “Demo request received” and explicit no real request/assignment language. Receipt is a historical screen, not current simulated progress. |
| Tracking | PASS: received → simulated assigned → simulated arrival only via user action; terminal state removes advance and focuses completion. Help/back preserves stage. |
| Cancel/reset | PASS: Keep preserves edits/status; discard/reset confirmations clear all inputs and return home. |
| Reload | PASS: home restored, address/landmark blank and no selected category. |
| Responsive layout | PASS: all seven views have document scroll width equal to viewport at 320px and 390px. A 180-character unbroken pickup also wraps at 320px. |
| Visible action targets | PASS: all measured visible buttons at both mobile widths are at least 44px wide/high; native 20px radios are inside padded labels. |
| Focus and semantic feedback | PASS for inspected DOM/keyboard behavior: native radios, labels, alerts, polite status and navigation/error/return focus. No screen-reader user audit performed. |
| Disclaimer | PASS: exact assignment sentence visibly present on all seven views. |
| Visual review | PASS: saved full-page screenshots show readable hierarchy, wrapping and unobscured actions at mobile widths. |
| Browser warnings/errors | PASS: isolated QA tab logs returned none. |
| Syntax and static boundaries | PASS: JavaScript syntax valid; unique HTML IDs, local asset refs and exact disclaimer. Source contains no fetch, storage, location or tracking timer APIs; no real telephone links or medical recommendation logic. |
| Repeated submission guard | Source-reviewed: received flag prevents a second submission; UI also leaves review immediately. Not a load/concurrency test. |

[Viewport measurements](viewport-audit.json) record actual DOM checks. Token contrast calculations are in the UI spec; this is not an exhaustive rendered contrast or assistive-technology audit. Usability target, provider terminology, language review and actual service validity remain untested. F09 Tamil is deferred. No GitHub deployment has been performed.

## Screenshots
[Home](../screenshots/01-home.jpg) · [Pickup](../screenshots/02-pickup.jpg) · [Type](../screenshots/03-type.jpg) · [Estimates](../screenshots/04-estimate.jpg) · [Receipt](../screenshots/05-confirmation.jpg) · [Tracking](../screenshots/06-tracking.jpg) · [Fallback](../screenshots/07-fallback.jpg) · [Unavailable](../screenshots/08-unavailable.jpg) · [320px tracking](../screenshots/09-tracking-320.jpg)

## Build fingerprints
- `app/index.html` v1: `b0509f9187a53b1f8fba405dc0ef3c2f0049fb9704d0bdb8780bea833386be74`
- `app/style.css` v1: `5bd23bb1c2e2016bbdc4d925e6bf3552e988f54ad9aaea99baadbc0191a05206`
- `app/script.js` v1: `8803a4057cc813e59ca7de6a1adf573e3c9ee6d253b28048feceb6b16ab276b0`
