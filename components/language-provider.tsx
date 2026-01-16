"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    dir: "ltr" | "rtl"
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.journey": "Discover My Journey",
        "nav.amr": "Amr",
        // Hero
        "hero.hello": "Hello There",
        "hero.thisIs": "This is ",
        "hero.developer": "Web Developer",
        "hero.student": "CS & AI Student",
        "hero.owner": "E-commerce Owner",
        "hero.volunteer": "Volunteer",
        "hero.advisor": "Strategic Advisor",
        // About Section
        "about.title": "The Journey",
        "about.subtitle": "A CHRONOLOGICAL FLOW OF CURIOSITY, CRAFT, AND CONSISTENCY.",
        "about.phase.curiosity": "Curiosity",
        "about.phase.commitment": "Commitment",
        "about.phase.growth": "Growth",
        "about.phase.business": "Business",
        "about.phase.impact": "Impact",
        "about.phase.investment": "Investment",
        "about.phase.purpose": "Purpose",
        // Projects
        "projects.title": "Featured Projects",
        // Skills
        "skills.title": "Skills & Expertise",
        "skills.achievements": "View Achievements",
        "projects.viewGithub": "View Projects",
        // Certifications
        "certifications.title": "Amr's Certifications",
        "certifications.subtitle": "A collection of professional certificates, courses, and achievements.",
        "certifications.show": "Show credential",
        // Contact
        "contact.title": "Let's Connect",
        "contact.subtitle": "I'm all ears",
        "contact.description": "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        "contact.email": "Email",
        "contact.phone": "Phone Number",
        "contact.location": "Location",
        "contact.locationValue": "Worldwide",
        "contact.sendTitle": "Send a Message",
        "contact.namePlaceholder": "Your Name",
        "contact.emailPlaceholder": "Your Email",
        "contact.messagePlaceholder": "Your Message",
        "contact.sendButton": "Send Message",
        "contact.sending": "Sending...",
        "contact.sent": "Message Sent!",
        "contact.copied": "Copied to clipboard!",
        "contact.rights": "All rights reserved.",
        "contact.builtWith": "Built with",
        "contact.andCode": "and Code",
        // Bio
        "bio.simply": "Simply",
        "bio.easterEgg": "Unlock the Future: Let's Build Together!",
        "bio.description": "An Egyptian student driven by technology step by step. Work in software, run the own brand Ronaq, and study Computer Science. Interested in Entrepreneurship, leadership, and personal growth, and I enjoy learning, creating, and making a positive impact on the people around.",
        "bio.ronaqName": "lovely Ronaq",
        "bio.runBy": "Run by Amr Shaker",
        "bio.thanks": "Thanks for visiting",
    },
    ar: {
        // Navigation
        "nav.about": "من أنا",
        "nav.skills": "المهارات",
        "nav.projects": "المشاريع",
        "nav.contact": "اتصل بي",
        "nav.journey": "اكتشف رحلتي",
        "nav.amr": "عمرو",
        // Hero
        "hero.hello": "مرحباً بك",
        "hero.thisIs": "معكم ",
        "hero.developer": "مطور ويب",
        "hero.student": "طالب علوم حاسوب وذكاء اصطناعي",
        "hero.owner": "رجل أعمال",
        "hero.volunteer": "متطوع",
        "hero.advisor": "موجه أكاديمي",
        // About Section
        "about.title": "الرحلة",
        "about.subtitle": "تدفق زمني للفضول، والمهارة، والاستمرارية.",
        "about.phase.curiosity": "فضول",
        "about.phase.commitment": "التزام",
        "about.phase.growth": "نمو",
        "about.phase.business": "بيزنس",
        "about.phase.impact": "تأثير",
        "about.phase.investment": "استثمار",
        "about.phase.purpose": "هدف",
        // Projects
        "projects.title": "مشاريع مميزة",
        // Skills
        "skills.title": "المهارات والخبرة",
        "skills.achievements": "عرض الإنجازات",
        "projects.viewGithub": "عرض جميع المشاريع",
        // Certifications
        "certifications.title": "إنجازات عمرو",
        "certifications.subtitle": "مجموعة من الشهادات المهنية، والدورات، والإنجازات.",
        "certifications.show": "عرض الشهادة",
        // Contact
        "contact.title": "دعنا نتواصل",
        "contact.subtitle": "أنا أصغي إليك",
        "contact.description": "أنا مهتم دائماً بالفرص الجديدة والمشاريع المثيرة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "رقم الهاتف",
        "contact.location": "الموقع",
        "contact.locationValue": "حول العالم",
        "contact.sendTitle": "أرسل رسالة",
        "contact.namePlaceholder": "اسمك",
        "contact.emailPlaceholder": "بريدك الإلكتروني",
        "contact.messagePlaceholder": "رسالتك",
        "contact.sendButton": "إرسال الرسالة",
        "contact.sending": "جاري الإرسال...",
        "contact.sent": "تم إرسال الرسالة!",
        "contact.copied": "تم النسخ!",
        "contact.rights": "جميع الحقوق محفوظة.",
        "contact.builtWith": "بنيت بـ",
        "contact.andCode": "ثم الكوود",
        // Bio
        "bio.simply": "ببساطة",
        "bio.easterEgg": "افتح المستقبل: دعنا نبني معاً!",
        "bio.description": "طالب مصري مدفوع بالتكنولوجيا خطوة بخطوة. أعمل في مجال البرمجيات، وأدير علامتي التجارية الخاصة 'رونق'، وأدرس علوم الحاسوب. مهتم بريادة الأعمال والقيادة والنمو الشخصي، وأستمتع بالتعلم والابتكار وترك أثر إيجابي على من حولي.",
        "bio.ronaqName": "حبيبتي رونق ",
        "bio.runBy": "بإدارة عمرو شاكر",
        "bio.thanks": "شكراً لزيارتكم",
    }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language
        if (savedLang) setLanguageState(savedLang)
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
        if (typeof window !== "undefined") {
            document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
            document.documentElement.lang = lang
        }
    }

    useEffect(() => {
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = language
    }, [language])

    const t = (key: string) => {
        return translations[language][key] || key
    }

    const dir = language === "ar" ? "rtl" : "ltr"

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
