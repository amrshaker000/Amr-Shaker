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
      className="py-20 relative flex-1 min-h-screen"
    >
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/amr-casual.jpg')" }}></div>
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/amr-casual1.jpg')" }}></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 w-full">
        <div className={`container mx-auto px-6 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Right Column */}
            <div className="space-y-6">
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">My Journey</h3>
                  <p className="text-white/80">
                    Where I learned the value of building things with my own hands.
                    Over time, I transitioned into the world of technology through self-learning, real projects, and freelancing.
                    I worked as a web developer, a data entry specialist, and later founded my own brand, Ronaq, combining technology, 
                    design, and entrepreneurship into real-world solutions.
                    Today, I continue to grow as an aspiring Software Engineer, driven by a clear mission: 
                    to use technology as a tool for empowerment, learning, and creating meaningful impact - for myself and for others.
                  </p>
                
                </div>
              </Card>

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
            
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">My Values</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Growth Before Everything',
                        description: 'I believe in constantly improving myself - learning, failing, fixing, and trying again. Every day is a new chance to become better than yesterday.'
                      },
                      {
                        title: 'Purposeful Work',
                        description: 'I don’t work just to finish tasks. I work to create value, build meaningful projects, and leave a positive impact on the people I serve.'
                      },
                      {
                        title: 'People First',
                        description: 'Behind every project are real people. I listen carefully, communicate honestly, and make decisions that respect both the user and the team.'
                      },
                      {
                        title: 'Collaboration & Community',
                        description: 'I grow faster when I grow with others. I value teamwork, shared knowledge, and supporting people on their journeys - just as I was once supported.'
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
