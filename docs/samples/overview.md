---
id: overview
sidebar_position: 1
title: Defense, Aerospace & AI Samples
description: Original writing samples in the formats used by defense, aerospace, and AI engineering teams.
---

## Defense, Aerospace & AI Writing Samples

These samples show how I document complex, safety-critical, and AI-enabled systems.
Each one follows the conventions of a document type that defense and aerospace programs use every day.

:::note Sample content
Every system, part number, and value on these pages is **fictional** and written for demonstration only.
No content is drawn from controlled, proprietary, or export-restricted sources.
:::

---

## Samples

| Sample | Document type | What it demonstrates |
|--------|---------------|----------------------|
| [AI Model Card: Runway Debris Detection](./model-card) | AI/ML model documentation | Intended use, limitations, evaluation data, and human oversight, mapped to DoD Responsible AI principles and the NIST AI RMF |
| [Maintenance Procedure: UAS Propeller Replacement](./maintenance-procedure) | Technical manual work package | MIL-STD-38784-style WARNING/CAUTION/NOTE hierarchy, prerequisites, and verifiable steps |
| [Interface Control Document: Telemetry Message](./interface-control-document) | Interface Control Document (ICD) excerpt | Byte-level message definitions, units, ranges, and requirement traceability |

---

## How I approach this kind of documentation

- **Accuracy over style.** Every value has a source, a unit, and a range. If an SME can't confirm it, it doesn't ship.
- **Safety-first structure.** Hazards appear *before* the step they apply to, never after.
- **Traceability.** Requirements, test evidence, and revisions are linked so reviewers can audit the document.
- **Plain language for operators.** One action per step, imperative voice, and controlled terminology.
- **Honest AI documentation.** Model limitations and failure modes get the same detail as capabilities.
