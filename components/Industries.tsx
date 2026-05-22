
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building,
  Factory,
  HardHat,
  RadioTower,
  Shield,
  Trees,
} from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      name: "Defense",
      icon: Shield,
      color: "border-cyan-500/25",
      accent: "text-cyan-300",
      desc: "Rapidly reconfigurable aerial and ground systems for controlled field operations.",
      systems: "ZARVEX / ARISE",
    },
    {
      name: "Infrastructure",
      icon: Building,
      color: "border-blue-500/25",
      accent: "text-blue-300",
      desc: "Inspection, monitoring, and sensor deployment across civil and campus assets.",
      systems: "UNIMOUNT / AEGIS",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      color: "border-emerald-500/25",
      accent: "text-emerald-300",
      desc: "Modular sensing and identity workflows for facilities, labs, and shop floors.",
      systems: "UNIMOUNT / AEGIS",
    },
    {
      name: "Environment",
      icon: Trees,
      color: "border-teal-500/25",
      accent: "text-teal-300",
      desc: "Field sensing, aerial mapping, and long-term environmental data collection.",
      systems: "ZARVEX / UNIMOUNT",
    },
    {
      name: "Energy",
      icon: HardHat,
      color: "border-amber-500/25",
      accent: "text-amber-300",
      desc: "Remote asset checks, safety monitoring, and modular sensing around plants.",
      systems: "UNIMOUNT / ZARVEX",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      <div className="absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
            <RadioTower size={13} /> Deployment Domains
          </div>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
            BUILT FOR <span className="text-cyan-400">IMPACT</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            ArcVion platforms are designed as reusable infrastructure: one
            hardware foundation, different mission modules, and practical
            deployments across sectors that need adaptable machines.
          </p>
        </div>
        
        <div className="relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className={`group relative min-h-[330px] overflow-hidden rounded-3xl border ${industry.color} bg-white/[0.035] p-6 transition-all hover:bg-white/[0.055] hover:shadow-[0_26px_90px_rgba(0,0,0,0.32)]`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-8 flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 ${industry.accent} shadow-[0_0_24px_rgba(34,211,238,0.08)]`}>
                    <Icon size={28} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </div>
                <h4 className="mb-4 font-heading text-2xl font-black tracking-tight text-white">
                  {industry.name}
                </h4>
                <p className="min-h-[92px] text-sm leading-relaxed text-slate-400">
                  {industry.desc}
                </p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.28em] text-slate-600">
                    Relevant Systems
                  </p>
                  <p className={`text-xs font-black uppercase tracking-[0.18em] ${industry.accent}`}>
                    {industry.systems}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mt-8 grid overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-950/70 md:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="p-8 md:p-10">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-300">
              Platform Logic
            </p>
            <h3 className="mb-5 font-heading text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              Reusable systems beat single-purpose machines.
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-slate-400">
              The same ArcVion architecture can support aerial observation,
              identity workflows, fixed sensing, and future ground mobility.
              That makes the product family easier to adapt, maintain, and
              deploy as requirements change.
            </p>
          </div>
          <div className="grid border-t border-cyan-400/10 md:border-l md:border-t-0">
            {[
              ["01", "Swap the module"],
              ["02", "Retain the base"],
              ["03", "Redeploy the system"],
            ].map(([step, label]) => (
              <div
                key={step}
                className="flex items-center gap-5 border-b border-white/10 px-8 py-5 last:border-b-0"
              >
                <span className="font-mono text-sm font-black text-cyan-300">
                  {step}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
