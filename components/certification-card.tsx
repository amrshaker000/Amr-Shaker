"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useLanguage } from "./language-provider"

interface CertificationCardProps {
    title: string
    description: string
    image?: string
    href: string
    index: number
}

export function CertificationCard({ title, description, image, href, index }: CertificationCardProps) {
    const { t } = useLanguage()
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/20 animate-glow-pulse-card">
                <div className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-muted/30">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0" />

                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="z-10 flex flex-col items-center justify-center text-muted-foreground/50">
                            <ExternalLink className="h-16 w-16 mb-2 opacity-50" />
                            <span className="text-sm font-medium uppercase tracking-widest">Certificate</span>
                        </div>
                    )}
                </div>

                <CardHeader className="pb-3">
                    <h3 className="font-semibold text-xl line-clamp-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </CardHeader>

                <CardContent className="flex-grow pb-3">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {description}
                    </p>
                </CardContent>

                <CardFooter className="pt-0">
                    <Button asChild variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <span>{t("certifications.show")}</span>
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
