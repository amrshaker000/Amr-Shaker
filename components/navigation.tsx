"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Discover My Journey
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors capitalize"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
