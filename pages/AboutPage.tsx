import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Cpu,
  Users,
  Binary,
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { PageTransition } from "../components/PageTransition.tsx";

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

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: "Sai Mithil K",
      role: "Founder",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Ritam Pandey",
      role: "Founder",
      color: "from-blue-400 to-emerald-500",
    },
    {
      name: "Shivam Yadav",
      role: "Founding Member",
      color: "from-purple-400 to-cyan-500",
    },
    {
      name: "Pawan Kalyan",
      role: "Founding Member",
      color: "from-emerald-400 to-cyan-500",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-[#020617]">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <section className="mb-32">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 glass text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase mb-8">
                  <Binary size={14} /> Our Infrastructure
                </div>
                <h1 className="text-6xl md:text-8xl font-black font-heading mb-8 tracking-tighter text-white leading-tight">
                  ENGINEERING THE <br />
                  <span className="animate-gradient-text italic">
                    NEXT EVOLUTION
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                  ArcVion is a research-driven technology company focused on
                  <span className="text-white font-medium italic">
                    {" "}
                    rethinking{" "}
                  </span>
                  how intelligent hardware systems are designed, built, and
                  deployed.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Mission & Founding Story */}
          <section className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 glass bg-black/40 aspect-[4/3]">
                  <img
                    src="/robotic_architecture_lab_1779215688019.png"
                    alt="Research Lab"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-mono text-xs tracking-widest uppercase mb-2">
                      Location: R&D Core
                    </p>
                    <p className="text-slate-400 text-sm italic">
                      Simulating multi-environment adaptability for ZARVEX
                      systems.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                  <Users size={12} /> The Inception
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Built at the intersection of{" "}
                  <span className="text-cyan-400 italic">
                    robotics & adaptive computing.
                  </span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Founded by{" "}
                  <span className="text-white font-semibold">Sai Mithil K</span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">Ritam Pandey</span>
                  , along with founding members{" "}
                  <span className="text-white font-semibold">Shivam Yadav</span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">Pawan Kalyan</span>
                  , ArcVion operates with a clear vision: solving the rigidity
                  of modern hardware.
                </p>
                <div className="p-6 rounded-2xl glass border-l-4 border-cyan-500 bg-white/5 italic text-slate-300">
                  "Modern industries face a fundamental challenge — systems are
                  built for specific tasks, making them rigid, costly, and
                  inefficient. At ArcVion, we approach this problem from first
                  principles."
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Philosophy Section */}
          <section className="mb-40">
            <div className="relative glass rounded-[3rem] p-12 md:p-20 overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_50%)]"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Smart architectures over <br />
                    <span className="text-slate-500 italic">
                      simply building more machines.
                    </span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          Evolvable Systems
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          System architectures that enable intelligent machines
                          to adapt and evolve without needing complete
                          redesigns.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          Scalable Foundations
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Foundational technologies applicable across domains —
                          from industrial automation to autonomous operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="relative grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute -inset-10 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse"></div>
                  <img
                    src="/autonomous_systems_interface_1779215768504.png"
                    alt="System Architecture"
                    className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-[40px] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Founding Team Section */}
          <section className="mb-40">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-4 tracking-tighter">
                  THE CORE ARCHITECTS
                </h2>
                <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((person, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${person.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem]`}
                    ></div>
                    <div className="relative glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-white/20 transition-all duration-300">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center text-black font-bold text-2xl`}
                      >
                        {person.name.charAt(0)}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {person.name}
                      </h4>
                      <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
                        {person.role}
                      </p>
                      <div className="flex justify-center gap-4 text-slate-500">
                        <Globe
                          size={16}
                          className="hover:text-white cursor-pointer transition-colors"
                        />
                        <ArrowRight
                          size={16}
                          className="-rotate-45 hover:text-white cursor-pointer transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Final Call to Action Link */}
          <section className="text-center">
            <ScrollReveal>
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/40 transition-all"></div>
                <button className="relative px-12 py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                  WORK WITH US <ArrowRight size={20} />
                </button>
              </div>
              <p className="mt-8 text-slate-500 text-sm font-mono tracking-widest">
                EST. 2024 • COORDINATED DEFENSE • ADAPTIVE INTELLIGENCE
              </p>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
