import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Binary,
  ArrowRight,
  Zap,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
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

const TeamPhoto: React.FC<{
  name: string;
  image: string;
  gradient: string;
}> = ({ name, image, gradient }) => {
  const [hasError, setHasError] = useState(false);
  const initial = name.charAt(0);

  return (
    <div className="relative mx-auto mb-6 h-36 w-36">
      <div
        className={`absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br ${gradient} opacity-55 blur-md transition-opacity duration-500 group-hover:opacity-95`}
      />
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950 shadow-[0_22px_55px_rgba(0,0,0,0.28)]">
        {!hasError ? (
          <img
            src={image}
            alt={name}
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} text-4xl font-black text-black`}
          >
            {initial}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-transparent to-white/5" />
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: "Sai Mithil K",
      role: "CEO",
      focus: "Chief Executive Officer",
      color: "from-cyan-400 to-blue-500",
      image: "/team/mithil.jpg",
      linkedin: "https://www.linkedin.com/in/sai-mithil-k-98157532a",
    },
    {
      name: "Ritam Pandey",
      role: "COO",
      focus: "Chief Operating Officer",
      color: "from-blue-400 to-emerald-500",
      image: "/team/ritam.jpg",
      linkedin: "https://www.linkedin.com/in/ritam-pandey-8912a93b8",
    },
    {
      name: "Pawan Kalyan",
      role: "CMO",
      focus: "Chief Marketing Officer",
      color: "from-emerald-400 to-cyan-500",
      image: "/team/pawan.jpg",
      linkedin: "https://www.linkedin.com/in/pawan-kalyan-pendyala-59339b28b",
    },
    {
      name: "Shivam Yadav",
      role: "CFO",
      focus: "Chief Financial Officer",
      color: "from-purple-400 to-cyan-500",
      image: "/team/shivam.jpg",
      linkedin: "https://www.linkedin.com/in/shivam-yadav-280229277",
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
            <div className="text-center max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 glass text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase mb-8">
                  <Binary size={14} /> Our Infrastructure
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-heading mb-8 text-white leading-[1.02] overflow-visible">
                  ENGINEERING THE <br />
                  <span className="inline-block animate-gradient-text italic overflow-visible px-2 pb-1">
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
                    src="/project-photos/image2.png"
                    alt="ArcVion prototype camera assembly"
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-mono text-xs tracking-widest uppercase mb-2">
                      Prototype Hardware
                    </p>
                    <p className="text-slate-400 text-sm italic">
                      Real camera and sensing mount used in ArcVion system
                      experiments.
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
                  <span className="text-white font-semibold">Pawan Kalyan</span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">Shivam Yadav</span>
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
                <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-4">
                  THE CORE ARCHITECTS
                </h2>
                <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((person, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative h-full">
                    <div
                      className={`absolute -inset-px rounded-[2rem] bg-gradient-to-br ${person.color} opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-55`}
                    ></div>
                    <div className="relative flex min-h-[410px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#071120]/85 p-7 text-center shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/35">
                      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
                      <div
                        className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${person.color} opacity-10`}
                      />
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                      <TeamPhoto
                        name={person.name}
                        image={person.image}
                        gradient={person.color}
                      />
                      <h4 className="relative text-2xl font-bold text-white mb-2">
                        {person.name}
                      </h4>
                      <p className="relative mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                        <Sparkles size={12} />
                        {person.role}
                      </p>
                      <p className="relative mx-auto mb-7 max-w-[15rem] text-sm leading-relaxed text-slate-400">
                        {person.focus}
                      </p>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} LinkedIn profile`}
                        className="relative mx-auto mt-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-slate-300 transition-all hover:border-cyan-400/45 hover:bg-cyan-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      >
                        <Linkedin size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                          LinkedIn
                        </span>
                        <ArrowRight size={14} className="-rotate-45" />
                      </a>
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
                <Link
                  to="/contact"
                  className="relative flex items-center justify-center gap-3 rounded-2xl bg-white px-12 py-5 font-black text-black shadow-2xl transition-all hover:scale-105 hover:bg-cyan-400 active:scale-95"
                >
                  WORK WITH US <ArrowRight size={20} />
                </Link>
              </div>
              <p className="mt-8 text-slate-500 text-sm font-mono tracking-widest">
                EST. 2026 • ADAPTIVE HARDWARE • INTELLIGENT SYSTEMS
              </p>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
