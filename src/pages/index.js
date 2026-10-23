// src/pages/index.js
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Card({ title, desc, href, cta = "Open" }) {
  return (
    <Link
      to={href}
      style={{
        display: "block",
        textDecoration: "none",
        border: "1px solid var(--ifm-toc-border-color)",
        borderRadius: 14,
        padding: "18px 18px 16px",
        background: "var(--ifm-background-surface-color)",
        color: "inherit",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 6 }}>
            {title}
          </div>
          <div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.45 }}>
            {desc}
          </div>
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            alignSelf: "center",
            whiteSpace: "nowrap",
            opacity: 0.85,
          }}
        >
          {cta} →
        </div>
      </div>
    </Link>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function CardGrid({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 14,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Technical writing samples for AI, defense, and aerospace systems by Jordan Yan."
    >
      <main style={{ padding: "54px 0 72px" }}>
        <div className="container">
          {/* Hero */}
          <div style={{ maxWidth: 920, margin: "0 auto" }}>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7 }}>
              Jordan Yan · Technical Writer · San Luis Obispo, CA
            </div>

            <h1 style={{ fontSize: 44, letterSpacing: "-0.02em", margin: "10px 0 10px" }}>
              Documentation for AI systems and the people who build them
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: "0 0 26px" }}>
              Writing samples that show how I document AI models, developer APIs,
              and safety-critical systems: accurate, tested, and easy for engineers
              and users to act on.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 26 }}>
              <Link className="button button--primary button--lg" to="/docs/samples/overview">
                View writing samples
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/docs/jungle-decision-framework"
              >
                Jungle Decision Framework
              </Link>
            </div>
          </div>

          {/* Defense & AI samples */}
          <div style={{ maxWidth: 980, margin: "34px auto 0" }}>
            <SectionLabel>Artificial intelligence</SectionLabel>
            <CardGrid>
              <Card
                title="AI Model Card"
                desc="Intended use, limitations, and evaluation for a runway debris detection model, mapped to DoD Responsible AI principles and the NIST AI RMF."
                href="/docs/samples/model-card"
                cta="Read"
              />
              <Card
                title="RAG Tutorial"
                desc="Build a Q&A bot over your docs in Python with the Claude API, with working, tested code."
                href="/docs/samples/rag-tutorial"
                cta="Read"
              />
              <Card
                title="API Reference"
                desc="Parameters, examples, errors, and rate limits for an AI document-classification endpoint."
                href="/docs/samples/api-reference"
                cta="Read"
              />
              <Card
                title="LLM Evaluation Rubric"
                desc="Pass/fail criteria, test-set design, and reporting for grading an AI assistant's answers."
                href="/docs/samples/eval-rubric"
                cta="Read"
              />
            </CardGrid>
          </div>

          {/* Defense & aerospace samples */}
          <div style={{ maxWidth: 980, margin: "34px auto 0" }}>
            <SectionLabel>Defense &amp; aerospace</SectionLabel>
            <CardGrid>
              <Card
                title="Maintenance Procedure"
                desc="A MIL-STD-38784-style work package for UAS propeller replacement with WARNING/CAUTION/NOTE advisories."
                href="/docs/samples/maintenance-procedure"
                cta="Read"
              />
              <Card
                title="Interface Control Document"
                desc="Byte-level telemetry message definition with units, ranges, and requirements traceability."
                href="/docs/samples/interface-control-document"
                cta="Read"
              />
            </CardGrid>
          </div>

          {/* Jungle framework */}
          <div style={{ maxWidth: 980, margin: "34px auto 0" }}>
            <SectionLabel>Decision-system documentation</SectionLabel>
            <CardGrid>
              <Card
                title="Jungle Decision Framework"
                desc="A multi-page decision system with rules, flowcharts, and examples that scale from beginner to expert."
                href="/docs/jungle-decision-framework"
              />
              <Card
                title="Decision Tree"
                desc="Visual branching logic for competing priorities under time pressure."
                href="/docs/decision-tree"
              />
              <Card
                title="Glossary"
                desc="Controlled terminology used consistently across the framework."
                href="/docs/glossary"
                cta="Reference"
              />
            </CardGrid>
          </div>

          {/* Footer note */}
          <div style={{ maxWidth: 920, margin: "34px auto 0", opacity: 0.75, fontSize: 14 }}>
            Systems in the writing samples are fictional and written for demonstration only, except the RAG tutorial's ask-my-docs tool.
          </div>
        </div>
      </main>
    </Layout>
  );
}
