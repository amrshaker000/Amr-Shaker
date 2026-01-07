"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-justify">
                I am an ambitious Egyptian student and aspiring Web Developer with a strong foundation in front-end development and a deep passion for using technology to create meaningful impact.
                My journey began in technical education and evolved through self-learning, real-world projects, freelancing, and building my own brand, Ronaq.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-justify">
                I specialize in crafting modern web interfaces that balance performance, accessibility, and elegant design, while also bringing strong organizational and data management skills to every project.
                Beyond technical work, I value leadership, collaboration, and community empowerment, and I aspire to become a socially conscious game developer creating culturally rooted digital experiences for global audiences.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["Dreamer", "Builder", "Founder", "Leader", "Creator", "Learner"].map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors ${
                      ["Builder", "Creator"].includes(tech) ? "hidden md:inline-flex" : ""
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden border-border/50 transition-all duration-300 w-full min-h-[320px] md:min-h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/amr-casual.jpg')" }}
              />
              <div className="absolute inset-0 bg-background/75 dark:bg-background/85" />
              <CardContent className="relative p-8 h-full flex items-center">
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Years of Growth</span>
                    <span className="font-semibold">3+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="font-semibold">20+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Plans in Progress</span>
                    <span className="font-semibold">∞</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Steps Toward My Dream</span>
                    <span className="font-semibold">Every Day</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Lessons Earned</span>
                    <span className="font-semibold">Priceless</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">People Impacted</span>
                    <span className="font-semibold">Many</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Challenges Overcome</span>
                    <span className="font-semibold">Countless</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
