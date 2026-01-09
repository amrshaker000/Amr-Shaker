"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      // If on another page, navigate to home page with hash
      router.push(`/#${sectionId}`)
    }
  }

  // Handle scrolling when landing on home page with hash
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [isHomePage])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Discover My Journey
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors capitalize"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
