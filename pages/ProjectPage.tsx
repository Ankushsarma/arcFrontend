import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { PageTransition } from '../components/PageTransition.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { projectsData } from '../data/projectsData.ts';

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = id ? projectsData[id.toLowerCase()] : null;

    if (!project) {
        return (
            <PageTransition>
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white">
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Project Not Found</h1>
                    <Link to="/" className="text-cyan-400 hover:underline">Back to Fleet</Link>
                </div>
            </PageTransition>
        );
    }

    const { name, sub, fullDesc, applications, icon, accentColor, glowColor, img, stats } = project;

    // Define color mappings for robust Tailwind support
    const accentStyles: Record<string, { text: string; border: string; bg: string; fill: string; shadow: string; glow: string }> = {
        emerald: {
            text: 'text-emerald-400',
            border: 'border-emerald-500/30',
            bg: 'from-emerald-400 via-emerald-500 to-emerald-400',
            fill: 'fill-emerald-400',
            shadow: 'shadow-emerald-500/20',
            glow: 'rgba(16, 185, 129, 0.15)'
        },
        blue: {
            text: 'text-blue-400',
            border: 'border-blue-500/30',
            bg: 'from-blue-400 via-blue-500 to-blue-400',
            fill: 'fill-blue-400',
            shadow: 'shadow-blue-500/20',
            glow: 'rgba(59, 130, 246, 0.15)'
        },
        cyan: {
            text: 'text-cyan-400',
            border: 'border-cyan-500/30',
            bg: 'from-cyan-400 via-cyan-500 to-cyan-400',
            fill: 'fill-cyan-400',
            shadow: 'shadow-cyan-500/20',
            glow: 'rgba(34, 211, 238, 0.15)'
        },
        amber: {
            text: 'text-amber-400',
            border: 'border-amber-500/30',
            bg: 'from-amber-400 via-amber-500 to-amber-400',
            fill: 'fill-amber-400',
            shadow: 'shadow-amber-500/20',
            glow: 'rgba(245, 158, 11, 0.15)'
        }
    };

    const style = accentStyles[accentColor as keyof typeof accentStyles] || accentStyles.cyan;

    return (
        <PageTransition>
            {/* ═══════ HERO SECTION ═══════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-24">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(var(--accent-rgb),0.15),transparent_70%)]"
                        style={{ '--accent-rgb': accentColor === 'emerald' ? '16, 185, 129' : accentColor === 'blue' ? '59, 130, 246' : accentColor === 'amber' ? '245, 158, 11' : '34, 211, 238' } as any} />
                    <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
                </div>

                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
                    style={{ backgroundColor: style.glow }} />

                <div className="relative z-10 text-center max-w-5xl px-6">
                    <ScrollReveal>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] mb-12"
                        >
                            <ChevronLeft size={14} /> Back to Ecosystem
                        </Link>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <motion.div
                            className={`mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border ${style.border} glass text-[11px] font-bold tracking-[0.4em] ${style.text} uppercase shadow-lg`}
                        >
                            {React.cloneElement(icon as React.ReactElement, { size: 14, className: `${style.text} animate-pulse` })} {sub}
                        </motion.div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-7xl md:text-9xl font-black font-heading tracking-tighter leading-[0.85] mb-8">
                            <span className="text-white drop-shadow-2xl">{name.slice(0, -2)}</span>
                            <span className={`bg-gradient-to-r ${style.bg} bg-clip-text text-transparent`}>
                                {name.slice(-2)}
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            {fullDesc.split('.')[0]}. <span className="text-white font-medium italic underline decoration-cyan-500/30 underline-offset-4">Mission-ready performance.</span>
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button className="px-10 py-4 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl group">
                                REQUEST DEPLOYMENT <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
            </section>

            {/* ═══════ CONTENT SECTION ═══════ */}
            <section className="py-24 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                                Project Overview
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light mb-8 italic border-l-2 border-cyan-500/20 pl-8">
                                {fullDesc}
                            </p>

                            <img
                                src={img}
                                alt={name}
                                className="w-full h-[400px] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                                Operational Applications
                            </h2>
                            <div className="space-y-4">
                                {applications.map((app, i) => (
                                    <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-cyan-500/20 transition-all group">
                                        <div className={`mt-1 p-1 rounded-full bg-${accentColor}-500/10 border ${style.border}`}>
                                            <CheckCircle2 size={16} className={style.text} />
                                        </div>
                                        <p className="text-slate-300 group-hover:text-white transition-colors">{app}</p>
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
                                    <div className={`text-xs font-bold tracking-[0.3em] ${style.text} uppercase`}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
};

export default ProjectPage;
