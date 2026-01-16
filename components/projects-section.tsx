"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/components/language-provider"
import { getProjects } from "@/lib/data"

export function ProjectsSection() {
  const { language, t } = useLanguage()
  const [sectionRef, isVisible] = useInView<HTMLElement>()
  const projects = getProjects(language)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-card/20 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-glow-pulse-text">{t("projects.title")}</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group relative overflow-hidden bg-background/40 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-500 shadow-2xl shadow-blue-500/10 hover:shadow-primary/20 animate-glow-pulse-card ${isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Tech stack badge overlay for quick view */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-background/80 backdrop-blur-md text-primary text-[10px] uppercase tracking-wider font-bold rounded-md border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/5 text-primary/80 border border-primary/10 rounded-full text-xs font-semibold hover:bg-primary/10 hover:border-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    {project.links.map((link, idx) => (
                      <Button
                        key={idx}
                        asChild
                        variant={link.variant || "default"}
                        size="default"
                        className={cn(
                          "flex items-center gap-2 font-semibold transition-all duration-300",
                          link.variant === 'outline' ? 'hover:bg-primary/10' : 'shadow-lg shadow-primary/20 hover:shadow-primary/40'
                        )}
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New GitHub CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <a
              href="https://github.com/amrshaker000"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[rgb(36,41,47)] via-[#333] to-[rgb(36,41,47)] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-lg rounded-xl shadow-2xl shadow-black/50 hover:shadow-primary/20 transition-all duration-500 hover:scale-105"
            >
              <Github className="h-6 w-6 relative z-10" />
              <span className="relative z-10">{t("projects.viewGithub")}</span>
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
