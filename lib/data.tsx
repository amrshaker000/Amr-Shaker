import { Github, Linkedin, Instagram, Youtube, ExternalLink, Code, Briefcase, Compass, Globe, Facebook } from "lucide-react"
import { Project, Certification, Skill, SocialLink } from "@/types"

export const getProjects = (lang: string): Project[] => {
    const isAr = lang === "ar"
    return [
        {
            title: isAr ? "متجر رونق " : "Ronaq Stickers Store",
            description: isAr
                ? "مشروع تجاري لإنتاج وبيع الملصقات عالية الجودة. يغطي المشروع التصميم والطباعة والقص والتغليف وإدارة المبيعات."
                : "A business project for producing and selling high-quality stickers. The project covers design, printing, cutting, packaging, and sales management.",
            image: "/1.jpg",
            technologies: isAr
                ? ["تصميم", "طباعة", "قص", "تغليف", "خدمة عملاء"]
                : ["Design", "Printing", "Cutting", "Packaging", "Customer Service"],
            links: [
                {
                    url: "https://www.instagram.com/ronaq_store_/",
                    icon: <Instagram className="h-4 w-4" />,
                    label: isAr ? "انستجرام" : "Instagram",
                    variant: "outline"
                },
                {
                    url: "https://ronaq3.odoo.com/en",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: isAr ? "زيارة المتجر" : "Visit Store",
                    variant: "default"
                }
            ]
        },
        {
            title: "OriginTrace",
            description: isAr
                ? "مشروع تجاري لتوفير سوق آمن وموثق بتقنية البلوكتشين للإلكترونيات المستعملة."
                : "A business project for providing a secure, blockchain‑certified marketplace for used electronics.",
            image: "/2.jpg",
            technologies: ["Blockchain", "Smart Contracts", "Digital Warranties", "Marketplace"],
            links: [
                {
                    url: "https://youtu.be/C32qIxBr35Q",
                    icon: <Youtube className="h-4 w-4" />,
                    label: isAr ? "شاهد العرض" : "Watch Demo",
                    variant: "outline"
                },
                {
                    url: "https://origintrack.vercel.app/",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: isAr ? "مشاهدة المتجر" : "Watch Store",
                    variant: "default"
                }
            ]
        },
        {
            title: isAr ? "حزب الجبهة الوطنية" : "Egyptian National Front Party",
            description: isAr
                ? "نظام شامل لإدارة بيانات أعضاء الحزب مع واجهة حديثة واستجابية."
                : "A comprehensive system for managing party members' data with a modern, responsive interface.",
            image: "/3.jpg",
            technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
            links: [
                {
                    url: "https://v0-waraq.vercel.app/",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: isAr ? "عرض النظام" : "View System",
                    variant: "default"
                }
            ]
        },
        {
            title: isAr ? "آدم - معرض فوتوغرافي" : "Adam - Photography Portfolio",
            description: isAr
                ? "موقع شخصي لعرض الأعمال الفوتوغرافية وصناعة المحتوى المرئي، يركز على الجمالية والاحترافية في التقديم."
                : "A personal website for showcasing photography and visual content creation, focusing on aesthetics and professional presentation.",
            image: "/4.jpg",
            technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
            links: [
                {
                    url: "https://adam-portfolio-e54b2.web.app/",
                    icon: <ExternalLink className="h-4 w-4" />,
                    label: isAr ? "عرض المشروع" : "View Project",
                    variant: "default"
                }
            ]
        },
    ]
}

