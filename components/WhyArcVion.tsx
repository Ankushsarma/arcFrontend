
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Layers, Network, ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyArcVion: React.FC = () => {
  const legacy = [
    "Fixed application design",
    "Separate hardware for every workflow",
    "Higher maintenance and training burden",
    "Limited reuse across departments",
  ];

  const arcvion = [
    "Hot-swappable mission and sensor modules",
    "Shared base architecture across use cases",
    "AI-assisted configuration and telemetry",
    "Scalable deployment model for teams",
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-slate-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute right-1/4 top-1/3 h-[520px] w-[520px] rounded-full bg-emerald-500/5 blur-[140px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10 mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-cyan-300">
              Why ArcVion
            </p>
            <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              From fixed assets to adaptable infrastructure.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            ArcVion is built for organizations that need hardware to evolve
            with operational requirements instead of replacing machines each
            time the mission changes.
          </p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-red-500/10 bg-white/[0.025] p-8 md:p-10"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-300/80 font-bold tracking-[0.28em] uppercase text-[10px]">
                <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                Conventional Hardware
              </div>
              <span className="rounded-full border border-red-400/10 bg-red-400/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-red-300/60">
                Cost Center
              </span>
            </div>
            <h3 className="mb-3 font-heading text-3xl font-black tracking-tight text-slate-300">
              Single-purpose systems.
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              Traditional deployments solve one task at a time, creating
              duplicated hardware, separate training paths, and limited reuse.
            </p>
            <ul className="space-y-4">
              {legacy.map((text) => (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-4 text-sm font-medium text-slate-500"
                >
                  <X size={18} className="shrink-0 text-red-400/60" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative overflow-hidden rounded-[2rem] border border-emerald-400/25 bg-emerald-400/[0.04] p-8 ring-1 ring-emerald-400/10 shadow-[0_34px_120px_rgba(0,0,0,0.35)] md:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300 font-bold tracking-[0.28em] uppercase text-[10px]">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]"></div>
                ArcVion Platform
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-200">
                Reusable Asset
              </span>
            </div>
            <h3 className="mb-3 font-heading text-4xl font-black tracking-tight text-white">
              Modular systems that compound.
            </h3>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-300">
              A shared foundation lets teams change modules, preserve the
              base architecture, and redeploy faster as use cases expand.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {arcvion.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-400/10 bg-slate-950/50 p-5 text-sm font-semibold text-white"
                >
                  <div className="mt-0.5 rounded-full bg-emerald-500/20 p-1">
                    <Check size={16} className="text-emerald-300" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 border-y border-emerald-400/10 py-5 sm:grid-cols-3">
              {[
                { Icon: Layers, label: "Modular Base" },
                { Icon: Network, label: "Shared Fabric" },
                { Icon: ShieldCheck, label: "Field Ready" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={18} className="text-emerald-300" />
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-400 py-4 font-black uppercase tracking-wider text-black shadow-[0_0_30px_rgba(16,185,129,0.22)] transition-all hover:bg-white"
            >
              Discuss Deployment <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
