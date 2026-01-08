"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

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
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative py-20 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/amr-casual.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full">
        <div className={`container mx-auto px-6 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">My Stats</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Years of Growth", value: "3+" },
                      { label: "Projects Completed", value: "50+" },
                      { label: "Technologies", value: "20+" },
                      { label: "Plans in Progress", value: "∞" },
                      { label: "Steps Toward My Dream", value: "Every Day" },
                      { label: "Lessons Earned", value: "Priceless" },
                      { label: "People Impacted", value: "Many" },
                      { label: "Challenges Overcome", value: "Countless" }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-white/80">{stat.label}</span>
                        <span className="font-semibold text-white/90">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">My Journey</h3>
                  <p className="text-white/80">
                    My journey in tech started when I was 12 years old, tinkering with HTML and CSS to
                    customize my MySpace profile. Since then, I've worked with numerous technologies and
                    frameworks, always staying curious and eager to learn.
                  </p>
                  <p className="text-white/80">
                    When I'm not coding, you can find me exploring new technologies, contributing to open
                    source projects, or sharing my knowledge with the developer community through blog
                    posts and tutorials.
                  </p>
                </div>
              </Card>
              
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">My Values</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Clean Code',
                        description: 'I write maintainable and scalable code that stands the test of time.'
                      },
                      {
                        title: 'User-First',
                        description: 'Every decision is made with the end user in mind.'
                      },
                      {
                        title: 'Continuous Learning',
                        description: 'I stay updated with the latest technologies and best practices.'
                      },
                      {
                        title: 'Collaboration',
                        description: 'Great things in software are never done by one person.'
                      }
                    ].map((value) => (
                      <div 
                        key={value.title} 
                        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
                      >
                        <h4 className="font-bold text-white/90">{value.title}</h4>
                        <p className="text-sm text-white/70">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
