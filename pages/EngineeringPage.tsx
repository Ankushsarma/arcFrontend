import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Radar,
  Route,
  ScanFace,
  Settings2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition.tsx";

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const ArchitectureVisual: React.FC = () => {
  const modules = [
    { label: "AI", icon: BrainCircuit, className: "left-[8%] top-[16%]" },
    { label: "SENSE", icon: Radar, className: "right-[9%] top-[18%]" },
    { label: "POWER", icon: Zap, className: "left-[12%] bottom-[18%]" },
    { label: "MOUNT", icon: Layers, className: "right-[12%] bottom-[16%]" },
  ];

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#030914] shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_58%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 720 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="engineeringBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M 120 130 L 280 250",
          "M 600 130 L 440 250",
          "M 140 430 L 280 310",
          "M 580 430 L 440 310",
          "M 245 280 L 475 280",
          "M 360 95 L 360 465",
        ].map((path, index) => (
          <React.Fragment key={path}>
            <path
              d={path}
              stroke="rgba(34,211,238,0.16)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              d={path}
              stroke="url(#engineeringBeam)"
              strokeWidth="3"
              strokeDasharray="50 260"
              fill="none"
              initial={{ strokeDashoffset: 260 }}
              animate={{ strokeDashoffset: -260 }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.35,
              }}
            />
          </React.Fragment>
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/25"
      />

      <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 backdrop-blur-xl">
          <div className="absolute -inset-3 rounded-[2.25rem] bg-cyan-500/10 blur-2xl" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-[0_0_28px_rgba(34,211,238,0.4)]">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                    Core
                  </p>
                  <p className="font-heading text-xl font-black text-white">
                    ArcVion Fabric
                  </p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="space-y-3">
              {["Compute spine", "Universal mount", "Sensor bridge"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span className="text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-cyan-400/70">
                      L0{index + 1}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {modules.map((module) => {
        const Icon = module.icon;
        return (
          <motion.div
            key={module.label}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: module.label.length * 0.15,
            }}
            className={`absolute ${module.className} w-28 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl`}
          >
            <Icon className="mb-4 text-cyan-300" size={22} />
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
              {module.label}
            </p>
          </motion.div>
        );
      })}

      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
        {["Ground", "Static", "Aerial"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200/80"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const pillars = [
  {
    title: "Modularity First",
    text: "Systems should not be redesigned every time requirements change. We build base platforms that accept swappable modules - one machine, many missions.",
    icon: Layers,
    color: "text-cyan-400",
    border: "hover:border-cyan-400/35",
  },
  {
    title: "Intelligence On Board",
    text: "Our platforms auto-detect attached modules, calibrate parameters, and adapt behavior without manual configuration or external control software.",
    icon: BrainCircuit,
    color: "text-emerald-400",
    border: "hover:border-emerald-400/35",
  },
  {
    title: "Architecture, Not Products",
    text: "We do not build point solutions. We engineer foundational infrastructure that other systems and industries can be built on top of.",
    icon: Network,
    color: "text-blue-400",
    border: "hover:border-blue-400/35",
  },
];

const pipelineSteps = [
  {
    label: "Problem",
    value: "Rigid single-use machines",
    icon: Radar,
  },
  {
    label: "Platform",
    value: "Shared robotic base",
    icon: Cpu,
  },
  {
    label: "Module",
    value: "Task-specific payload",
    icon: Settings2,
  },
  {
    label: "Result",
    value: "Reconfigured mission system",
    icon: CheckCircle2,
  },
];

const systemCards = [
  {
    tag: "Modular platforms",
    title: "UniMount - ZARVEX - ARISE",
    problem:
      "Industries deploy separate machines for surveillance, sensing, logistics, and inspection. Each machine brings its own maintenance, training, and cost burden.",
    solution:
      "ArcVion turns the machine into a reusable foundation. Swap the bracket, mount, or payload, and the system reconfigures across ground, static, and aerial environments.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    tag: "Applied AI system",
    title: "AEGIS intelligent attendance system",
    problem:
      "Manual attendance is slow, gameable, and unreliable. Proxy attendance, seating variation, and large room sizes make old systems ineffective.",
    solution:
      "AEGIS uses multi-view facial recognition to create accurate attendance records regardless of classroom layout, seating position, or room size.",
    accent: "from-emerald-400 to-cyan-500",
  },
];

const aegisFlow = [
  { label: "Input", value: "Multi-view camera array" },
  { label: "Method", value: "On-device facial recognition" },
  { label: "Output", value: "Auto-generated attendance log" },
];

const EngineeringPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-[#020617] pt-32 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute right-0 top-[40%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[130px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-12">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <ScrollReveal>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-300">
                  <Sparkles size={13} /> Engineering Doctrine
                </div>
                <h1 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
                  Built To Solve
                  <span className="block animate-gradient-text italic">
                    Real Problems.
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                  ArcVion does not start from technology. It starts from
                  friction. Every system we build is a direct answer to a
                  problem that existing solutions get wrong: too rigid, too
                  expensive, or too narrow to scale.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-cyan-400"
                  >
                    Discuss Deployment <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/product/aegis"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    View AEGIS
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 blur-2xl" />
                <ArchitectureVisual />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-slate-950/40 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-400">
                    Core Engineering Philosophy
                  </p>
                  <h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-tighter md:text-6xl">
                    Three Pillars.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                  Every ArcVion platform is evaluated against the same doctrine:
                  can it adapt, can it reason locally, and can other systems be
                  built from it?
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={i * 0.08}>
                    <div
                      className={`group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 transition-all ${pillar.border}`}
                    >
                      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950">
                        <Icon className={pillar.color} size={24} />
                      </div>
                      <h3 className="mb-4 font-heading text-2xl font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {pillar.text}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-24">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-400">
                How We Frame Each Problem Into A System
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Problem To Platform.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mb-16 grid items-stretch gap-4 md:grid-cols-4">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.label} delay={i * 0.06}>
                  <div className="relative flex h-full min-h-[190px] flex-col rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
                    <Icon className="mb-8 text-cyan-300" size={22} />
                    <div className="mt-auto">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                        {step.label}
                      </p>
                      <p className="mt-2 font-heading text-lg font-bold leading-snug text-white">
                        {step.value}
                      </p>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <ArrowRight className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-cyan-400/50 md:block" />
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="grid gap-8">
            {systemCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
                  <div className="flex flex-col gap-4 border-b border-white/10 p-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                      <span
                        className={`inline-flex w-fit rounded-full bg-gradient-to-r ${card.accent} px-4 py-1.5 text-xs font-bold text-black`}
                      >
                        {card.tag}
                      </span>
                      <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white">
                        {card.title}
                      </h3>
                    </div>
                    <Route className="text-cyan-400" size={24} />
                  </div>
                  <div className="grid gap-0 md:grid-cols-2">
                    <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500">
                        The Problem
                      </p>
                      <p className="text-lg leading-relaxed text-slate-300">
                        {card.problem}
                      </p>
                    </div>
                    <div className="p-8">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400">
                        What We Built
                      </p>
                      <p className="text-lg leading-relaxed text-white">
                        {card.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-slate-950/60 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-emerald-400">
                    AEGIS In Detail
                  </p>
                  <h2 className="mt-4 font-heading text-5xl font-black uppercase tracking-tighter md:text-7xl">
                    Standalone AI
                    <span className="block text-emerald-300">Attendance.</span>
                  </h2>
                </div>
                <span className="w-fit rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2 text-sm font-bold text-emerald-300">
                  Applied AI System
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-emerald-400/20 bg-emerald-400/10">
                    <ScanFace className="text-emerald-300" size={36} />
                  </div>
                  <p className="text-xl leading-relaxed text-slate-300">
                    Attendance is a solved problem on paper. In reality,
                    institutions lose hours every day to manual registers, proxy
                    attendance, and oversight gaps. AEGIS eliminates that with a
                    set-and-forget AI system that sees every seat, recognizes
                    every face, and marks every record automatically.
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {aegisFlow.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
                    >
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-2 text-xl font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <ScrollReveal>
            <ShieldCheck className="mx-auto mb-8 text-cyan-400" size={40} />
            <blockquote className="font-heading text-3xl font-black italic leading-tight text-white md:text-5xl">
              "The future of intelligent systems lies not in building more
              machines, but in building smarter architectures."
            </blockquote>
            <div className="mt-10 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-white"
              >
                Build With Us <Zap size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
};

export default EngineeringPage;
