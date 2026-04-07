'use client'

import { Project } from "@/lib/type"
import { useState } from "react"
import Image from 'next/image';

export default function ProjectCard ({project} : {project: Project}) {
    const [hovered, setHovered] = useState(false)

    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className="glass overflow-hidden transition-all duration-300" 
            style={{border: hovered ? "1px solid var(--text-accent)"
                                    : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: hovered ? "0 0 20px rgba(110, 231, 183, 0.15)" : "none",
            }}
        >
            {/* image */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3
                className="text-lg font-mono font-semibold mb-2 transition-colors duration-300"
                style={{ color: hovered ? "var(--text-accent)" : "var(--text-primary)" }}
                >
                {project.title}
                </h3>
                <p style={{ color: "var(--text-muted)" }} className="text-sm leading-relaxed">
                {project.description}
                </p>
            </div>
        </div>
    )
}