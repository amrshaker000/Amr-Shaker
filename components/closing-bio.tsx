"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Sparkles, Quote } from "lucide-react"
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), {
    ssr: false
})

export function ClosingBio() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Easter egg state
    const [clickCount, setClickCount] = useState(0)
    const [showEasterEgg, setShowEasterEgg] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const lastClickTime = useRef(0)

    // Easter egg click handler
    const handleProfileClick = () => {
        const now = Date.now()
        if (now - lastClickTime.current < 1000) {
            setClickCount(prev => {
                const newCount = prev + 1
                if (newCount >= 3) {
                    setShowEasterEgg(true)
                    setShowConfetti(true)
                    // Reset after 5 seconds
                    setTimeout(() => {
                        setShowEasterEgg(false)
                        setShowConfetti(false)
                    }, 5000)
                    return 0
                }
                return newCount
            })
        } else {
            setClickCount(1)
        }
        lastClickTime.current = now
    }

    const text = "I know you might feel a bit lost and wondering who I am and what exactly I do, so let me put it. simply: I’m Amr, an Egyptian student driven by technology, learning, and building my future step by step. I work in software and web development, run my own brand, Ronaq, and currently study IT with a specialization in Artificial Intelligence at Helwan Technological University. I’m deeply interested in business, leadership, and personal growth, and I’ve taken part in many volunteering activities and major events that shaped how I think and how I contribute to others. In short, I’m someone who loves to learn, build, and leave a real, positive impact wherever I go."

    const words = text.split(" ")

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-20 relative font-sans">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                {showConfetti && (
                    <div className="absolute inset-0 z-50 pointer-events-none rounded-2xl overflow-hidden">
                        <Confetti
                            width={800} // Approximate container width
                            height={600}
                            recycle={false}
                            numberOfPieces={500}
                            onConfettiComplete={() => setShowConfetti(false)}
                        />
                    </div>
                )}

                <AnimatePresence>
                    {showEasterEgg && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-6 py-3 rounded-full z-50 shadow-lg flex items-center gap-2 whitespace-nowrap"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span>Unlock the Future: Let's Build Together!</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute -top-10 -left-10 text-primary/10">
                    <Quote size={80} />
                </div>

                <div
                    className="backdrop-blur-sm bg-background/30 rounded-2xl p-8 border border-primary/10 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-500 bg-cover bg-center"
                    style={{ backgroundImage: "url('/amooor.jpg')" }}
                >
                    {/* Dark Overlay for minimal visibility of image */}
                    <div className="absolute -inset-10 bg-black/60 z-0"></div>

                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50 group-hover:opacity-75 transition-opacity duration-1000 animate-gradient-xy z-1"></div>

                    {/* Top decorative line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-1.5 gap-y-1 text-lg md:text-xl leading-relaxed text-muted-foreground">
                            {words.map((word, i) => {
                                const isSimply = word.includes("simply:")
                                const isHighlight = ["Amr", "Ronaq", "Helwan", "impact"].some(term => word.includes(term))

                                return (
                                    <span key={i} className={isSimply ? "w-full block mb-2" : ""}>
                                        <motion.span
                                            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.02, // Staggered delay for typing effect
                                                ease: "easeOut"
                                            }}
                                            className={`inline-block hover:text-primary transition-colors duration-300 ${isSimply ? "" : "mr-1.5"} ${isHighlight ? "text-foreground font-semibold" : ""}`}
                                        >
                                            {word}
                                        </motion.span>
                                        {isSimply && <span className="w-full block h-2"></span>}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        {/* Ronaq Profile Section */}
                        <motion.div
                            className="flex flex-col items-center space-y-4 relative group"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <a
                                href="https://www.instagram.com/ronaq_store_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline group/link"
                            >
                                <motion.div
                                    onClick={handleProfileClick}
                                    className="cursor-pointer relative flex items-center gap-4 bg-black/20 p-3 rounded-xl hover:bg-black/30 transition-colors"
                                >
                                    <div className="relative">
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-[rgb(255,230,176)] rounded-full opacity-60 blur-md group-hover/link:opacity-80 transition-all duration-500"></div>

                                        {/* Profile Image */}
                                        <div className="relative w-16 h-16 rounded-full bg-[rgb(255,230,176)] p-0.5">
                                            <img
                                                src="/ronaq_store_.png"
                                                alt="Ronaq Store Instagram"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col text-left">
                                        <span className="text-[rgb(255,230,176)] font-medium text-lg tracking-wide">lovely Ronaq</span>
                                        <span className="text-white/60 text-xs">Run by Amr Shaker</span>
                                    </div>
                                </motion.div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 2, duration: 0.5, type: "spring" }}
                            className="flex items-center gap-2 text-primary text-sm font-medium bg-primary/10 px-4 py-2 rounded-full backdrop-blur-md"
                        >
                            <Sparkles size={16} />
                            <span>Thanks for visiting</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
