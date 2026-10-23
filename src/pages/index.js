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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="A decision-driven approach to jungling: tempo, rules, and repeatable frameworks."
    >
      <main style={{ padding: "54px 0 72px" }}>
        <div className="container">
          {/* Hero */}
          <div style={{ maxWidth: 920, margin: "0 auto" }}>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7 }}>
              {siteConfig.title}
            </div>

            <h1 style={{ fontSize: 44, letterSpacing: "-0.02em", margin: "10px 0 10px" }}>
              Jungle Decision Framework
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: "0 0 18px" }}>
              A structured approach to jungling in League of Legends focused on
              decision-making, tempo, and repeatable rules—rather than champion-specific mechanics.
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85, margin: "0 0 26px" }}>
              <strong>Jungling</strong> is a decision-driven role that converts{" "}
              <strong>time</strong> and <strong>information</strong> into map advantage.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 26 }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/jungle-decision-framework"
              >
                Read the framework
              </Link>

              <Link className="button button--secondary button--lg" to="/docs/foundations">
                Start with foundations
              </Link>

              <Link className="button button--secondary button--lg" to="/docs/decision-tree">
                Jump to decision tree
              </Link>
            </div>

            {/* What you'll learn */}
            <div
              style={{
                borderTop: "1px solid var(--ifm-toc-border-color)",
                paddingTop: 18,
                marginTop: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7, marginBottom: 10 }}>
                What this guide helps you do
              </div>

              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75, opacity: 0.9 }}>
                <li>Identify the correct play each minute (farm, gank, invade, hover, reset)</li>
                <li>Convert tempo into lane pressure and objectives</li>
                <li>Avoid common decision traps and autopilot clears</li>
                <li>Apply rules that scale across champions and patches</li>
              </ul>
            </div>
          </div>

          {/* Entry points grid */}
          <div style={{ maxWidth: 980, margin: "34px auto 0" }}>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7, marginBottom: 12 }}>
              Get started
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 14,
              }}
            >
              <Card
                title="Foundations"
                desc="A mental model for tempo, roles, and the jungle economy."
                href="/docs/foundations"
                cta="Start"
              />
              <Card
                title="Decision Rules"
                desc="If–then heuristics you can apply instantly in-game."
                href="/docs/decision-rules"
                cta="Learn"
              />
              <Card
                title="Decision Tree"
                desc="Branching logic for mid-game chaos and competing priorities."
                href="/docs/decision-tree"
                cta="Open"
              />
              <Card
                title="Common Mistakes"
                desc="Debugging autopilot patterns that lose games silently."
                href="/docs/common-mistakes"
                cta="Fix"
              />
              <Card
                title="Examples"
                desc="Walkthroughs that show the framework in real situations."
                href="/docs/examples"
                cta="Study"
              />
              <Card
                title="Glossary"
                desc="Quick definitions for core terms used throughout the framework."
                href="/docs/glossary"
                cta="Reference"
              />
            </div>
          </div>

          {/* Footer note */}
          <div style={{ maxWidth: 920, margin: "34px auto 0", opacity: 0.75, fontSize: 14 }}>
            Tip: Use the left sidebar in docs as your table of contents. This homepage is only for orientation.
          </div>
        </div>
      </main>
    </Layout>
  );
}
