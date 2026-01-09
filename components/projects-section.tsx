"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  const [sectionRef, isVisible] = useInView<HTMLElement>()

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-glow-pulse-text">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30 group overflow-hidden animate-glow-pulse-card ${isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.links.map((link, idx) => (
                      <Button
                        key={idx}
                        asChild
                        variant={link.variant || "default"}
                        size="sm"
                        className={`flex items-center gap-2 ${link.variant === 'outline' ? 'bg-transparent' : ''}`}
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whitespace-nowrap"
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
        </div>
      </div>
    </section>
  )
}