export const getCertifications = (lang: string): Certification[] => {
    const isAr = lang === "ar"
    return [
        {
            title: "Aspire Leaders Program '25",
            description: isAr
                ? "في معهد Aspire، وهي منظمة غير ربحية تطورت من مبادرة سابقة تأسست في جامعة هارفارد."
                : "At the Aspire Institute, a nonprofit organization that evolved from itspredecessor initiative founded at Harvard University.",
            href: "/Certifications/aspire-certificate1.jpg",
            image: "/Certifications/aspire-certificate.jpg"
        },
        {
            title: isAr ? "أساسيات برمجة بايثون" : "Python Programming Basics",
            description: isAr
                ? "دورة تأسيسية في لغة برمجة بايثون تغطي القواعد وبنية البيانات والخوارزميات الأساسية."
                : "Foundation course in Python programming language covering syntax, data structures, and basic algorithms.",
            href: "https://maharatech.gov.eg/mod/customcert/view.php?id=1737&downloadown=1",
            image: "/Certifications/python-basics-course-certificate.jpg"
        },
        {
            title: "McKinsey Forward Program",
            description: isAr
                ? "يمكّن هذا البرنامج المشاركين من تطوير مهارات عملية للنجاح في مستقبل العمل."
                : "This program enables participants to develop practical skills for success in the future of work.",
            href: "https://www.credly.com/badges/debcfebf-4e39-4869-9e3f-9bea51c54a29/linked_in_profile",
            image: "/Certifications/mckinsey-forward-program.jpg"
        },
        {
            title: "ITIDA Gigs '25",
            description: isAr
                ? "فهم واسع ومعمق لمهارات العمل الحر الأساسية والمتقدمة."
                : "A broad and in-depth understanding of basic and advanced freelance skills.",
            href: "https://drive.google.com/file/d/1Jaj9mjPzdhREzjXKkuGKz58Ok6K4ESIf/view",
            image: "/Certifications/itida-gigs-graduation-certificate.jpg"
        },
        {
            title: isAr ? "حضور قمة شباب مصر المستدامة '25" : "SEYS'25 Attendance",
            description: isAr
                ? "حضور قمة شباب مصر المستدامة في حرم الجامعة الأمريكية بالتحرير."
                : "Attendance of Sustainable Egypt Youth Summit at the AUC Tahrir campus.",
            href: "/Certifications/seys-2025-certificate-amr-shaker.jpg",
            image: "/Certifications/seys-2025-certificate-amr-shaker.jpg"
        },
        {
            title: isAr ? "تطوير الواجهة الأمامية" : "Front-End From Black Horse",
            description: isAr
                ? "تدريب شامل على تقنيات الواجهة الأمامية الحديثة، بما في ذلك HTML و CSS و JavaScript و React."
                : "Comprehensive training in modern front-end technologies, including HTML, CSS, JavaScript, and React.",
            href: "/Certifications/front-end-certificate.jpg",
            image: "/Certifications/front-end-certificate.jpg"
        },
        {
            title: "TEDx Certificate",
            description: isAr
                ? "شهادة تقدير للمساهمة في حدث TEDx."
                : "Certificate of recognition for contribution to TEDx event.",
            href: "/Certifications/tedx-certificate.jpg",
            image: "/Certifications/tedx-certificate.jpg"
        },
        {
            title: "Nile University Undergraduate Research Forum",
            description: isAr
                ? "شهادة مشاركة مُنحت لتقديم مشروع 'الطريق الأخضر' في منتدى أبحاث المرحلة الجامعية الثامن عشر بجامعة النيل."
                : "A certificate of participation awarded for presenting the Green Road project at the 18th Undergraduate Research Forum at Nile University.",
            href: "/Certifications/NU.jpg",
            image: "/Certifications/NU.jpg"
        },
        {
            title: isAr ? "المركز التاسع في مسابقة أفضل رسالة دعم نفسي" : "9th Place in Best Psychological Support Message",
            description: isAr
                ? "الحصول على المركز التاسع في مسابقة أفضل رسالة دعم نفسي لعام 2025/2026 من جامعة حلوان التكنولوجية."
                : "Obtained 9th place in the 'Best Psychological Support Message' competition (2025/2026) at Helwan Technological University.",
            href: "/Certifications/9th Best Psychological Support Message.jpg",
            image: "/Certifications/9th Best Psychological Support Message.jpg"
        },
        {
            title: isAr ? "تكنولوجيا التعليم: المبادئ، الاستراتيجيات، التطبيقات" : "Education Technology: Principles, Strategies, Applications",
            description: isAr
                ? "شهادة إتمام المستوى من منصة إدراك وأكاديمية الملكة رانيا لتدريب المعلمين."
                : "Level completion certificate from Edraak and Queen Rania Teacher Academy.",
            href: "/Certifications/Education Technology Principles, Strategies, Applications.png",
            image: "/Certifications/Education Technology Principles, Strategies, Applications.png"
        },
        {
            title: isAr ? "بناء تطبيقات الويب باستخدام PHP و MySQL" : "Building Web Applications using PHP & MYSQL",
            description: isAr
                ? "شهادة إتمام دورة بناء تطبيقات الويب باستخدام PHP و MySQL من منصة مهارة-تك (ITI)."
                : "Completion certificate for Building Web Applications using PHP & MYSQL from Mahara-Tech (ITI) platform.",
            href: "/Certifications/Building Web Applications using PHP & MYSQL.png",
            image: "/Certifications/Building Web Applications using PHP & MYSQL.png"
        },
        {
            title: isAr ? "سفراء الاتصالات" : "Ambassadors of Telecommunications",
            description: isAr
                ? "شهادة برنامج سفراء الاتصالات."
                : "Program certification for the Ambassadors of Telecommunications.",
            href: "/Certifications/ambassadors-telecom-certification.jpg",
            image: "/Certifications/ambassadors-telecom-certification.jpg"
        },
        {
            title: isAr ? "أدوات الذكاء الاصطناعي التوليدي" : "Generative AI Tools CSW",
            description: isAr
                ? "دورة متقدمة في استخدام أدوات الذكاء الاصطناعي التوليدي لتحسين الإنتاجية والإبداع."
                : "Advanced course on utilizing Generative AI tools to enhance productivity and creativity.",
            href: "/Certifications/Generative AI Tools CSW.jpg",
            image: "/Certifications/Generative AI Tools CSW.jpg"
        },
        {
            title: "Digitera Certificate",
            description: isAr
                ? "شهادة إتمام برنامج تدريبي في المهارات الرقمية."
                : "Certificate for completing a digital skills training program.",
            href: "/Certifications/digitera.png",
            image: "/Certifications/digitera.png"
        },
        {
            title: isAr ? "دورة إتقان React JS" : "React js Master Course",
            description: isAr
                ? "دورة تدريبية مكثفة لمدة 70 ساعة في مكتبة React.js مع المهندس أسامة الجندي."
                : "Intensive 70-hour training course in React.js library with Eng. Usama Elgendy.",
            href: "/Certifications/amr-shaker.jpg",
            image: "/Certifications/amr-shaker.jpg"
        },
        {
            title: "edX Professional Certificate",
            description: isAr
                ? "شهادة مهنية من منصة edX العالمية."
                : "A professional certificate from the global edX platform.",
            href: "/Certifications/edx-certificate.jpg",
            image: "/Certifications/edx-certificate.jpg"
        },
        {
            title: isAr ? "إدارة المشاريع الرشيقة (Agile)" : "Agile Project Management",
            description: isAr
                ? "شهادة في منهجيات Agile لإدارة المشاريع بكفاءة ومرونة."
                : "Certification in Agile methodologies for efficient and flexible project management.",
            href: "/Certifications/agile-project-management.jpg",
            image: "/Certifications/agile-project-management.jpg"
        },
        {
            title: isAr ? "علوم البيانات والتحليلات" : "Data Science and Analytics",
            description: isAr
                ? "أساسيات تحليل البيانات واستخراج الأفكار القيمة لاتخاذ قرارات مدروسة."
                : "Fundamentals of data analysis and extracting valuable insights for informed decision-making.",
            href: "/Certifications/data-science-and-analytics.jpg",
            image: "/Certifications/data-science-and-analytics.jpg"
        },
        {
            title: isAr ? "مقدمة في التوعية بالأمن السيبراني" : "Intro to Cybersecurity Awareness",
            description: isAr
                ? "أساسيات حماية البيانات الرقمية والوعي بالتهديدات الأمنية."
                : "Basics of digital data protection and awareness of security threats.",
            href: "/Certifications/intro-cybersecurity-awareness.jpg",
            image: "/Certifications/intro-cybersecurity-awareness.jpg"
        },
        {
            title: isAr ? "الذكاء الاصطناعي للمحترفين في الأعمال" : "AI for Business Professionals",
            description: isAr
                ? "فهم كيفية دمج تقنيات الذكاء الاصطناعي في بيئات العمل لتحقيق نتائج استراتيجية."
                : "Understanding how to integrate AI technologies into business environments for strategic outcomes.",
            href: "/Certifications/ai-for-business-professionals.jpg",
            image: "/Certifications/ai-for-business-professionals.jpg"
        },
        {
            title: isAr ? "الذكاء الاصطناعي لمحي المحترفين في مايكروسوفت أوفيس" : "AI for Microsoft Office Pros",
            description: isAr
                ? "تعلم كيفية استخدام ميزات الذكاء الاصطناعي المدمجة في أدوات Microsoft Office."
                : "Learning how to use built-in AI features in Microsoft Office tools.",
            href: "/Certifications/ai-for-microsoft-office-pros.jpg",
            image: "/Certifications/ai-for-microsoft-office-pros.jpg"
        },
        {
            title: isAr ? "لغة الجسد وإتيكيت الأعمال" : "Body Language & Business Etiquette",
            description: isAr
                ? "تحسين مهارات التواصل غير اللفظي والاحترافية في التعامل المهني."
                : "Improving non-verbal communication skills and professionalism in business interactions.",
            href: "/Certifications/body-language-business-etiquette.jpg",
            image: "/Certifications/body-language-business-etiquette.jpg"
        },
        {
            title: isAr ? "مهارات التواصل الفعال" : "Effective Communication Skills",
            description: isAr
                ? "تطوير استراتيجيات تواصل واضحة ومقنعة في مختلف البيئات."
                : "Developing clear and persuasive communication strategies in various environments.",
            href: "/Certifications/effective-communication-skills.jpg",
            image: "/Certifications/effective-communication-skills.jpg"
        },
        {
            title: isAr ? "تعلم Git و GitHub" : "Learn Git & GitHub",
            description: isAr
                ? "إتقان أنظمة التحكم في الإصدار والتعاون في المشاريع التقنية."
                : "Mastering version control systems and collaboration on technical projects.",
            href: "/Certifications/learn-git-github-md.jpg",
            image: "/Certifications/learn-git-github-md.jpg"
        },
        {
            title: isAr ? "إتقان مقابلات العمل" : "Mastering Job Interviews",
            description: isAr
                ? "تقنيات واستراتيجيات للنجاح في مقابلات العمل المهنية."
                : "Techniques and strategies for success in professional job interviews.",
            href: "/Certifications/mastering-job-interviews-certificate.jpg",
            image: "/Certifications/mastering-job-interviews-certificate.jpg"
        },
        {
            title: isAr ? "مهارات الإقناع والتأثير" : "Persuasion & Influence Skills",
            description: isAr
                ? "تعلم فنون الإقناع والتأثير الإيجابي في الآخرين."
                : "Learning the arts of persuasion and positive influence on others.",
            href: "/Certifications/persuasion-influence-skills.jpg",
            image: "/Certifications/persuasion-influence-skills.jpg"
        },
        {
            title: isAr ? "شهادة إتيكيت العمل" : "Work Etiquette Certificate",
            description: isAr
                ? "قواعد السلوك المهني والتعامل باحترام في بيئة العمل."
                : "Rules of professional conduct and respectful interaction in the workplace.",
            href: "/Certifications/work-etiquette-certificate.jpg",
            image: "/Certifications/work-etiquette-certificate.jpg"
        },
    ]
}

