"use client"

import { CertificationCard } from "@/components/certification-card"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { certifications } from "@/lib/data"

export default function CertificationsPage() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen relative py-20 px-6 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: 'url("/certifications-bg.png")' }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 md:bg-background/60 z-0 backdrop-blur-[2px]" />

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow-pulse-text">Amr&apos;s Certifications</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A collection of professional certificates, courses, and achievements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <CertificationCard
                                key={index}
                                index={index}
                                title={cert.title}
                                description={cert.description}
                                image={cert.image}
                                href={cert.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
