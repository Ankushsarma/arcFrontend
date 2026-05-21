import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { PageTransition } from "../components/PageTransition.tsx";
import { projectsData } from "../data/projectsData.ts";

const ProjectDetailsRequestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id.toLowerCase()] : null;

  if (!project) {
    return (
      <PageTransition>
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#020617] px-6 text-center text-white">
          <h1 className="mb-4 font-heading text-4xl font-black uppercase">
            Details Not Found
          </h1>
          <Link to="/" className="text-cyan-300 hover:text-white">
            Back to home
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 pb-24 pt-40 text-white">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div
          className="absolute right-0 top-10 h-[520px] w-[520px] rounded-full blur-[140px]"
          style={{ backgroundColor: project.glowColor }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link
              to={`/product/${project.id}`}
              className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Back to {project.name}
            </Link>
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
              Full Technical Details
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-7xl">
              Contact Arcvion to access the full {project.name} brief.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              The public page gives a high-level overview. Complete technical
              specifications, deployment assumptions, integration scope,
              pricing discussions, and partner material are shared directly by
              the company after contact.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-black uppercase tracking-wider text-black transition-all hover:bg-cyan-400"
              >
                Contact Company
                <ArrowUpRight
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={18}
                />
              </Link>
              <a
                href="mailto:contact@arcvion.in"
                className="flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 font-black uppercase tracking-wider text-cyan-300 transition-all hover:bg-cyan-400/15"
              >
                <Mail size={18} /> contact@arcvion.in
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-black">
              <ShieldCheck size={28} />
            </div>
            <h2 className="mb-6 font-heading text-3xl font-black uppercase tracking-tight">
              What you can request
            </h2>
            <div className="space-y-4">
              {[
                "Detailed platform specifications and operating constraints",
                "Deployment planning and integration discussion",
                "Hardware readiness, timelines, and custom requirements",
                "Commercial, institutional, or partnership next steps",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetailsRequestPage;
