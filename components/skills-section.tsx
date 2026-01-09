"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Compass, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface SkillItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  skills: string[];
}

const skills: SkillItem[] = [
  {
    icon: Code,
    title: "Programming & Web Development",
    description: "Help people tell their story, build their presence, and reach their audience through simple, effective, and beautiful websites.",
    skills: ["C++", "Python", "OOP", "TypeScript", "React.js", "PHP", "HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Redux", "Zustand", "Context API", "REST APIs", "Git & GitHub", "VS Code", "Responsive Design", "UI/UX", "Figma", "Framer Motion", "Accessibility", "Performance Optimization", "Testing"],
  },
  {
    icon: Compass,
    title: "Leadership & Soft Skills",
    description: "Help teams work better, communicate clearly, overcome challenges, and grow together through strong leadership, empathy, and effective collaboration.",
    skills: ["Leadership", "Team Management", "Communication", "Problem Solving", "Critical Thinking", "Adaptability", "Time Management", "Conflict Resolution", "Mentorship", "Motivation", "Responsibility", "Emotional Intelligence", "Continuous Learning", "Public Speaking", "Work Ethics",],
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description: "Help turn ideas into sustainable projects, build brands, understand markets, and create real value through smart planning, execution, and continuous improvement.",
    skills: ["Brand Building", "Digital Marketing", "Customer Relations", "Market Research", "Budget Planning", "Product Strategy", "Sales & Growth", "Business Operations", "Entrepreneurial Thinking", "Project Planning", "Decision Making", "Client Management", "Negotiation", "Process Optimization",],
  },
  {
    icon: Globe,
    title: "General & Additional Skills",
    description: "Help ideas spread, projects improve, and people connect through creativity, organization, and modern digital tools.",
    skills: ["Content Creation", "Social Media Management", "Canva & Design Tools", "Basic SEO", "Analytics & Insights", "Online Research", "Data Organization", "File Management", "Presentation Skills", "Remote Collaboration", "Productivity Systems", "Fast Typing (54+ WPM)",],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
                          <skill.icon className="h-8 w-8 text-primary" />
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
