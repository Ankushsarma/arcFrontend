import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Bell, Clock3, Mail } from "lucide-react";
import { PageTransition } from "../components/PageTransition.tsx";

const labels: Record<string, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "Twitter",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  legal: "Legal Documents",
};

const ComingSoonPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const label = topic ? labels[topic] || topic.replace(/-/g, " ") : "This Page";

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 pb-24 pt-40 text-white">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} /> Back Home
          </Link>

          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <Clock3 size={30} />
          </div>

          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
            Coming Soon
          </p>
          <h1 className="font-heading text-5xl font-black uppercase tracking-tighter md:text-7xl">
            {label}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            This destination is being prepared by Arcvion. We are keeping the
            public site clean while official links, policies, and channel pages
            are finalized.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black uppercase tracking-wider text-black transition-all hover:bg-cyan-400"
            >
              <Mail size={18} /> Contact Arcvion
            </Link>
            <a
              href="mailto:contact@arcvion.in"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 font-black uppercase tracking-wider text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              <Bell size={18} /> contact@arcvion.in
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ComingSoonPage;
