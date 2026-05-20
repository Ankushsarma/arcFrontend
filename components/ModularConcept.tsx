
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Magnet, Settings, Monitor, ShieldCheck } from 'lucide-react';

export const ModularConcept: React.FC = () => {
  const layers = [
    { title: "Power Infrastructure", desc: "Intelligent battery arrays with health telemetry.", icon: <Settings size={18} /> },
    { title: "Edge Compute", desc: "Dual Orin nodes for path planning.", icon: <Monitor size={18} /> },
    { title: "Mesh Link", desc: "Private mesh networking for zero-latency.", icon: <Magnet size={18} /> },
    { title: "Carbon Chassis", desc: "Aviation-grade composite frames.", icon: <Layers size={18} /> },
  ];

  return (
    <section id="platforms" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-[0.32em] uppercase text-[10px] mb-5">
                <ShieldCheck size={14} /> Engineering Standards
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-7 leading-[0.92] tracking-tight">
                MODULARITY <span className="text-slate-600">IS</span><br />
                <span className="text-cyan-400 italic">THE STANDARD.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
                Shared infrastructure for rapid mission deployment. Stop rebuilding hardware, start hot-swapping intelligence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {layers.map((layer, idx) => (
                <motion.div 
                  key={idx}
                  className="flex min-h-[150px] flex-col justify-center gap-4 p-6 rounded-2xl glass border-white/5 hover:border-cyan-500/40 transition-all cursor-default group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 group-hover:neon-glow-cyan transition-all">
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{layer.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="min-h-[480px] max-w-[620px] mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[80px]"></div>
              
              <div className="relative w-full flex flex-col items-center justify-center gap-5">
                {[4, 3, 2, 1].map((level) => (
                  <motion.div
                    key={level}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: level * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`w-full h-20 glass rounded-2xl border-cyan-400/${level * 10} flex items-center justify-between px-8 relative overflow-hidden group`}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 opacity-60"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-cyan-500/70 uppercase tracking-widest leading-none mb-2">Layer 0{level}</span>
                      <span className="text-xl font-black font-heading text-white italic tracking-tight leading-none">
                        {level === 4 ? "PAYLOAD_LAYER" : level === 3 ? "COMPUTE_FABRIC" : level === 2 ? "POWER_BACKBONE" : "CORE_CHASSIS"}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400 group-hover:scale-105 transition-transform bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
                      SYS_L0{level}_ACTIVE
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
