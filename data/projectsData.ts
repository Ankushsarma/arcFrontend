import { Wind, Camera, Layers, Truck } from "lucide-react";
import React from "react";

export interface ProjectData {
  id: string;
  name: string;
  sub: string;
  fullDesc: string;
  applications: string[];
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  img: string;
  heroImg: string;
  gallery: string[];
  status: "active" | "coming-soon";
  highlight: string;
  stats: { value: string; label: string }[];
}

export const projectsData: Record<string, ProjectData> = {
  zarvex: {
    id: "zarvex",
    name: "ZARVEX",
    sub: "Intelligent Aerial Platform",
    fullDesc:
      "ZARVEX is an intelligent aerial platform concept engineered for modular mission profiles and resilient field operations. Built on a foundation of adaptive modularity, ZARVEX combines swappable payload architecture, flight-stability intelligence, and onboard sensing workflows. The platform is designed around secure telemetry, edge processing, and rapid reconfiguration so operators can adapt aerial systems for inspection, mapping, monitoring, logistics, and emergency response without rebuilding the aircraft around each task.",
    applications: [
      "Tactical surveillance and high-fidelity target reconnaissance",
      "Autonomous precision cargo delivery in logistics corridors",
      "Dynamic search, rescue, and life-support emergency drops",
      "Critical infrastructure monitoring and structural analysis",
      "Deep-field environmental mapping and biodiversity assessment",
      "Next-gen defense integration and spectrum-resilient scouting",
    ],
    icon: React.createElement(Wind, { className: "text-emerald-400" }),
    accentColor: "emerald",
    glowColor: "rgba(16, 185, 129, 0.2)",
    img: "/project-photos/image3.png",
    heroImg: "/project-photos/image3.png",
    gallery: ["/project-photos/image3.png"],
    status: "active",
    highlight: "A modular aerial platform built around fast payload changes, field sensing, and resilient operations.",
    stats: [
      { value: "Long", label: "Flight Endurance" },
      { value: "Secure", label: "Telemetry Link" },
      { value: "AI", label: "Edge Compute" },
      { value: "Modular", label: "Payload Options" },
    ],
  },
  aegis: {
    id: "aegis",
    name: "AEGIS",
    sub: "Deterministic Identity Pipeline",
    fullDesc:
      "AEGIS is an automated identity and attendance infrastructure concept designed for classrooms, campuses, and controlled facilities. It supports 70+ capacity per device and focuses on reducing manual attendance work, proxy attendance, and oversight gaps through camera-assisted recognition workflows, structured verification, and secure record generation. AEGIS is positioned as an applied AI system that can be configured around room layout, seating variation, and institution-specific review requirements.",
    applications: [
      "Scalable attendance management for educational institutions",
      "High-accuracy personnel tracking in industrial facilities",
      "Secure identity verification for corporate campuses",
      "Dynamic crowd analytics for large-scale public venues",
      "Automated logistics entry/exit verification systems",
      "Privacy-compliant identity architecture for smart cities",
    ],
    icon: React.createElement(Camera, { className: "text-blue-400" }),
    accentColor: "blue",
    glowColor: "rgba(59, 130, 246, 0.2)",
    img: "/project-photos/image2.png",
    heroImg: "/project-photos/image2.png",
    gallery: ["/project-photos/image2.png", "/project-photos/image1.png"],
    status: "active",
    highlight: "A focused identity pipeline for faster, cleaner attendance capture in dense learning spaces.",
    stats: [
      { value: "70+", label: "Capacity Per Device" },
      { value: "Fast", label: "Record Creation" },
      { value: "Camera", label: "Optics System" },
      { value: "Secure", label: "Review Workflow" },
    ],
  },
  unimount: {
    id: "unimount",
    name: "UNIMOUNT",
    sub: "Universal Sensing Architecture",
    fullDesc:
      "UNIMOUNT is a universal sensing architecture designed to consolidate diverse environmental sensing capabilities into a single modular infrastructure. The system is built around swappable cartridge concepts for specialized sensor modules such as gas, air-quality, vibration, structural, and environmental monitoring. UNIMOUNT separates the base unit, communication layer, power management, and application-specific sensing element so deployments can evolve without replacing the full system.",
    applications: [
      "Hazardous chemical and gas monitoring in industrial zones",
      "Real-time air quality indexing for urban health networks",
      "Seismic and structural health monitoring for civil engineering",
      "Predictive maintenance for oil, gas, and energy infrastructure",
      "Remote field sensing for mining and deep-earth exploration",
      "Multi-modal environmental analysis for smart-agriculture",
    ],
    icon: React.createElement(Layers, { className: "text-amber-400" }),
    accentColor: "amber",
    glowColor: "rgba(245, 158, 11, 0.2)",
    img: "/project-photos/image5.png",
    heroImg: "/project-photos/image5.png",
    gallery: [
      "/project-photos/image5.png",
      "/project-photos/image4.png",
      "/project-photos/image6.png",
    ],
    status: "active",
    highlight: "A reusable sensing base that lets teams change the measurement layer without replacing the full device.",
    stats: [
      { value: "Rapid", label: "Cartridge Swap" },
      { value: "IoT", label: "Connectivity" },
      { value: "Field", label: "Rugged Design" },
      { value: "Reusable", label: "Base Unit" },
    ],
  },
  arise: {
    id: "arise",
    name: "ARISE",
    sub: "Ground Mobility Platform",
    fullDesc:
      "ARISE is planned as ArcVion's modular ground mobility platform for field movement, payload transport, and inspection workflows. The concept is currently being staged for a later reveal while the team prioritizes the three active platform pages.",
    applications: [
      "Coming soon for ground mobility workflows",
      "Payload movement and field inspection concepts",
      "Future integration with ArcVion modular infrastructure",
    ],
    icon: React.createElement(Truck, { className: "text-cyan-400" }),
    accentColor: "cyan",
    glowColor: "rgba(34, 211, 238, 0.2)",
    img: "/robotic_architecture_lab_1779215688019.png",
    heroImg: "/robotic_architecture_lab_1779215688019.png",
    gallery: [
      "/robotic_architecture_lab_1779215688019.png",
      "/autonomous_systems_interface_1779215768504.png",
    ],
    status: "coming-soon",
    highlight: "ARISE is being prepared as a future ground platform reveal.",
    stats: [
      { value: "Soon", label: "Coming Soon..." },
      { value: "Ground", label: "Mobility Layer" },
      { value: "Modular", label: "Future Payloads" },
      { value: "ArcVion", label: "Platform Family" },
    ],
  },
};
