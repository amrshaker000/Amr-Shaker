"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, Variants } from "framer-motion"
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

    // Creative text state
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }


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
                    className="backdrop-blur-sm bg-background/30 rounded-2xl p-8 border border-primary/10 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-500 bg-cover bg-center animate-glow-pulse-card"
                    style={{ backgroundImage: "url('/amooor.jpg')" }}
                >
                    {/* Dark Overlay for minimal visibility of image */}
                    <div className="absolute -inset-10 bg-black/60 z-0"></div>

                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50 group-hover:opacity-75 transition-opacity duration-1000 animate-gradient-xy z-1"></div>

                    {/* Top decorative line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>

                    <div className="relative z-10 w-full flex items-center justify-center py-12 md:py-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                            className="relative flex flex-col items-center"
                        >
                            <h2 className="text-6xl md:text-9xl font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,230,176)] via-white to-[rgb(255,230,176)] drop-shadow-2xl cursor-default select-none">
                                Simply
                            </h2>

                            {/* Decorative Elements around Simply */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -top-4 -right-8 text-[rgb(255,230,176)]/40"
                            >
                                <Sparkles size={40} />
                            </motion.div>

                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-4 w-full h-4 bg-[rgb(255,230,176)] blur-2xl rounded-full -z-10"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl text-center leading-relaxed font-light"
                            >
                                An <span className="font-semibold text-[#ffe6b0]">Egyptian student</span> driven by <span className="font-semibold text-[#ffe6b0]">technology</span> step by step. Work in <span className="font-semibold text-[#ffe6b0]">software</span>, run the own brand <span className="font-semibold text-[#ffe6b0]">Ronaq</span>, and study <span className="font-semibold text-[#ffe6b0]">Artificial Intelligence</span> at <span className="font-semibold text-[#ffe6b0]">Helwan</span>Technological University. Interested in <span className="font-semibold text-[#ffe6b0]">Enterpreneurship</span>, <span className="font-semibold text-[#ffe6b0]">leadership</span>, and personal<span className="font-semibold text-[#ffe6b0]"> growth</span>, and I enjoy <span className="font-semibold text-[#ffe6b0]">learning</span>, creating, and making a <span className="font-semibold text-[#ffe6b0]">positive impact</span> on the people in around.
                            </motion.p>
                        </motion.div>
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
                                        <motion.div
                                            className="absolute -inset-2 bg-[rgb(255,230,176)] rounded-full blur-md"
                                            animate={{
                                                scale: [1, 1.1, 1, 1.25, 1],
                                                opacity: [0.6, 0.8, 0.6, 1, 0.6]
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

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
