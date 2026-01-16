import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Amr Shaker",
  description: "Personal portfolio of Amr, a passionate Full Stack Front End and Back End Developer",
  generator: "Amr",
  icons: {
    icon: {
      url: '/amoor.jpg',
      type: 'image/jpg',
      sizes: 'any',
      rel: 'icon',
    },
    apple: {
      url: '/amoor.jpg',
      type: 'image/jpg',
      sizes: 'any',
      rel: 'apple-touch-icon',
    },
  },
}

import { LanguageProvider } from "@/components/language-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
