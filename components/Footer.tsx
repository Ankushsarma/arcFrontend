import React from "react";
import {
  Cpu,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <Cpu size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tighter text-white">
                ARC<span className="text-cyan-400">VION</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed italic border-l-2 border-cyan-500/30 pl-4 font-light">
              "The future of intelligent systems lies not in building more
              machines, but in building smarter architectures."
            </p>
            <div className="text-xs font-mono text-slate-500 mb-8 space-y-1 uppercase tracking-wider">
              <p>FOUNDED BY: SAI MITHIL K • RITAM PANDEY</p>
              <p>CORE TEAM: SHIVAM YADAV • PAWAN KALYAN</p>
            </div>
            <div className="flex gap-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/arcvion_tech?igsh=cGliN2JzMG9sYXYy",
                },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Mail, href: "mailto:contact@arcvion.in" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">
              Contact
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3 group">
                <Mail
                  size={14}
                  className="group-hover:text-cyan-400 transition-colors"
                />
                <a
                  href="mailto:contact@arcvion.in"
                  className="hover:text-cyan-400 transition-colors"
                >
                  contact@arcvion.in
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  size={14}
                  className="group-hover:text-cyan-400 transition-colors"
                />
                <span className="group-hover:text-cyan-400 transition-colors">
                  9384041978
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={14}
                  className="mt-1 group-hover:text-cyan-400 transition-colors"
                />
                <span className="group-hover:text-cyan-400 transition-colors">
                  Tumkur, Karnataka
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">
              Legal
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Mission Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  ITAR Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Security Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600">
          <span className="uppercase tracking-widest">
            &copy; 2024 ARCVION INC. ALL SYSTEMS OPERATIONAL.
          </span>
          <span className="tracking-widest uppercase italic">
            ESTABLISHED AT COORD 13.3392&deg; N, 77.1025&deg; E
          </span>
        </div>
      </div>
    </footer>
  );
};
