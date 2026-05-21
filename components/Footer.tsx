import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const companyLogo = "/logo/company_logo.jpeg";
const registrationAddress =
  "NO:33, 2ND MAIN WEST ROAD, SIDDARAMESWARA BADAVANE, BATAWADI, TUMKUR, KARNATAKA 572102.";

export const Footer: React.FC = () => {
  const handleLogoClick = () => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link
              to="/"
              onClick={handleLogoClick}
              aria-label="Go to ArcVion home page"
              className="inline-flex items-center mb-6 group"
            >
              <img
                src={companyLogo}
                alt="ArcVion"
                className="h-12 w-[154px] rounded-xl object-cover object-left shadow-[0_0_18px_rgba(34,211,238,0.16)] transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed italic border-l-2 border-cyan-500/30 pl-4 font-light">
              "The future of intelligent systems lies not in building more
              machines, but in building smarter architectures."
            </p>
            <div className="text-xs font-mono text-slate-500 mb-8 space-y-1 uppercase tracking-wider">
              <p>LEGAL NAME: ARCVION</p>
              <p>FOUNDED BY: SAI MITHIL K • RITAM PANDEY</p>
              <p>CORE TEAM: SHIVAM YADAV • PAWAN KALYAN</p>
            </div>
            <div className="flex gap-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/arcvion_tech?igsh=cGliN2JzMG9sYXYy",
                  external: true,
                },
                { Icon: Linkedin, href: "/coming-soon/linkedin" },
                { Icon: Github, href: "/coming-soon/github" },
                { Icon: Twitter, href: "/coming-soon/twitter" },
                { Icon: Mail, href: "mailto:contact@arcvion.in", external: true },
              ].map((social, i) =>
                social.external ? (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <social.Icon size={18} />
                  </a>
                ) : (
                  <Link
                    key={i}
                    to={social.href}
                    className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <social.Icon size={18} />
                  </Link>
                ),
              )}
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
                  size={18}
                  className="shrink-0 group-hover:text-cyan-400 transition-colors"
                />
                <span className="group-hover:text-cyan-400 transition-colors">
                  9384041978
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 group-hover:text-cyan-400 transition-colors"
                />
                <span className="max-w-[260px] leading-relaxed group-hover:text-cyan-400 transition-colors">
                  {registrationAddress}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.3em]">
              Company
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-400">
                  About ArcVion
                </Link>
              </li>
              <li>
                <Link to="/engineering" className="hover:text-cyan-400">
                  Engineering
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-cyan-400">
                  Security Inquiry
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400">
                  Terms of Use
                </Link>
              </li>
              <li className="pt-2 text-xs leading-relaxed text-slate-600">
                Registered as Arcvion at {registrationAddress}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600">
          <span className="uppercase tracking-widest">
            &copy; 2026 ARCVION. ALL SYSTEMS OPERATIONAL.
          </span>
          <span className="tracking-widest uppercase italic">
            ESTABLISHED AT COORD 13.3392&deg; N, 77.1025&deg; E
          </span>
        </div>
      </div>
    </footer>
  );
};
