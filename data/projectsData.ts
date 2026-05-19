import { Cpu, Wind, Shield, Layers, Camera, Truck, Radio } from 'lucide-react';
import React from 'react';

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
        id: 'zarvex',
        name: 'ZARVEX',
        sub: 'Intelligent Aerial Platform',
        fullDesc: "ZARVEX is an intelligent aerial platform designed to deliver stable, adaptive, and mission-ready performance in complex operating environments. It combines modular architecture, autonomous decision capabilities, and advanced flight stability to support precise aerial operations without compromising payload reliability or operational flexibility. Built for environments where conventional UAV systems face limitations, ZARVEX emphasizes endurance, adaptability, and consistent performance across dynamic conditions. With configurable mission modules, intelligent navigation, and scalable deployment capability, ZARVEX enables a single platform to support multiple operational requirements while maintaining efficiency and rapid readiness.",
        applications: [
            "Surveillance and reconnaissance operations",
            "Precision delivery and logistics support",
            "Search, rescue, and emergency response missions",
            "Infrastructure inspection and environmental monitoring",
            "Agricultural monitoring and remote area assessment",
            "Defense, disaster management, and GPS-limited environments"
        ],
        icon: React.createElement(Wind, { className: "text-emerald-400" }),
        accentColor: "emerald",
        glowColor: "rgba(16, 185, 129, 0.2)",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
        stats: [
            { value: '12h+', label: 'Flight Endurance' },
            { value: '200km', label: 'BVLOS Range' },
            { value: '<30s', label: 'Module Swap' },
            { value: '8', label: 'Payload Slots' },
        ]
    },
    aegis: {
        id: 'aegis',
        name: 'AEGIS',
        sub: 'Intelligent Attendance System',
        fullDesc: "AEGIS is an intelligent attendance system designed to deliver high-accuracy identification in real-world classroom environments. It uses a single-camera, mechanically controlled vision system combined with adaptive image capture and AI-based recognition to overcome challenges such as occlusions, side-face visibility, uneven lighting, and high student density. By replacing complex multi-camera setups with a deterministic pan-tilt architecture and optimized capture pipeline, AEGIS ensures reliable performance while maintaining low hardware complexity and cost.",
        applications: [
            "Educational institutions (classrooms, lecture halls)",
            "Training centers and large-capacity learning spaces",
            "Controlled environments requiring consistent identity tracking"
        ],
        icon: React.createElement(Camera, { className: "text-blue-400" }),
        accentColor: "blue",
        glowColor: "rgba(59, 130, 246, 0.2)",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        stats: [
            { value: '99.9%', label: 'ID Accuracy' },
            { value: '<1s', label: 'Match Speed' },
            { value: '150+', label: 'Capacity' },
            { value: 'AI', label: 'Processing' },
        ]
    },
    unimount: {
        id: 'unimount',
        name: 'UNIMOUNT',
        sub: 'Universal Intelligent Modular Platform',
        fullDesc: "UNIMOUNT is a universal intelligent modular platform designed to transform how sensing and monitoring systems are deployed, maintained, and adapted across applications. Built around interchangeable passive cartridges, UNIMOUNT enables a single platform to support multiple sensing functions without replacing the complete system. It is designed to reduce operational cost, minimize hardware waste, and simplify maintenance by allowing exhausted or application-specific sensor modules to be replaced independently while retaining the core intelligence of the device.",
        applications: [
            "Industrial gas monitoring and hazardous environment detection",
            "Replaceable gas analyser systems with low-cost sensor renewal",
            "Environmental and air quality monitoring",
            "Safety monitoring in factories, mines, and confined spaces",
            "Multi-purpose sensing platforms requiring application switching",
            "Infrastructure, automation, and field-deployable monitoring systems"
        ],
        icon: React.createElement(Layers, { className: "text-amber-400" }),
        accentColor: "amber",
        glowColor: "rgba(245, 158, 11, 0.2)",
        img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
        stats: [
            { value: 'Universal', label: 'Mounting' },
            { value: '<60s', label: 'Cartridge Swap' },
            { value: 'IP67', label: 'Protection' },
            { value: 'Modular', label: 'Architecture' },
        ]
    },
    arise: {
        id: 'arise',
        name: 'ARISE',
        sub: 'Modular Land Maneuvering System',
        fullDesc: "ARISE is an intelligent modular platform designed for land maneuvering robotic systems, enabling a single robotic base to adapt to multiple operational roles through interchangeable passive cartridges. Built around a universal intelligent mount integrated onto robotic chassis platforms, ARISE allows robots to switch applications without replacing core hardware. ARISE reduces hardware redundancy, lowers deployment costs, and extends robotic usability by transforming one autonomous ground platform into a multi-purpose operational system capable of evolving with changing requirements.",
        applications: [
            "Hazardous gas detection and environmental monitoring robots",
            "Industrial inspection and safety monitoring platforms",
            "Search, rescue, and disaster response robotic systems",
            "Autonomous surveillance and perimeter monitoring robots",
            "Infrastructure inspection and maintenance operations",
            "Agricultural, mining, and confined-space robotic deployments"
        ],
        icon: React.createElement(Truck, { className: "text-cyan-400" }),
        accentColor: "cyan",
        glowColor: "rgba(34, 211, 238, 0.2)",
        img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
        stats: [
            { value: '4WD', label: 'Drivetrain' },
            { value: '72h', label: 'Endurance' },
            { value: '500kg', label: 'Payload' },
            { value: 'Auto', label: 'Navigation' },
        ]
    }
};
