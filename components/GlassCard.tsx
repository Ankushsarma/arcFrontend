import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
  glowColor?: string;
  index?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  accentColor = 'cyan',
  glowColor = 'rgba(34, 211, 238, 0.15)',
  index = 0,
}) => {
  const accentClasses: Record<string, string> = {
    cyan: 'from-cyan-500 to-blue-600 group-hover:shadow-cyan-500/30',
    emerald: 'from-emerald-500 to-teal-600 group-hover:shadow-emerald-500/30',
    blue: 'from-blue-500 to-indigo-600 group-hover:shadow-blue-500/30',
    purple: 'from-purple-500 to-pink-600 group-hover:shadow-purple-500/30',
  };

  const borderGlowClasses: Record<string, string> = {
    cyan: 'hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]',
    emerald: 'hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]',
    blue: 'hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
    purple: 'hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative p-8 rounded-2xl glass border border-white/[0.06] transition-all duration-500 ${borderGlowClasses[accentColor] || borderGlowClasses.cyan}`}
    >
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentClasses[accentColor] || accentClasses.cyan} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold font-heading text-white mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Corner accent line */}
      <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 h-16 w-[1px] bg-gradient-to-b from-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
