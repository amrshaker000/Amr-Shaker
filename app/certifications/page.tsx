"use client"

import { CertificationCard } from "@/components/certification-card"
import { motion } from "framer-motion"

const certifications = [
    {
        title: "Aspire Leaders Program '25",
        description: "At the Aspire Institute, a nonprofit organization that evolved from itspredecessor initiative founded at Harvard University.",
        href: "/Certifications/aspire-certificate1.jpg",
        image: "/Certifications/aspire-certificate.jpg"
    },
    {
        title: "Python Programming Basics",
        description: "Foundation course in Python programming language covering syntax, data structures, and basic algorithms.",
        href: "https://maharatech.gov.eg/mod/customcert/view.php?id=1737&downloadown=1",
        image: "/Certifications/python-basics-course-certificate.jpg"
    },

    {
        title: "McKinsey Forward Program",
        description: "This program enables participants to develop practical skills for success in the future of work.",
        href: "https://www.credly.com/badges/debcfebf-4e39-4869-9e3f-9bea51c54a29/linked_in_profile",
        image: "/Certifications/mckinsey-forward-program.jpg"
    },
    {
        title: "ITIDA Gigs '25",
        description: "A broad and in-depth understanding of basic and advanced freelance skills.",
        href: "https://drive.google.com/file/d/1Jaj9mjPzdhREzjXKkuGKz58Ok6K4ESIf/view",
        image: "/Certifications/itida-gigs-graduation-certificate.jpg"
    },
    {
        title: "SEYS'25 Attendance",
        description: "Attendance of Sustainable Egypt Youth Summit at the AUC Tahrir campus.",
        href: "/Certifications/seys-2025-certificate-amr-shaker.jpg",
        image: "/Certifications/seys-2025-certificate-amr-shaker.jpg"
    },
    {
        title: "Front-End From Black Horse",
        description: "Comprehensive training in modern front-end technologies, including HTML, CSS, JavaScript, and React.",
        href: "/Certifications/front-end-certificate.jpg",
        image: "/Certifications/front-end-certificate.jpg"
    },
    {
        title: "TEDx Certificate",
        description: "Certificate of recognition for contribution to TEDx event.",
        href: "/Certifications/tedx-certificate.jpg",
        image: "/Certifications/tedx-certificate.jpg"
    },
    {
        title: "Nile University Undergraduate Research Forum",
        description: "A certificate of participation awarded for presenting the Green Road project at the 18th Undergraduate Research Forum at Nile University.",
        href: "/Certifications/NU.jpg",
        image: "/Certifications/NU.jpg"
    },
    {
        title: "Ambassadors of Telecommunications",
        description: "Program certification for the Ambassadors of Telecommunications.",
        href: "/Certifications/ambassadors-telecom-certification.jpg",
        image: "/Certifications/ambassadors-telecom-certification.jpg"
    },
    {
        title: "Generative AI Tools CSW",
        description: "A certificate of completion for the Generative AI Tools CSW course, conducted in collaboration with Care Egypt and the Tawar w Ghyar initiative.",
        href: "/Certifications/Generative AI Tools CSW.jpg",
        image: "/Certifications/Generative AI Tools CSW.jpg"
    },
    {
        title: "Tech for Non-Techies",
        description: "A certificate of completion for the program, organized by iCareer in partnership with Plan International Egypt.",
        href: "/Certifications/digitera.png",
        image: "/Certifications/digitera.png"
    },
    {
        title: "Enterprise Resource Planning",
        description: "A verified certificate for completing the course, an online learning initiative by HP offered through edX.",
        href: "https://courses.edx.org/certificates/a68d76b7bf554d0aa656a7fcfb8fe015",
        image: "/Certifications/edx-certificate.jpg"
    },
    {
        title: "AI for Business Professionals",
        description: "Understanding the impact and application of Artificial Intelligence in the business world.",
        href: "https://www.life-global.org/certificate/b1b4c2e2-48b4-4255-aa92-3c834ec4bc65",
        image: "/Certifications/ai-for-business-professionals.jpg"
    },
    {
        title: "Agile Project Management",
        description: "Methodologies and practices for Agile project management.",
        href: "https://www.life-global.org/certificate/5e22d92b-1748-47c3-9abc-9da9eb6c1439",
        image: "/Certifications/agile-project-management.jpg"
    },
    {
        title: "Data Science & Analytics",
        description: "Introduction to data science concepts, analysis, and visualization techniques.",
        href: "https://www.life-global.org/certificate/a7e13e30-d536-454a-a434-7ad9892cb841",
        image: "/Certifications/data-science-and-analytics.jpg"
    },
    {
        title: "Intro to Cybersecurity Awareness",
        description: "Fundamental concepts of cybersecurity and best practices for digital safety.",
        href: "https://www.life-global.org/certificate/e7562e81-0d75-4718-b77c-dc089e5d0076",
        image: "/Certifications/intro-cybersecurity-awareness.jpg"
    },
    {
        title: "AI for MS Office Pros",
        description: "Leveraging AI tools within the Microsoft Office suite to enhance productivity.",
        href: "https://www.almentor.net/en/certificate/7le1apkjox",
        image: "/Certifications/ai-for-microsoft-office-pros.jpg"
    },
    {
        title: "Learn Git, GitHub & MD",
        description: "Mastering version control, collaboration with GitHub, and documentation with Markdown.",
        href: "https://www.almentor.net/en/certificate/4lr4fvn4dy",
        image: "/Certifications/learn-git-github-md.jpg"
    },
    {
        title: "Mastering Job Interviews",
        description: "Skills and strategies for succeeding in job interviews.",
        href: "https://www.almentor.net/en/certificate/r4n1i5mngw",
        image: "/Certifications/mastering-job-interviews-certificate.jpg"
    },
    {
        title: "Business Etiquette",
        description: "Professional conduct and etiquette in the workplace.",
        href: "https://www.almentor.net/en/certificate/53otyvq46",
        image: "/Certifications/work-etiquette-certificate.jpg"
    },
    {
        title: "Body Language & Business Etiquette",
        description: "Understanding non-verbal communication and professional business manners.",
        href: "https://www.almentor.net/en/certificate/885ikpy5j",
        image: "/Certifications/body-language-business-etiquette.jpg"
    },
    {
        title: "Persuasion & Influence Skills",
        description: "Techniques for effective persuasion and influencing others positively.",
        href: "https://www.almentor.net/en/certificate/x1xrh178ew",
        image: "/Certifications/persuasion-influence-skills.jpg"
    },
    {
        title: "Effective Communication Skills",
        description: "Developing strong communication skills for personal and professional growth.",
        href: "https://www.almentor.net/en/certificate/4lgbvn4dy",
        image: "/Certifications/effective-communication-skills.jpg"
    },


]

export default function CertificationsPage() {
    return (
        <div className="min-h-screen relative py-20 px-6 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: 'url("/certifications-bg.png")' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/80 md:bg-background/60 z-0 backdrop-blur-[2px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow-pulse-text">Amr&apos;s Certifications</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of professional certificates, courses, and achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            index={index}
                            title={cert.title}
                            description={cert.description}
                            image={cert.image}
                            href={cert.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
