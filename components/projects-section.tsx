"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Instagram, Youtube } from "lucide-react"

interface ProjectLink {
  url: string;
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "outline";
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Ronaq Stickers Store",
    description:
      "A business project for producing and selling high-quality stickers. The project covers design, printing, cutting, packaging, and sales management.",
    image: "/1.jpg",
    technologies: ["Design", "Printing", "Cutting", "Packaging", "Customer Service"],
    links: [
      {
        url: "https://www.instagram.com/ronaq_store_/",
        icon: <Instagram className="h-4 w-4" />,
        label: "Instagram",
        variant: "outline"
      },
      {
        url: "https://ronaq3.odoo.com/en",
        icon: <ExternalLink className="h-4 w-4" />,
        label: "Visit Store",
        variant: "default"
      }
    ]
  },
  {
    title: "OriginTrace",
    description:
      "A business project for providing a secure, blockchain‑certified marketplace for used electronics.",
    image: "/2.jpg",
    technologies: ["Blockchain", "Smart Contracts", "Digital Warranties", "Marketplace"],
    links: [
      {
        url: "https://youtu.be/C32qIxBr35Q",
        icon: <Youtube className="h-4 w-4" />,
        label: "Watch Demo",
        variant: "outline"
      },
      {
        url: "https://origintrack.vercel.app/",
        icon: <ExternalLink className="h-4 w-4" />,
        label: "Live Demo",
        variant: "default"
      }
    ]
  },
  {
    title: "Egyptian National Front Party",
    description:
      "A comprehensive system for managing party members' data with a modern, responsive interface.",
    image: "/3.jpg",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
    links: [
      {
        url: "https://github.com/amrshaker000/warraq-full",
        icon: <Github className="h-4 w-4" />,
        label: "View Code",
        variant: "outline"
      },
      {
        url: "https://v0-waraq.vercel.app/",
        icon: <ExternalLink className="h-4 w-4" />,
        label: "View System",
        variant: "default"
      }
    ]
  },
  {
    title: "Adam Photography Portfolio",
    description:
      "A portfolio website showcasing photography works with sections for about, gallery, and contact.",
    image: "/4.jpg",
    technologies: ["JavaScript", "FastAPI", "Tailwind CSS", "Firebase"],
    links: [
      {
        url: "https://github.com/amrshaker000/Adam-Photography-Portfolio",
        icon: <Github className="h-4 w-4" />,
        label: "View Code",
        variant: "outline"
      },
      {
        url: "https://adam-portfolio-e54b2.web.app",
        icon: <ExternalLink className="h-4 w-4" />,
        label: "View Portfolio",
        variant: "default"
      }
    ]
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-300 group overflow-hidden ${
                  isVisible ? "animate-slide-up" : "opacity-0"
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
