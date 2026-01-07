"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Rocket, Copy, Check, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// Dynamically import Confetti to avoid SSR issues
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
})

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const { setTheme } = useTheme()
  const lastClickTime = useRef(0)
  
  // Easter egg click handler
  const handleProfileClick = () => {
    const now = Date.now()
    if (now - lastClickTime.current < 1000) { // Within 1 second
      setClickCount(prev => {
        const newCount = prev + 1
        if (newCount >= 3) {
          setShowEasterEgg(true)
          setShowConfetti(true)
          setTheme('dark') // Switch to dark theme for cyberpunk effect
          
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
  
  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('amrshaker842@gmail.com')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = 'amrshaker842@gmail.com'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (err) {
        console.error('Fallback copy failed:', err)
      }
      document.body.removeChild(textArea)
    }
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      
      // Show success state
      setIsSubmitted(true)
      
      // Reset form after animation
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
        setIsSubmitting(false)
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section id="contact" ref={sectionRef} className="py-20 relative flex-1">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Togather.jpg)' }}></div>
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Togather1.jpg)' }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={showConfetti ? 500 : 0}
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
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-6 py-3 rounded-full z-50 shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Unlock the Future: Let's Build Together!</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Let's Connect</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">I'm all ears</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group" ref={emailRef}>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="relative">
                    <p className="font-medium">Email</p>
                    <div 
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={copyEmail}
                    >
                      <span className="text-muted-foreground hover:text-primary transition-colors">amrshaker842@gmail.com</span>
                      <div className="relative">
                        <AnimatePresence mode="wait">
                          {isCopied ? (
                            <motion.span
                              key="check"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="absolute -right-6 -top-1"
                            >
                              <Check className="w-4 h-4 text-green-500" />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="copy"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="absolute -right-6 -top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    {isCopied && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        Copied to clipboard!
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-muted-foreground">+02 01207571028</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  <motion.div 
                    className="relative w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98, rotate: '-1deg' }}
                  >
                    <Button 
                      type="submit" 
                      className={cn(
                        "w-full relative overflow-hidden group",
                        isSubmitting || isSubmitted 
                          ? "bg-primary/90" 
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      )}
                      disabled={isSubmitting || isSubmitted}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitted ? (
                          <motion.span 
                            key="rocket"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: { delay: 0.2 }
                            }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center justify-center w-full"
                          >
                            <span className="mr-2">Message Sent!</span>
                            <Rocket className="h-5 w-5 animate-bounce" />
                          </motion.span>
                        ) : isSubmitting ? (
                          <motion.span 
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center w-full"
                          >
                            <motion.span 
                              animate={{ 
                                rotate: 360,
                                transition: { 
                                  duration: 1, 
                                  repeat: Infinity, 
                                  ease: "linear" 
                                } 
                              }}
                              className="inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span 
                            key="send"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center w-full group-hover:scale-105 transition-transform"
                          >
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      
                      {/* Sticker effect */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-white/50 rounded-md pointer-events-none"
                        initial={false}
                        animate={{
                          boxShadow: [
                            '0 0 0 0px rgba(255,255,255,0.1)',
                            '0 0 0 3px rgba(255,255,255,0.3)',
                            '0 0 0 0px rgba(255,255,255,0.1)',
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: 'easeInOut' 
                        }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Profile Section */}
      <motion.div 
        className="mt-12 mb-6 flex flex-col items-center space-y-4 relative group"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <a 
          href="https://www.instagram.com/ronaq_store_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-underline"
        >
          <motion.div 
            onClick={handleProfileClick}
            className="cursor-pointer relative"
            animate={{
              scale: [1, 1.03, 1],
              filter: [
                'drop-shadow(0 0 8px rgba(255, 230, 176, 0.6))',
                'drop-shadow(0 0 15px rgba(255, 230, 176, 0.9))',
                'drop-shadow(0 0 8px rgba(255, 230, 176, 0.6))'
              ]
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-[rgb(255,230,176)] rounded-full opacity-60 blur-xl group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-full bg-[rgb(255,230,176)] p-1">
              <img
                src="/ronaq_store_.png"
                alt="Ronaq Store Instagram"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </a>
        
        <a 
          href="https://www.instagram.com/ronaq_store_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-underline"
        >
          <motion.span 
            className="text-[rgb(255,230,176)] font-medium text-2xl tracking-wider"
            animate={{
              textShadow: [
                '0 0 5px rgba(255, 230, 176, 0.6)',
                '0 0 15px rgba(255, 230, 176, 0.9)',
                '0 0 5px rgba(255, 230, 176, 0.6)'
              ],
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            My lovely Ronaq
          </motion.span>
        </a>
      </motion.div>
      
      {/* Footer - Positioned at bottom with spacing */}
      <footer className="relative mt-auto pt-8">
        <div className="max-w-4xl mx-auto px-8 py-4 border-t-2 border-primary/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()}{' '}
            <motion.span 
              className="text-primary font-medium"
              animate={{
                textShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                  '0 0 15px rgba(59, 130, 246, 0.8)',
                  '0 0 5px rgba(59, 130, 246, 0.5)'
                ],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Amr Shaker
            </motion.span>
            . Built with Love
          </p>
        </div>
      </footer>
      </section>
    </div>
  )
}
