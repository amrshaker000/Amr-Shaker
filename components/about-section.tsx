"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, ChevronDown } from "lucide-react"

function StardustBackground() {
  const [stars, setStars] = useState<{ x: string; y: string; opacity: number; scale: number; duration: number }[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.4 + 0.1,
      scale: Math.random() * 2,
      duration: Math.random() * 5 + 3,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)] z-0" />
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-white rounded-full"
          initial={{
            x: star.x,
            y: star.y,
            opacity: 0,
            scale: star.scale
          }}
          animate={{
            opacity: [0, star.opacity, 0],
            scale: [star.scale, star.scale * 1.5, star.scale],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15)_0%,transparent_60%)] blur-[120px]"
      />
    </div>
  )
}

export function AboutSection() {
  const { t } = useLanguage()
  const router = useRouter()

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills")
    skillsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="relative py-24 md:py-40 bg-[#020617] overflow-hidden">
      <StardustBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-glow-pulse-text">
              {t("about.title")}
            </h2>
            <p className="text-white/40 text-[10px] md:text-sm mb-12 font-black tracking-[0.4em] uppercase">
              {t("about.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl backdrop-blur-3xl border border-white/10 bg-slate-950/40 shadow-2xl shadow-blue-500/10 mb-12"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              {t("bio.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => router.push("/about")}
                className="w-full sm:w-auto px-8 h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all hover:scale-105 active:scale-95 group"
              >
                {t("about.readMore")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToSkills}
                className="w-full sm:w-auto px-8 h-12 rounded-full border-primary/30 bg-primary/10 hover:bg-primary/20 text-white font-semibold transition-all hover:scale-105 active:scale-95 group relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse-slow"
              >
                <div className="absolute inset-0 bg-primary/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                {t("about.continue")}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-2"
                >
                  <ChevronDown className="h-5 w-5 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </motion.div>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
    </section>
  )
}
