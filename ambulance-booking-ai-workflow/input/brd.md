# Care — Ambulance booking design workflow

Status: academic brief, version 1. Owner: project author. Source: assignment request.

## Problem statement
People in Chennai / Tamil Nadu need a faster and clearer way to find and request appropriate ambulance services, with visibility into availability, ambulance type, ETA, and expected pricing. This is the problem hypothesis supplied by the assignment; prevalence has not been established by field research.

## Background
A Week 3 AI-for-Designers assignment demonstrating a governed workflow before producing a mobile web prototype. No interviews, provider integrations, or live dispatch data exist.

## Target users
Primary: a family member or caregiver arranging transport. Secondary: a patient arranging planned transport and a hospital coordinator. These are proposed segments, not validated populations.

## Business goal
Demonstrate how traceable research and human review produce a focused, usable design. No commercial targets or service claims.

## User goals
Understand the next action; enter an unambiguous pickup; compare service information; see estimates and uncertainty; distinguish a request from confirmation; access an emergency call fallback.

## Geography
Chennai / Tamil Nadu is the concept setting. Local addresses, Tamil content, coverage, rates, and official emergency contact details require validation before public service use.

## In scope
Three phases, three human gates, nine reusable skill specifications, traceable sample artifacts, and after approval a roughly 390px HTML/CSS/vanilla JavaScript app. Seven proposed views: home, pickup, ambulance type, ETA/fare, confirmation, simulated tracking, fallback. Mock data and explicit academic disclaimer throughout.

## Out of scope
Real dispatch, payments, diagnosis, triage, ambulance recommendations based on symptoms, provider accreditation claims, guaranteed ETA/prices, background location collection, production personal data storage.

## Constraints
Static GitHub Pages compatible; no backend or heavy framework needed; accessible mobile controls; no proprietary fonts required. Human APPROVED status is mandatory before advancing. Coinbase reference supplies visual inspiration only: white canvas, scarce blue #0052ff, light-weight headings, pill buttons, rounded cards, minimal depth. It supplies no product or research evidence.

## Assumptions
A1: caregivers are the primary audience (sample only).
A2: manual address and landmark entry can support a prototype without geolocation.
A3: users can compare transport categories without the app making clinical recommendations; provider clarification remains necessary.
A4: Tamil language support may matter; translations need a fluent human reviewer.
A5: availability, fares and ETA can be demonstrated using explicitly fictional values.

## Success criteria
Workflow: every insight has input IDs; owners and handoffs recorded; no gate is auto-approved; exceptions have routing. Prototype acceptance after D3: complete simulated booking and reset; clear availability/type/ETA/fare labels; persistent prototype disclaimer and fallback access; no horizontal overflow at 320/390px; keyboard access, visible focus, labeled inputs and readable contrast. Proposed usability target: 4 of 5 future test participants complete the simulated flow unaided; not a measured result.

## Research questions
Q1: Who initiates transport requests and under what circumstances?
Q2: What pickup information helps users and providers?
Q3: Which type labels are understood without clinical inference?
Q4: How do people interpret estimated availability, fare and arrival time?
Q5: What fallback and language support are needed?
Q6: What failure states are essential when no ambulance is available?
