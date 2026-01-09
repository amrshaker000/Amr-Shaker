"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Rocket, Copy, Check, Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations"
import { submitContactForm } from "@/actions/contact"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

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

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await submitContactForm(data)

      if (result.success) {
        setIsSubmitted(true)

        // Reset form after animation
        setTimeout(() => {
          reset()
          setIsSubmitted(false)
        }, 2000)
      } else {
        console.error('Error submitting form:', result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section id="contact" ref={sectionRef} className="pt-20 relative flex-1 flex flex-col">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Togather.jpg)' }}></div>
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Togather1.jpg)' }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>





        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
          <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-glow-pulse-text">Let's Connect</h2>

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

                <div className="flex items-center gap-4 mt-8">
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-primary/10 border-primary/20 hover:bg-primary/20" asChild>
                    <a
                      href="https://github.com/amrshaker000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-primary/10 border-primary/20 hover:bg-primary/20" asChild>
                    <a
                      href="https://www.linkedin.com/in/amrsh842/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-primary/10 border-primary/20 hover:bg-primary/20" asChild>
                    <a
                      href="https://www.facebook.com/amrshaker000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform bg-primary/10 border-primary/20 hover:bg-primary/20" asChild>
                    <a
                      href="https://www.instagram.com/ulv_____________"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20 p-6 transition-all duration-300 hover:shadow-blue-500/30 animate-glow-pulse-card">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Input
                        {...register("name")}
                        placeholder="Your Name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="Your Email"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        {...register("message")}
                        placeholder="Your Message"
                        rows={5}
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
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



        {/* Footer - Positioned at bottom with spacing */}
        <footer className="relative mt-auto w-full z-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="backdrop-blur-md bg-background/30 py-6">
            <div className="max-w-4xl mx-auto px-8 text-center flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm font-medium">
                © {new Date().getFullYear()} Amr Shaker. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                Built with
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    color: ['#ef4444', '#ec4899', '#ef4444']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ♥
                </motion.span>
                and Code
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
