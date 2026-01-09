"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { skills } from "@/lib/data"

export function SkillsSection() {
  const [sectionRef, isVisible] = useInView<HTMLElement>()

  return (
    <div className="min-h-screen flex flex-col">
      <section id="skills" ref={sectionRef} className="py-20 relative flex-1">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/amr-casual.jpg)' }} />
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/amr-casual1.jpg)' }} />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-6 relative z-10">
          <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-glow-pulse-text">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.title}
                  className={`h-full bg-transparent border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30 hover:translate-y-[-4px] animate-glow-pulse-card ${isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.skills.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {skill.skills.length > 5 && (
                        <span className="text-xs text-muted-foreground">+{skill.skills.length - 5} more</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View Certifications Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <Link
                href="/certifications"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary-foreground font-bold text-lg rounded-xl shadow-2xl shadow-primary/50 hover:shadow-primary/80 transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">View Certifications</span>
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
