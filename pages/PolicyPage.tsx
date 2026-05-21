import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, FileText, Mail, ShieldCheck } from "lucide-react";
import { PageTransition } from "../components/PageTransition.tsx";

type PolicyKey = "security" | "privacy" | "terms";

const policies: Record<
  PolicyKey,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: { title: string; body: string }[];
  }
> = {
  security: {
    eyebrow: "Responsible Disclosure",
    title: "Security Inquiry",
    intro:
      "ArcVion welcomes responsible reports about security concerns connected to our website, communications, and digital systems.",
    sections: [
      {
        title: "How to report",
        body:
          "Email security concerns to contact@arcvion.in with a clear summary, affected page or system, steps to reproduce the issue, and your contact details.",
      },
      {
        title: "What to include",
        body:
          "Helpful reports include screenshots, logs, proof-of-concept details, browser or device information, and the date the issue was observed.",
      },
      {
        title: "Our approach",
        body:
          "We review security reports responsibly, avoid public disclosure before review, and aim to respond as soon as practical.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    intro:
      "ArcVion respects your privacy and keeps data collection limited to what is needed to communicate, operate the website, and improve our services.",
    sections: [
      {
        title: "Information we collect",
        body:
          "When you contact us, we may collect your name, email address, message, and any information you choose to share.",
      },
      {
        title: "How we use information",
        body:
          "We use submitted information to respond to inquiries, maintain business communication, review product requests, and improve website reliability.",
      },
      {
        title: "Third-party services",
        body:
          "We may use trusted services for hosting, email delivery, analytics, forms, and website operations. We do not sell personal information.",
      },
      {
        title: "Contact",
        body:
          "For privacy questions or requests, contact us at contact@arcvion.in.",
      },
    ],
  },
  terms: {
    eyebrow: "Website Terms",
    title: "Terms of Use",
    intro:
      "By using the ArcVion website, you agree to access it lawfully and to respect our content, brand, and communication channels.",
    sections: [
      {
        title: "Website content",
        body:
          "Information on this website is provided for general informational purposes. Product descriptions, technical details, and product information may change as development continues.",
      },
      {
        title: "Intellectual property",
        body:
          "ArcVion branding, visuals, text, layouts, and materials belong to ArcVion unless otherwise stated. They may not be copied or reused without permission.",
      },
      {
        title: "Acceptable use",
        body:
          "You agree not to misuse the website, attempt unauthorized access, interfere with availability, or use the site for unlawful activity.",
      },
      {
        title: "External links",
        body:
          "The website may reference external services or links. ArcVion is not responsible for third-party content, availability, or practices.",
      },
      {
        title: "Contact",
        body:
          "For questions about these terms, contact us at contact@arcvion.in.",
      },
    ],
  },
};

const isPolicyKey = (value: string | undefined): value is PolicyKey =>
  value === "security" || value === "privacy" || value === "terms";

const PolicyPage: React.FC = () => {
  const { pathname } = useLocation();
  const topic = pathname.replace("/", "");
  const policy = policies[isPolicyKey(topic) ? topic : "privacy"];

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 pb-24 pt-36 text-white">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} /> Back Home
          </Link>

          <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            {topic === "security" ? (
              <ShieldCheck size={30} />
            ) : (
              <FileText size={30} />
            )}
          </div>

          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
            {policy.eyebrow}
          </p>
          <h1 className="font-heading text-5xl font-black uppercase tracking-tight md:text-7xl">
            {policy.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            {policy.intro}
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
            {policy.sections.map((section, index) => (
              <div
                key={section.title}
                className={`p-7 md:p-8 ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <h2 className="mb-3 font-heading text-xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-slate-400">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:contact@arcvion.in"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black uppercase tracking-wider text-black transition-all hover:bg-cyan-400"
            >
              <Mail size={18} /> contact@arcvion.in
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 font-black uppercase tracking-wider text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PolicyPage;
