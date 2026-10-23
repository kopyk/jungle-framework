---
id: overview
sidebar_position: 1
title: Writing Samples
description: Original technical writing samples for AI systems, plus defense and aerospace documentation.
---

## Technical Writing Samples

These samples show how I document AI systems and other complex, high-stakes technology.
Each one follows the conventions of a document type that engineering teams use every day.

:::note Sample content
Systems, part numbers, and values in these samples are **fictional** unless stated otherwise.
The RAG tutorial describes a real tool I built, **ask-my-docs**.
:::

---

## Artificial Intelligence

| Sample | Document type | What it demonstrates |
|--------|---------------|----------------------|
| [AI Model Card: Runway Debris Detection](./model-card) | Model documentation | Intended use, condition-level performance, failure modes, and human oversight, mapped to DoD Responsible AI principles and the NIST AI RMF |
| [Tutorial: Build a Q&A Bot Over Your Docs](./rag-tutorial) | Developer tutorial | Explaining retrieval-augmented generation (RAG) and walking developers through working Python code that calls the Claude API |
| [API Reference: Document Classification](./api-reference) | REST API reference | Parameters, request and response examples, errors, and rate limits for an AI endpoint |
| [LLM Evaluation Rubric: Documentation Q&A](./eval-rubric) | Evaluation guide | Pass/fail grading criteria, test-set design, and reporting results by question type |

## Defense & Aerospace

| Sample | Document type | What it demonstrates |
|--------|---------------|----------------------|
| [Maintenance Procedure: UAS Propeller Replacement](./maintenance-procedure) | Technical manual work package | Work-package layout (MIL-STD-40051-2) with MIL-STD-38784 WARNING/CAUTION/NOTE advisories, prerequisites, and verifiable steps |
| [Interface Control Document: Telemetry Message](./interface-control-document) | ICD excerpt | Byte-level message definitions, units, ranges, and requirements traceability |

---

## How I approach technical documentation

- **Accuracy over style.** Every value has a source, a unit, and a range. If an SME can't confirm it, it doesn't ship.
- **Honest AI documentation.** Model limitations and failure modes get the same detail as capabilities.
- **Working examples.** Code samples are complete and tested, so developers can copy them and run them.
- **Safety-first structure.** Hazards appear *before* the step they apply to, never after.
- **Traceability.** Requirements, test evidence, and revisions are linked so reviewers can audit the document.
