import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { PageTransition } from "../components/PageTransition.tsx";

const registrationAddress =
  "NO:33, 2ND MAIN WEST ROAD, SIDDARAMESWARA BADAVANE, BATAWADI, TUMKUR, KARNATAKA 572102.";
const mapsAddressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  registrationAddress,
)}`;
const instagramUrl =
  "https://www.instagram.com/arcvion_tech?igsh=cGliN2JzMG9sYXYy";

const getContactApiUrl = () =>
  (import.meta.env.VITE_API_URL || "").trim().replace(/\/+$/, "");

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = getContactApiUrl();

      if (!apiUrl) {
        throw new Error("Missing VITE_API_URL for the contact backend.");
      }

      // 1. Send Email Notification via EmailJS (if configured)
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: formData.name,
              reply_to: formData.email,
              message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          );
        } catch (emailErr) {
          console.error("EmailJS Error:", emailErr);
        }
      }

      // 2. Save inquiry to MongoDB database backend
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message.includes("VITE_API_URL")
          ? "Contact backend is not configured yet."
          : "Something went wrong. Please try again later.",
      );
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tighter"
            >
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Touch
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Have a question about our modular robotics platforms? Reach out
              and our engineering team will get back to you shortly.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="relative z-10 text-2xl font-bold text-white mb-6 font-heading">
                  Contact Information
                </h3>

                <div className="relative z-10 space-y-6">
                  <a
                    href="mailto:contact@arcvion.in"
                    className="flex items-center gap-4 rounded-2xl p-2 -m-2 group/item transition-colors hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/item:border-cyan-400/50 transition-colors">
                      <Mail className="h-6 w-6 shrink-0 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Email Us
                      </p>
                      <p className="text-white font-medium transition-colors group-hover/item:text-cyan-400 font-mono uppercase tracking-tighter">
                        contact@arcvion.in
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919384041978"
                    className="flex items-center gap-4 rounded-2xl p-2 -m-2 group/item transition-colors hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover/item:border-emerald-400/50 transition-colors">
                      <Phone className="h-6 w-6 shrink-0 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Call Us
                      </p>
                      <p className="text-white font-medium font-mono transition-colors group-hover/item:text-emerald-400">
                        9384041978
                      </p>
                    </div>
                  </a>

                  <a
                    href={mapsAddressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl p-2 -m-2 group/item transition-colors hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover/item:border-blue-400/50 transition-colors">
                      <MapPin className="h-6 w-6 shrink-0 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Registration Address
                      </p>
                      <p className="max-w-sm text-white font-medium leading-relaxed transition-colors group-hover/item:text-blue-400">
                        {registrationAddress}
                      </p>
                    </div>
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl p-2 -m-2 group/item transition-colors hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-pink-400/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover/item:border-pink-400/50 transition-colors">
                      <Instagram className="h-6 w-6 shrink-0 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Follow Us
                      </p>
                      <p className="text-white font-medium transition-colors group-hover/item:text-pink-400 font-mono tracking-tighter uppercase">
                        @arcvion_tech
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-xl bg-black/40"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-emerald-500/5 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-sans"
                      placeholder="John Carter"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-sans"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-sans resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-4 cursor-pointer relative overflow-hidden"
                  >
                    {status === "idle" && (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                    {status === "loading" && (
                      <>
                        <Loader2 size={18} className="animate-spin" />{" "}
                        Sending...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <CheckCircle size={18} /> Sent Successfully
                      </>
                    )}
                    {status === "error" && (
                      <>
                        <AlertCircle size={18} /> Try Again
                      </>
                    )}

                    {/* Button hover glow */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
                  </button>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center mt-4">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
