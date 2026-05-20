import React from "react";
import { motion } from "framer-motion";
import { Cpu, Network, Shield, Target, Wrench } from "lucide-react";

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const ArcVionMarkVisual: React.FC = () => (
  <div className="group overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#030914] shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
    <div className="relative h-[360px] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.2),transparent_58%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 720 420"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arcvionA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="arcvionOrbit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <g transform="translate(0 -18)">
          <path
            d="M360 78 L500 330 H438 L360 183 L282 330 H220 L360 78Z"
            fill="none"
            stroke="url(#arcvionA)"
            strokeWidth="20"
            strokeLinejoin="round"
            opacity="0.95"
          />
          <path
            d="M318 266 H402"
            stroke="#e0f2fe"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.75"
          />
          <motion.path
            d="M120 278 C258 174 462 158 610 92"
            fill="none"
            stroke="url(#arcvionOrbit)"
            strokeWidth="11"
            strokeLinecap="round"
            initial={{ pathLength: 0.3, opacity: 0.45 }}
            whileInView={{ pathLength: 1, opacity: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.circle
            cx="610"
            cy="92"
            r="8"
            fill="#e0f2fe"
            animate={{ scale: [1, 1.45, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <path
            d="M108 305 C260 208 452 188 640 120"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            opacity="0.22"
          />
        </g>
      </svg>
    </div>
    <div className="border-t border-cyan-400/10 bg-[#020617]/80 p-6">
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.32em] text-cyan-300">
        ArcVion System Mark
      </p>
      <p className="max-w-lg text-sm leading-relaxed text-slate-300">
        A visual shorthand for adaptive hardware: one core structure, multiple
        mission paths.
      </p>
    </div>
  </div>
);

const ArchitectureFlowVisual: React.FC = () => {
  const nodes = [
    { label: "Base", x: "18%", y: "62%" },
    { label: "Power", x: "38%", y: "32%" },
    { label: "Compute", x: "58%", y: "60%" },
    { label: "Payload", x: "80%", y: "32%" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#030914] shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
      <div className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(52,211,153,0.14),transparent_52%)]" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M110 220 C220 80 330 80 440 220 S620 305 700 130"
            fill="none"
            stroke="rgba(34,211,238,0.16)"
            strokeWidth="2"
          />
          <motion.path
            d="M110 220 C220 80 330 80 440 220 S620 305 700 130"
            fill="none"
            stroke="url(#flowLine)"
            strokeWidth="4"
            strokeDasharray="80 260"
            animate={{ strokeDashoffset: [260, -260] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-400/15 bg-slate-950/85 p-4 text-center backdrop-blur-xl"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
              {node.label}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-cyan-400/10 bg-[#020617]/80 p-6">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.32em] text-cyan-300">
          Modular Architecture
        </p>
        <p className="max-w-lg text-sm leading-relaxed text-slate-300">
          Core subsystems connect as a reusable foundation, then adapt through
          mission-specific modules.
        </p>
      </div>
    </div>
  );
};

export const AboutUsSection: React.FC = () => {
  const principles = [
    {
      icon: Wrench,
      title: "Design For Reconfiguration",
      desc: "Hardware should adapt to the mission without forcing teams to rebuild the entire machine.",
    },
    {
      icon: Cpu,
      title: "Put Intelligence On The Edge",
      desc: "Systems should sense, decide, and respond locally where latency, reliability, and context matter.",
    },
    {
      icon: Network,
      title: "Build Shared Infrastructure",
      desc: "One foundation should support aerial, sensing, identity, and future mobility workflows.",
    },
  ];

  return (
    <section
      id="about-us"
      className="relative py-32 overflow-hidden bg-[#020617]"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Mission Side */}
          <div>
            <ScrollReveal>
              <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 glass text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase">
                    <Target size={12} className="fill-current" /> Our Mission
                  </div>

                  <h2 className="max-w-5xl text-4xl md:text-6xl font-bold font-heading tracking-tight text-white leading-tight">
                    Rethinking{" "}
                    <span className="text-cyan-400 italic">Intelligent</span>
                    <br />
                    Hardware Systems
                  </h2>
                </div>

                <div className="w-full max-w-sm rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.32em] text-cyan-300">
                    Mission Statement
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Make adaptable machines practical for real-world teams,
                    not just research demos.
                  </p>
                </div>
              </div>

              <div className="mb-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-slate-500">
                    What We Are Solving
                  </p>
                  <p className="text-xl leading-relaxed text-slate-200 md:text-2xl">
                    ArcVion is a research-driven technology company focused on
                    rethinking how intelligent hardware systems are designed,
                    built, and deployed.
                  </p>
                </div>

                <div className="p-8">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-cyan-300">
                    Why It Matters
                  </p>
                  <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                    Modern industries face a fundamental challenge: systems are
                    built for specific tasks, making them rigid, costly, and
                    inefficient. We approach this from first principles,
                    designing architectures that let machines adapt and evolve
                    without complete redesigns.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <ArcVionMarkVisual />
                <ArchitectureFlowVisual />
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {principles.map((item, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:border-cyan-400/30 hover:bg-white/[0.055]"
                  >
                    <div className="mb-8 flex h-12 w-12 rounded-xl bg-cyan-500/10 items-center justify-center text-cyan-400">
                      <item.icon size={22} />
                    </div>

                    <p className="mb-3 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/70">
                      Principle 0{i + 1}
                    </p>
                    <h4 className="mb-3 text-lg font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.04] p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
                      ArcVion Doctrine
                    </p>
                    <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                      Build fewer rigid machines. Build better foundations that
                      can accept new intelligence, sensing, and mission modules
                      as the world changes.
                    </p>
                  </div>
                  <Shield className="shrink-0 text-cyan-300" size={34} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
