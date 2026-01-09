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
      { threshold: 0.1 }, // Lower threshold for better mobile detection
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
      className="relative py-12 md:py-20 w-full min-h-screen flex items-center"
    >
      <div className={`container mx-auto px-4 md:px-6 w-full transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 gradient-text animate-glow-pulse-text">About Me</h2>

        <div className="w-full max-w-6xl mx-auto">
          {/* Read Carefully Card */}
          <Card className="w-full border-white/20 shadow-2xl shadow-blue-500/20 p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-blue-500/30 animate-glow-pulse-card">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 relative inline-block">
                Read <span className="text-blue-400 italic underline decoration-wavy decoration-blue-500/30">Care</span>fully
                <span className="absolute -top-1 -right-3 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </h3>
              <div className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed space-y-4">
                <p>
                  It all started with a simple thing: a computer.
                  When I was a kid, I didn't just use it, I explored it. I spent hours scrolling, discovering, breaking things, fixing them, and getting curious about everything related to technology, software, and this science. Somewhere along the way, I realized this wasn't just a hobby… this was my world.
                </p>

                <p>
                  As I grew older, that curiosity turned into commitment. I entered the field of programming, discovered how wide and deep it really is, and eventually found my specialty in Frontend development. For over two years, I worked, learned, failed, fixed, and built real projects for real people on several freelance platforms such as Upwork, Fiverr, and Freelancer. But something inside me kept saying: go deeper.
                </p>

                <p>
                  So, I did. I started studying the foundations of programming and computer science on my own, building strong technical thinking alongside practical experience.
                </p>

                <p>
                  Today, I continue that journey academically at Helwan International Technological University, Faculty of Technology, majoring in IT with a minor in AI, combining what I learn in classrooms with what I build in the real world.
                </p>

                <p className="pt-2">
                  But my story isn't only about programming.
                </p>

                <p>
                  I've always believed that building something meaningful also means building something sustainable. That belief pushed me into business and entrepreneurship, and that's how Ronaq was born. I started from zero, buying my first printer, then a cutting plotter, then the raw materials, while researching everything from quality and production to branding and customer experience. I wanted to build something different, something made with care, not just another product.
                </p>

                <p>
                  From there, I took the step into execution: launching Ronaq's pages on social media, building its e-commerce website, creating content, and growing the brand piece by piece. Over time, Ronaq became more than a business; it became a reflection of my creativity, discipline, and belief that when you build with intention, small ideas can turn into real impact.
                </p>

                <p className="pt-2">
                  At the same time, I knew that growth has no value if it's not shared.
                  So I gave back. I volunteered with charitable organizations, youth initiatives under the Egyptian Ministry of Youth & Sports, blood donation teams, media teams, IT teams, and major events like TEDx, Google Developer events at the organization team, all of which took place between the Remotely and in Cairo, Alexandria, and Mansoura. Every experience taught me how to lead, listen, communicate, and care.
                </p>

                <p>
                  Throughout my journey of growth and learning, I've always believed that the most valuable investment is in myself. I enrolled in specialized programs focused on soft skills, leadership, and team management, such as Aspire Leaders from the Aspire Institute, supported by Harvard University, and the McKinsey Forward program. These programs transformed my thinking and refined my communication, leadership, and decision-making abilities.
                </p>

                <p>
                  Simultaneously, I developed my professional skills through the ITIDA Gigs program, run by the Egyptian Ministry of Communications, and expanded my learning through dozens of courses in programming, artificial intelligence, data analysis, cybersecurity, and Agile project management.
                  One of my most cherished experiences is becoming a member of the American Center Cairo, which opened doors to global learning and provided me with invaluable connections and experiences.
                </p>

                <p className="pt-4">
                  Today, I don't just see myself as a developer or a student or a business owner.
                  I see myself as someone carefully building a future through learning, taking responsibility, and consistently putting in effort.
                </p>

                <p>
                  What truly matters to me is not only what I achieve, but the value I leave behind:
                  Helping others understand, guiding those who are starting their journey, and contributing something meaningful to every space I become part of.
                </p>

                <p>
                  My goal is simple: to grow, to share what I learn, and to make the path a little clearer for those who walk it after me.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
