import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Layout } from "lucide-react";

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

export const AboutUsSection: React.FC = () => {
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
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Mission Side */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 glass text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase mb-8">
                <Target size={12} className="fill-current" /> Our Mission
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 tracking-tight text-white leading-tight">
                Rethinking{" "}
                <span className="text-cyan-400 italic">Intelligent</span>
                <br />
                Hardware Systems
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 font-light">
                ArcVion is a research-driven technology company focused on
                rethinking how intelligent hardware systems are designed, built,
                and deployed.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-10">
                Modern industries face a fundamental challenge — systems are
                built for specific tasks, making them rigid, costly, and
                inefficient. At ArcVion, we approach this problem from first
                principles, designing new architectures that enable machines to
                adapt and evolve without complete redesigns.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Layout,
                    title: "Flexible Foundations",
                    desc: "Foundational technologies applied across domains.",
                  },
                  {
                    icon: Shield,
                    title: "Future-Ready",
                    desc: "Scalable infrastructure that reduces redundancy.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl glass border-white/5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Founders & Quote Side */}
          <div className="relative">
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-50" />
                <div className="relative glass rounded-[22px] p-10 border border-white/10">
                  <div className="flex items-center gap-3 mb-10">
                    <Users className="text-cyan-400" size={24} />
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Founding Team
                    </h3>
                  </div>

                  <div className="space-y-8 mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-mono text-cyan-500 mb-2 tracking-widest uppercase">
                          Founders
                        </p>
                        <p className="text-white font-bold text-lg leading-tight mb-1">
                          Sai Mithil K
                        </p>
                        <p className="text-white font-bold text-lg leading-tight">
                          Ritam Pandey
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-500 mb-2 tracking-widest uppercase">
                          Founding Members
                        </p>
                        <p className="text-slate-300 font-medium text-base mb-1">
                          Shivam Yadav
                        </p>
                        <p className="text-slate-300 font-medium text-base">
                          Pawan Kalyan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/10">
                    <p className="text-slate-300 italic text-lg leading-relaxed font-light mb-6">
                      "The future of intelligent systems lies not in building
                      more machines, but in building smarter architectures."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-cyan-500" />
                      <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">
                        Core Philosophy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-3xl" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
