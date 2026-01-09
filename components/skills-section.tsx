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
              {skills.map((skill, index) => {
                const skillPath = '/certifications';

                return (
                  <Link
                    href={skillPath}
                    key={skill.title}
                    className="block h-full group"
                  >
                    <Card
                      className={`h-full backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30 hover:translate-y-[-4px] animate-glow-pulse-card ${isVisible ? "animate-slide-up" : "opacity-0"
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
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
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
                        <motion.div
                          className="mt-4"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            href={skillPath}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors duration-300"
                          >
                            <span>View Certifications</span>
                            <motion.span
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
