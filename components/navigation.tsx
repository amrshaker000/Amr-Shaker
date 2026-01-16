"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Globe } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
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
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

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
            {t("nav.journey")}
          </Link>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "about", key: "nav.about" },
                { id: "skills", key: "nav.skills" },
                { id: "projects", key: "nav.projects" },
                { id: "contact", key: "nav.contact" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors h-auto py-2 px-3"
                >
                  {t(item.key)}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="border-primary/20 hover:border-primary/50 flex items-center gap-2 px-3 h-9"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-bold">{language === "en" ? "AR" : "EN"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
