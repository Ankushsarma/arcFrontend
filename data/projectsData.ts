import {
  Cpu,
  Wind,
  Shield,
  Layers,
  Camera,
  Truck,
  Radio,
  Zap,
  Activity,
  ShieldCheck,
  Globe,
  Cpu as CpuIcon,
} from "lucide-react";
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
  stats: { value: string; label: string }[];
}

export const projectsData: Record<string, ProjectData> = {
  zarvex: {
    id: "zarvex",
    name: "ZARVEX",
    sub: "Intelligent Aerial Platform",
    fullDesc:
      "ZARVEX is an advanced, intelligent aerial platform engineered to redefine precision performance in high-stakes environments. Built on a foundation of adaptive modularity, ZARVEX integrates sovereign autonomous decision-making with cutting-edge flight stability algorithms. Unlike conventional UAVs that falter in extreme conditions, ZARVEX utilizes a self-calibrating aerodynamic profile that optimizes mission endurance across variable altitudes and high-turbulence zones. The platform features an encrypted beyond-line-of-sight (BVLOS) telemetry link, enabling secure operations over ranges exceeding 200km. Its edge AI compute core allows for real-time terrain reconstruction and threat assessment without reliance on external cloud infrastructure, ensuring operational continuity in GPS-denied or electronically contested airspaces.",
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
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
    stats: [
      { value: "12h+", label: "Flight Endurance" },
      { value: "200km", label: "BVLOS Range" },
      { value: "AI", label: "Edge Compute" },
      { value: "8", label: "Modular Slots" },
    ],
  },
  aegis: {
    id: "aegis",
    name: "AEGIS",
    sub: "Deterministic Identity Pipeline",
    fullDesc:
      "AEGIS represents a paradigm shift in automated identity management and attendance infrastructure. Developed to solve the 'density problem' in modern environments, AEGIS moves away from unstable multi-camera overhead arrays to a precision-engineered, deterministic vision system. At its core is a mechanically controlled, AI-driven pan-tilt-zoom (PTZ) optics pipeline that actively scans environments to resolve occlusions, side-profile visibility, and variable low-light conditions. The system utilizes a proprietary neural identification engine optimized for rapid processing of dense crowds, ensuring 99.9% identification accuracy even in lecture halls or industrial training facilities with over 200 participants. AEGIS integrates seamlessly with existing building management systems, providing real-time, tamper-proof identity verification that maximizes operational efficiency while minimizing hardware foot-print and deployment costs.",
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
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    stats: [
      { value: "99.9%", label: "Match Precision" },
      { value: "<0.5s", label: "Latency" },
      { value: "PTZ", label: "Optics System" },
      { value: "E2EE", label: "Data Security" },
    ],
  },
  unimount: {
    id: "unimount",
    name: "UNIMOUNT",
    sub: "Universal Sensing Architecture",
    fullDesc:
      "UNIMOUNT is a mission-critical universal platform designed to consolidate diverse environmental sensing capabilities into a single, modular infrastructure. The system is built around a revolutionary 'passive cartridge' architecture, allowing operators to swap specialized sensor modules — from hazardous gas detectors to seismic monitors — in under 60 seconds without decommissioning the base unit. This approach eliminates hardware obsolescence and reduces lifecycle costs by up to 60%. UNIMOUNT base units contain the core intelligence, power management, and long-range communication arrays (LoRaWAN/5G), while the cartridges provide the application-specific measurement capability. This decoupling ensures that sensor maintenance, calibration, and upgrades can be performed in the field with zero specialized tools, making UNIMOUNT the gold standard for long-term deployment in remote, factory, or infrastructure monitoring scenarios.",
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
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    stats: [
      { value: "<60s", label: "Cartridge Swap" },
      { value: "5G/IoT", label: "Connectivity" },
      { value: "IP67", label: "Rugged Rating" },
      { value: "60%", label: "Cost Reduction" },
    ],
  },
  arise: {
    id: "arise",
    name: "ARISE",
    sub: "Kinetic Ground Fabric",
    fullDesc:
      "ARISE is a high-performance modular chassis platform designed for tactical land-based robotic operations. By integrating our universal intelligent mount onto a ruggedized, autonomous ground vehicle base, ARISE transforms a single robot into a multi-role operative capable of adapting to mission changes mid-deployment. Whether configured for hazardous material disposal, specialized site inspection, or autonomous perimeter surveillance, ARISE maintains peak operational continuity through its hotswapple payload architecture. The platform features an all-terrain 4WD system with independent suspension, capable of transporting payloads up to 500kg over sand, mud, and debris. Its autonomous navigation stack utilizes fusion-based SLAM (LiDAR + Stereo Vision), allowing for complete mission autonomy in GPS-denied tunnels, factories, or disaster zones. ARISE is not just a robot; it is a scalable robotic foundation built to evolve with the complexity of your theater or facility.",
    applications: [
      "Autonomous hazardous gas and leak detection in refineries",
      "Tactical search, rescue, and disaster zone penetration",
      "Perimeter security and autonomous patrolling for high-value sites",
      "Underground infrastructure and tunnel network inspection",
      "Precision logistics and cargo transport for industrial campuses",
      "Deep-field robotic base for scientific and exploration missions",
    ],
    icon: React.createElement(Truck, { className: "text-cyan-400" }),
    accentColor: "cyan",
    glowColor: "rgba(34, 211, 238, 0.2)",
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    stats: [
      { value: "500kg", label: "Max Payload" },
      { value: "Level 5", label: "Autonomy" },
      { value: "72h", label: "Field Persistence" },
      { value: "4WD", label: "Mobility" },
    ],
  },
};
