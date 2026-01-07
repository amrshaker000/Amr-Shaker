"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypingAnimation } from "./typing-animation"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/amr-professional.jpg"
                alt="Amr Shaker - Web Developer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">Hello There</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I am <span className="gradient-text font-semibold">Amr Shaker</span> - <TypingAnimation />
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-transparent" asChild>
              <a
                href="https://github.com/amrshaker000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-transparent" asChild>
              <a
                href="https://www.linkedin.com/in/amrsh842/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-transparent" asChild>
              <a href="mailto:amrshaker842@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button
            onClick={scrollToAbout}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Discover More
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