export const getSkills = (lang: string): Skill[] => {
    const isAr = lang === "ar"
    return [
        {
            category: isAr ? "البرمجة وتطوير الويب" : "Programming & Web Development",
            title: isAr ? "البرمجة وتطوير الويب" : "Programming & Web Development",
            description: isAr
                ? "أساعد الناس في سرد قصصهم، وبناء حضورهم، والوصول إلى جمهورهم من خلال مواقع ويب بسيطة وفعالة وجميلة."
                : "Help people tell their story, build their presence, and reach their audience through simple, effective, and beautiful websites.",
            icon: <Code className="h-5 w-5" />,
            skills: ["C++", "Python", "OOP", "TypeScript", "React.js", "PHP", "HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Redux", "Zustand", "Context API", "REST APIs", "Git & GitHub", "VS Code", "Responsive Design", "UI/UX", "Figma", "Framer Motion", "Accessibility", "Performance Optimization", "Testing"],
        },
        {
            category: isAr ? "القيادة والمهارات الناعمة" : "Leadership & Soft Skills",
            title: isAr ? "القيادة والمهارات الناعمة" : "Leadership & Soft Skills",
            description: isAr
                ? "أساعد الفرق على العمل بشكل أفضل، والتواصل بوضوح، والتغلب على التحديات، والنمو معاً من خلال القيادة القوية والتعاطف والتعاون الفعال."
                : "Help teams work better, communicate clearly, overcome challenges, and grow together through strong leadership, empathy, and effective collaboration.",
            icon: <Compass className="h-5 w-5" />,
            skills: isAr
                ? ["القيادة", "إدارة الفريق", "التواصل", "حل المشكلات", "التفكير النقدي", "التكيف", "إدارة الوقت", "حل النزاعات", "الارشاد", "التحفيز", "المسؤولية", "الذكاء العاطفي", "التعلم المستمر", "التحدث أمام الجمهور", "أخلاقيات العمل"]
                : ["Leadership", "Team Management", "Communication", "Problem Solving", "Critical Thinking", "Adaptability", "Time Management", "Conflict Resolution", "Mentorship", "Motivation", "Responsibility", "Emotional Intelligence", "Continuous Learning", "Public Speaking", "Work Ethics"],
        },
        {
            category: isAr ? "الأعمال وريادة الأعمال" : "Business & Entrepreneurship",
            title: isAr ? "الأعمال وريادة الأعمال" : "Business & Entrepreneurship",
            description: isAr
                ? "أساعد في تحويل الأفكار إلى مشاريع مستدامة، وبناء العلامات التجارية، وفهم الأسواق، وخلق قيمة حقيقية من خلال التخطيط الذكي والتنفيذ والتحسين المستمر."
                : "Help turn ideas into sustainable projects, build brands, understand markets, and create real value through smart planning, execution, and continuous improvement.",
            icon: <Briefcase className="h-5 w-5" />,
            skills: isAr
                ? ["بناء الهوية", "التسويق الرقمي", "علاقات العملاء", "بحوث السوق", "تخطيط الميزانية", "استراتيجية المنتج", "المبيعات والنمو", "إدارة العمليات", "التفكير الريادي", "تخطيط المشاريع", "اتخاذ القرار", "إدارة العملاء", "التفاوض", "تحسين العمليات"]
                : ["Brand Building", "Digital Marketing", "Customer Relations", "Market Research", "Budget Planning", "Product Strategy", "Sales & Growth", "Business Operations", "Entrepreneurial Thinking", "Project Planning", "Decision Making", "Client Management", "Negotiation", "Process Optimization"],
        },
        {
            category: isAr ? "مهارات عامة وإضافية" : "General & Additional Skills",
            title: isAr ? "مهارات عامة وإضافية" : "General & Additional Skills",
            description: isAr
                ? "أساعد في نشر الأفكار، وتحسين المشاريع، وتواصل الناس من خلال الإبداع والتنظيم والأدوات الرقمية الحديثة."
                : "Help ideas spread, projects improve, and people connect through creativity, organization, and modern digital tools.",
            icon: <Globe className="h-5 w-5" />,
            skills: isAr
                ? ["صناعة المحتوى", "إدارة التواصل الاجتماعي", "كانفا وأدوات التصميم", "أساسيات SEO", "التحليلات والرؤى", "البحث عبر الإنترنت", "تنظيم البيانات", "إدارة الملفات", "مهارات العرض", "التعاون عن بعد", "أنظمة الإنتاجية", "سرعة الكتابة (54+ ك/د)"]
                : ["Content Creation", "Social Media Management", "Canva & Design Tools", "Basic SEO", "Analytics & Insights", "Online Research", "Data Organization", "File Management", "Presentation Skills", "Remote Collaboration", "Productivity Systems", "Fast Typing (54+ WPM)"],
        },
    ]
}

export const getSocialLinks = (lang: string): SocialLink[] => {
    const isAr = lang === "ar"
    return [
        {
            name: "GitHub",
            url: "https://github.com/amrshaker000",
            icon: <Github className="h-5 w-5 text-primary" />,
            ariaLabel: "GitHub"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/amrsh842/",
            icon: <Linkedin className="h-5 w-5 text-primary" />,
            ariaLabel: "LinkedIn"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/amrshaker000",
            icon: <Facebook className="h-5 w-5 text-primary" />,
            ariaLabel: "Facebook"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ulv_____________",
            icon: <Instagram className="h-5 w-5 text-primary" />,
            ariaLabel: "Instagram"
        },
    ]
}
