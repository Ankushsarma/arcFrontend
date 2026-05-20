import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronLeft, Clock3, Mail } from "lucide-react";
import { PageTransition } from "../components/PageTransition.tsx";
import { ScrollReveal } from "../components/ScrollReveal.tsx";
import { projectsData } from "../data/projectsData.ts";

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id.toLowerCase()] : null;

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">
            Project Not Found
          </h1>
          <Link to="/" className="text-cyan-400 hover:underline">
            Back to Fleet
          </Link>
        </div>
      </PageTransition>
    );
  }

  const {
    name,
    sub,
    fullDesc,
    applications,
    icon,
    accentColor,
    glowColor,
    heroImg,
    gallery,
    status,
    highlight,
    stats,
  } = project;

  // Define color mappings for robust Tailwind support
  const accentStyles: Record<
    string,
    {
      text: string;
      border: string;
      bg: string;
      fill: string;
      shadow: string;
      glow: string;
    }
  > = {
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "from-emerald-400 via-emerald-500 to-emerald-400",
      fill: "fill-emerald-400",
      shadow: "shadow-emerald-500/20",
      glow: "rgba(16, 185, 129, 0.15)",
    },
    blue: {
      text: "text-blue-400",
      border: "border-blue-500/30",
      bg: "from-blue-400 via-blue-500 to-blue-400",
      fill: "fill-blue-400",
      shadow: "shadow-blue-500/20",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "from-cyan-400 via-cyan-500 to-cyan-400",
      fill: "fill-cyan-400",
      shadow: "shadow-cyan-500/20",
      glow: "rgba(34, 211, 238, 0.15)",
    },
    amber: {
      text: "text-amber-400",
      border: "border-amber-500/30",
      bg: "from-amber-400 via-amber-500 to-amber-400",
      fill: "fill-amber-400",
      shadow: "shadow-amber-500/20",
      glow: "rgba(245, 158, 11, 0.15)",
    },
  };

  const style =
    accentStyles[accentColor as keyof typeof accentStyles] || accentStyles.cyan;

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-[#020617] pt-32 pb-24">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(var(--accent-rgb),0.15),transparent_70%)]"
            style={
              {
                "--accent-rgb":
                  accentColor === "emerald"
                    ? "16, 185, 129"
                    : accentColor === "blue"
                      ? "59, 130, 246"
                      : accentColor === "amber"
                        ? "245, 158, 11"
                        : "34, 211, 238",
              } as any
            }
          />
          <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        </div>

        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ backgroundColor: style.glow }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ScrollReveal>
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-white"
              >
                <ChevronLeft size={14} /> Back to Platforms
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border ${style.border} glass px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] ${style.text} shadow-lg`}
              >
                {React.cloneElement(icon as React.ReactElement, {
                  size: 14,
                  className: `${style.text} animate-pulse`,
                })}{" "}
                {status === "coming-soon" ? "Coming Soon" : sub}
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="mb-8 font-heading text-7xl font-black leading-[0.85] tracking-tighter md:text-9xl">
                <span className="text-white drop-shadow-2xl">
                  {name.slice(0, -2)}
                </span>
                <span
                  className={`bg-gradient-to-r ${style.bg} bg-clip-text text-transparent`}
                >
                  {name.slice(-2)}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mb-10 max-w-2xl text-xl font-light leading-relaxed text-slate-400 md:text-2xl">
                {highlight}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-extrabold text-black shadow-xl transition-all hover:scale-105 hover:bg-cyan-400 active:scale-95"
                >
                  {status === "coming-soon" ? "GET UPDATES" : "REQUEST DEPLOYMENT"}
                  <ArrowUpRight
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
                <Link
                  to={
                    status === "coming-soon"
                      ? "/coming-soon/arise"
                      : `/project/${project.id}/full-details`
                  }
                  className={`flex items-center justify-center gap-3 rounded-2xl border ${style.border} bg-white/[0.04] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] ${style.text} transition-all hover:bg-white/[0.08] hover:text-white`}
                >
                  {status === "coming-soon" ? <Clock3 size={18} /> : <Mail size={18} />}
                  {status === "coming-soon"
                    ? "Reveal In Progress"
                    : "Contact For Full Details"}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-[2.5rem] blur-2xl"
                style={{ backgroundColor: glowColor }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                {heroImg ? (
                  <img
                    src={heroImg}
                    alt={`${name} platform visual`}
                    className="h-[360px] w-full object-cover opacity-90 md:h-[560px]"
                  />
                ) : (
                  <div className="relative h-[360px] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.24),transparent_45%),linear-gradient(135deg,rgba(34,211,238,0.1),transparent_48%,rgba(59,130,246,0.14))] md:h-[560px]">
                    <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
                    <div className="absolute left-1/2 top-1/2 grid w-[70%] max-w-md -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-2xl border border-blue-300/20 bg-blue-300/10 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className={`mb-2 text-[10px] font-black uppercase tracking-[0.35em] ${style.text}`}>
                    ArcVion Platform
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                    {fullDesc.split(".")[0]}.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
      </section>

      {/* ═══════ CONTENT SECTION ═══════ */}
      <section className="py-24 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-20 md:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                Project Overview
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light mb-8 italic border-l-2 border-cyan-500/20 pl-8">
                {fullDesc}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                Operational Applications
              </h2>
              <div className="space-y-4">
                {applications.map((app, i) => (
                  <div
                    key={i}
                    className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-cyan-500/20 transition-all group"
                  >
                    <div
                      className={`mt-1 p-1 rounded-full bg-${accentColor}-500/10 border ${style.border}`}
                    >
                      <CheckCircle2 size={16} className={style.text} />
                    </div>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      {app}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SPECS BAR ═══════ */}
      <section className="py-20 border-y border-white/5 bg-slate-950/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl md:text-5xl font-black font-heading text-white mb-2">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs font-bold tracking-[0.3em] ${style.text} uppercase`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-[#020617] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className={`mb-3 text-[10px] font-black uppercase tracking-[0.4em] ${style.text}`}>
                  Visual System
                </p>
                <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                  Built Around The Mission.
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-slate-500">
                These visuals use the provided project assets and keep each
                platform page grounded in the actual ArcVion hardware direction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((image, i) => (
              <ScrollReveal key={`${image}-${i}`} delay={i * 0.08}>
                <div className="group relative h-80 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035]">
                  <img
                    src={image}
                    alt={`${name} gallery ${i + 1}`}
                    className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                      {name} / 0{i + 1}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${style.fill}`} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectPage;
