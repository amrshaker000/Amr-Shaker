"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const getAboutStoryData = (language: string) => {
    const isAr = language === "ar"

    return [
        {
            text: isAr
                ? "بدأ كل شيء بهدوء، بشيء بسيط: جهاز كمبيوتر.\nكطفل، لم أكن أفهم تماماً عما أبحث عنه، لكني كنت منجذباً إليه. لم أكن مجرد مستخدم، بل كنت أنغمس فيه. قضيت ساعات طويلة في الاستكشاف، والتعلم، وإصلاح الأشياء، والضياع في كل ما يتعلق بالتكنولوجيا والبرمجيات وعلوم الحاسوب. مع الوقت، أدركت شيئاً مهماً: لم يكن هذا مجرد فضول أو وسيلة لتمضية الوقت، كان هذا هو المكان الذي أشعر فيه أني حي حقاً. كان هذا عالمي."
                : "It all started quietly, with a simple thing: a computer.\nAs a kid, I didn’t fully understand what I was looking for, but I knew I was drawn to it. I wasn’t just using the computer, I was escaping into it. I spent countless hours scrolling, discovering, breaking things, fixing them, and getting lost in everything related to technology, software, and computer science. Over time, I realized something important: this wasn’t just curiosity or a way to pass the time. This was where I felt most alive. This was my world.",
            image: "/About/0.jpg",
            phase: { title: isAr ? "فضول" : "Curiosity", color: "text-blue-400", glow: "group-hover:shadow-blue-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "مع تقدمي في العمر، بدأ ذلك الفضول يطلب مني المزيد. البرمجة لم تكن واسعة وعميقة وحسب؛ كانت غامرة. كانت هناك أيام أقضي فيها من 6 إلى 8 ساعات أمام شاشتي، أكتب كوداً لا يعمل، وأصلح خطأً واحداً لأكتشف ثلاثة غيره، وأتساءل عما إذا كنت أتقدم حقاً أم أني أدور في حلقة مفرغة."
                : "As I grew older, that curiosity began to demand more from me. Programming wasn’t just wide and deep; it was overwhelming. There were days I spent 6 to 8 hours in front of my screen, writing code that didn’t work, fixing one bug only to uncover three more, and questioning whether I was actually progressing or just looping in place.",
            image: "/About/6.jpg",
            phase: { title: isAr ? "التزام" : "Commitment", color: "text-cyan-400", glow: "group-hover:shadow-cyan-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "استكشفت مسارات مختلفة، وجربت تقنيات لم تناسبني، وأعدت كتابة نفس المكونات عشرات المرات، وأطلقت مشاريع علمتني من خلال الفشل أكثر مما علمني النجاح. على مدار أكثر من عامين، عملت على مشاريع حقيقية لأشخاص حقيقيين عبر منصات مثل Upwork و Fiverr و Freelancer، وتعلمت تحت الضغط، والتزمت بالمواعيد النهائية، وأصلحت مشكلات عاجلة، وأعدت بناء الميزات عندما لم يكن 'الجيد بما فيه الكفاية' كافياً حقاً. ومع ذلك، حتى أثناء العمل الاحترافي، كان هناك شيء يزعجني: كنت أقدم نتائج، لكني لم أكن راضياً تماماً عن مستوى فهمي. بدأت المعرفة السطحية تشعرني بالقيود."
                : "I explored different paths, tried technologies that didn’t fit me, rewrote the same components dozens of times, and shipped projects that taught me more through failure than success. Over more than two years, I worked on real projects for real people across platforms like Upwork, Fiverr, and Freelancer, learning under pressure, meeting deadlines, fixing urgent issues, and rebuilding features when “good enough” wasn’t actually enough. Yet, even while working professionally, something kept bothering me: I was delivering results, but I wasn’t fully satisfied with my understanding. Surface-level knowledge started to feel like a limitation.",
            image: "/About/2.jpg",
            phase: { title: isAr ? "التزام" : "Commitment", color: "text-cyan-400", glow: "group-hover:shadow-cyan-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "لذا اتخذت قراراً، ولم يكن القرار السهل. تراجعت خطوة للوراء لأتمكن من المضي قدماً. بدأت دراسة أساسيات البرمجة وعلوم الحاسوب بنفسي، وعدت للمفاهيم التي يتخطاها معظم الناس بمجرد بدء العمل. قضيت شهوراً في تفكيك المشكلات، وإعادة بناء نماذج ذهنية، وتدريب نفسي على التفكير في الأنظمة، وليس فقط الحلول. لم أعد أطارد السرعة، بل كنت أطارد الوضوح. أردت أن أفهم 'لماذا' تعمل الأشياء، وليس فقط 'كيف' أجعلها تعمل."
                : "So I made a decision, and it wasn’t the easy one. I stepped back to move forward. I began studying the foundations of programming and computer science on my own, revisiting concepts most people skip once they start working. I spent months breaking down problems, rebuilding mental models, and training myself to think in systems, not just solutions. I wasn’t chasing speed anymore. I was chasing clarity. I wanted to understand why things work, not just how to make them work.",
            phase: { title: isAr ? "نمو" : "Growth", color: "text-indigo-400", glow: "group-hover:shadow-indigo-500/10", spacing: "my-24 md:my-40", special: true }
        },
        {
            text: isAr
                ? "لكن قصتي لم تكن يوماً عن البرمجة فقط."
                : "But my story was never only about programming.",
            phase: { title: isAr ? "نمو" : "Growth", color: "text-indigo-400", glow: "group-hover:shadow-indigo-500/10", spacing: "my-24 md:my-40", special: true, emphasized: true }
        },
        {
            text: isAr
                ? "لطالما آمنت بأن العمل الهادف يجب أن يكون مستداماً أيضاً، وقد اختُبر هذا الإيمان في اللحظة التي دخلت فيها عالم الأعمال. لم يبدأ 'رونق' كفكرة مدعومة بالموارد، بل بدأ من الصفر. استثمرت مالي الخاص، قطعة بقطعة: أول طابعة لي، ثم قاطعة (plotter)، ثم المواد الخام، وكل شراء كان يأتي بمخاطره وعدم اليقين. قضيت أسابيع في البحث عن معايير الجودة، وطرق الإنتاج، والتسعير، والهوية التجارية، وتجربة العملاء قبل إنتاج قطعة واحدة. كان كل قرار مهماً لأن كل خطأ كان له تكلفة حقيقية."
                : "I’ve always believed that meaningful work must also be sustainable, and that belief was tested the moment I stepped into business. Ronaq didn’t start as an idea with resources behind it. It started from zero. I invested my own money, piece by piece: my first printer, then a cutting plotter, then raw materials, each purchase coming with risk and uncertainty. I spent weeks researching quality standards, production methods, pricing, branding, and customer experience before producing a single item. Every decision mattered because every mistake had a real cost.",
            image: "/About/22.jpg",
            phase: { title: isAr ? "بيزنس" : "Business", color: "text-amber-400", glow: "group-hover:shadow-amber-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "التنفيذ كان المكان الذي التقت فيه النظرية بالضغط. لم أوكل العمل لآخرين بل قمت به بنفسي. أطلقت صفحات رونق على منصات التواصل الاجتماعي، وبنيت موقعه للتجارة الإلكترونية من الصفر، وصنعت المحتوى، واختبرت المنتجات، وعدلت العمليات، وحسنت الجودة من خلال التجربة والتكرار. لم تأتِ الطلبات بين عشية وضحاها؛ كان النمو تدريجياً، تحقق من خلال الاستمرارية، والتحسين، والاهتمام بالتفاصيل. مع الوقت، توقف 'رونق' عن كونه مجرد تجربة لمشروع صغير، وأصبح دليلاً على أن الانضباط، والإبداع، والبناء الواعي، حتى على نطاق صغير، يمكن أن يحول الموارد المحدودة إلى شيء حقيقي وذي قيمة."
                : "Execution was where theory met pressure. I didn’t outsource the work, I did it myself. I launched Ronaq’s social media pages, built its e-commerce website from scratch, created content, tested products, adjusted processes, and improved quality through trial and iteration. Orders didn’t come overnight. Growth was gradual, earned through consistency, refinement, and attention to detail. Over time, Ronaq stopped being just a small business experiment. It became proof that discipline, creativity, and intentional building, even on a small scale, can turn limited resources into something real and meaningful.",
            phase: { title: isAr ? "بيزنس" : "Business", color: "text-amber-400", glow: "group-hover:shadow-amber-500/10", spacing: "my-24 md:my-40", special: true }
        },
        {
            text: isAr
                ? "في الوقت نفسه، أدركت أن النمو الشخصي ليس له قيمة تذكر إذا لم يتم مشاركته. دفعني هذا الفهم نحو العمل التطوعي. ساهمت في منظمات خيرية، ومبادرات شبابية تحت رعاية وزارة الشباب والرياضة المصرية، وفريق التبرع بالدم، والفرق الإعلامية، وفرق تكنولوجيا المعلومات، وفعاليات كبرى مثل TEDx وفعاليات Google Developers. هذه التجارب، سواء كانت عن بعد أو على أرض الواقع في القاهرة والإسكندرية والمنصورة، علمتني دروساً في الحياة لا يمكن لأي دورة تدريبية أن تعلمها: كيف أقود، وأصغي، وأتواصل، وأهتم بصدق."
                : "At the same time, I realized that personal growth has little value if it isn’t shared. That understanding pushed me toward volunteering. I contributed to charitable organizations, youth initiatives under the Egyptian Ministry of Youth & Sports, blood donation teams, media teams, IT teams, and major events such as TEDx and Google Developer events. These experiences, whether remote or on the ground in Cairo, Alexandria, and Mansoura, taught me life lessons that no course ever could: how to lead, listen, communicate, and genuinely care.",
            image: "/About/9.jpg",
            phase: { title: isAr ? "تأثير" : "Impact", color: "text-emerald-400", glow: "group-hover:shadow-emerald-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "طوال كل هذا، تمسكت بإيمان واحد: أن أثمن استثمار يمكنني القيام به هو الاستثمار في نفسي. انضممت إلى برامج متخصصة ركزت على القيادة، والمهارات الناعمة، وإدارة الفرق، بما في ذلك برنامج Aspire Leaders من معهد Aspire، المدعوم من جامعة هارفارد، وبرنامج McKinsey Forward. هذه التجارب أعادت تشكيل طريقة تفكيري وتواصلي واتخاذي للقرارات."
                : "Throughout all of this, I held onto one belief: the most valuable investment I can ever make is in myself. I joined specialized programs focused on leadership, soft skills, and team management, including Aspire Leaders by the Aspire Institute, supported by Harvard University, and the McKinsey Forward program. These experiences reshaped how I think, communicate, and make decisions.",
            image: "/About/26.jpg",
            phase: { title: isAr ? "استثمار" : "Investment", color: "text-purple-400", glow: "group-hover:shadow-purple-500/10", spacing: "mb-20 md:mb-32" }
        },
        {
            text: isAr
                ? "بالتوازي مع ذلك، عززت ملفي التقني من خلال برنامج ITIDA Gigs تحت رعاية وزارة الاتصالات وتكنولوجيا المعلومات المصرية، والذي يهدف لتعليم كافة مهارات العمل الحر. بالإضافة إلى عشرات الدورات في البرمجة، والذكاء الاصطناعي، وعلوم البيانات، والأمن السيبراني، وإدارة المشاريع. ومن أكثر التجارب التي أعتز بها هي حصولي على عضوية المركز الأمريكي بالقاهرة (ACC)، والتي فتحت لي أبواب التعلم العالمي، والاتصال الهادف، والآفاق الأوسع."
                : "In parallel, I strengthened my technical profile through the ITIDA Gigs program under the Egyptian Ministry of Communications, which aims to teach all freelancing skills. along with dozens of courses in programming, artificial intelligence, data science, cybersecurity, and project management. One of the experiences I value most is becoming a member of the American Center Cairo, which opened doors to global learning, meaningful connections, and broader perspectives.",
            phase: { title: isAr ? "استثمار" : "Investment", color: "text-purple-400", glow: "group-hover:shadow-purple-500/10", spacing: "my-24 md:my-40", special: true }
        },
        {
            text: isAr
                ? "اليوم، لا أعرف نفسي بلقب واحد. لا أرى نفسي فقط كمطور، أو طالب، أو صاحب عمل. أرى نفسي كشخص يبني مستقبله بوعي من خلال التعلم، وتحمل المسؤولية، وبذل الجهد باستمرار."
                : "Today, I don’t define myself by a single title. I don’t see myself only as a developer, a student, or a business owner. I view myself as someone who is deliberately building a future through learning, taking responsibility, and consistently putting in effort.",
            image: "/About/35.jpg",
            phase: { title: isAr ? "هدف" : "Purpose", color: "text-rose-400", glow: "group-hover:shadow-rose-500/5", spacing: "mb-20 md:mb-32", grounded: true }
        },
        {
            text: isAr
                ? "أهم ما يعنيني ليس فقط ما أحققه، بل الأثر الذي أتركه: مساعدة الآخرين على الفهم، وتوجيه أولئك الذين بدأوا للتو، والمساهمة بشيء هادف في كل مساحة أصبح جزءاً منها."
                : "What matters most to me isn’t just what I achieve, but the value I leave behind: helping others understand, guiding those who are just starting, and contributing something meaningful to every space I become a part of.",
            phase: { title: isAr ? "هدف" : "Purpose", color: "text-rose-400", glow: "group-hover:shadow-rose-500/5", spacing: "my-24 md:my-40", grounded: true, special: true }
        },
        {
            text: isAr
                ? "هدفي بسيط: أن أنمو، وأشارك ما أتعلمه، وأجعل الطريق أكثر وضوحاً لأولئك الذين يسيرون فيه من بعدي."
                : "My goal is simple: to grow, to share what I learn, and to make the path a little clearer for those who walk it after me.",
            image: "/About/10.jpg",
            phase: { title: isAr ? "هدف" : "Purpose", color: "text-rose-400", glow: "group-hover:shadow-rose-500/5", spacing: "mb-0", grounded: true }
        }
    ]
}

interface StoryNodeProps {
    text: string
    image?: string
    index: number
    phase: {
        title: string
        color: string
        glow: string
        grounded?: boolean
        spacing: string
        special?: boolean
        emphasized?: boolean
    }
}

function StardustBackground() {
    const [stars, setStars] = useState<{ x: string; y: string; opacity: number; scale: number; duration: number }[]>([])

    useEffect(() => {
        const newStars = Array.from({ length: 40 }).map(() => ({
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 2,
            duration: Math.random() * 5 + 3,
        }))
        setStars(newStars)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)] z-0" />
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[1px] h-[1px] bg-white rounded-full"
                    initial={{
                        x: star.x,
                        y: star.y,
                        opacity: 0,
                        scale: star.scale
                    }}
                    animate={{
                        opacity: [0, star.opacity, 0],
                        scale: [star.scale, star.scale * 1.5, star.scale],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5
                    }}
                />
            ))}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.03, 0.05, 0.03]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15)_0%,transparent_60%)] blur-[120px]"
            />
        </div>
    )
}

function StoryNode({ text, image, index, phase }: StoryNodeProps) {
    const shouldReduceMotion = useReducedMotion()
    const isEven = index % 2 === 0
    const isSpecial = phase.special || !image

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className={cn(
                "relative w-full min-h-[50vh] flex items-center justify-center py-12",
                phase.spacing
            )}
        >
            {/* Timeline Connector Dot */}
            <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 top-4 flex items-center justify-center z-30">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "w-3 h-3 rounded-full border border-white/30 transition-colors duration-1000 ring-2 ring-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
                        phase.color.replace("text-", "bg-")
                    )}
                />
            </div>

            <div className={cn(
                "relative w-full max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-0 items-center"
            )}>
                {/* Cinematic Image Blending Layout */}
                {!isSpecial && image && (
                    <div className={cn(
                        "relative col-span-1 md:col-span-8 z-10",
                        isEven ? "md:order-1" : "md:order-2"
                    )}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group"
                        >
                            <img
                                src={image}
                                alt={phase.title}
                                className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                            />
                            {/* Cinematic Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                            <div className={cn(
                                "absolute inset-0 transition-opacity duration-1000 bg-gradient-to-r",
                                isEven ? "from-transparent to-slate-950/70" : "from-slate-950/70 to-transparent"
                            )} />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-white mix-blend-overlay" />
                        </motion.div>
                    </div>
                )}

                {/* Cinematic Content Layout */}
                <div className={cn(
                    "col-span-1 md:col-span-6 z-20 transition-all duration-500",
                    isEven
                        ? "md:col-start-7 md:order-2 md:pl-12"
                        : "md:col-start-1 md:order-1 md:pr-12 md:text-right",
                    !isSpecial && (isEven ? "md:-ml-40" : "md:-mr-40")
                )}>
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30, filter: "blur(15px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className={cn(
                            "relative group p-8 md:p-10 rounded-3xl backdrop-blur-3xl border border-white/10 overflow-hidden",
                            "bg-slate-950/40 hover:bg-slate-950/50 transition-all duration-500",
                            "shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 animate-glow-pulse-card"
                        )}
                    >
                        {/* Glass Shine Effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

                        {/* Background Glow Effect */}
                        <div className={cn(
                            "absolute inset-0 blur-[80px] opacity-10 -z-10 rounded-full",
                            phase.color.replace("text-", "bg-")
                        )} />

                        {/* Phase Tag */}
                        <div className={cn(
                            "inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border border-white/10 bg-white/5",
                            phase.color
                        )}>
                            <motion.span
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className={cn("w-1.5 h-1.5 rounded-full", phase.color.replace("text-", "bg-"), "shadow-[0_0_8px_currentColor]")}
                            />
                            {phase.title}
                        </div>

                        <h3 className={cn(
                            "relative leading-[1.6] text-white font-medium whitespace-pre-wrap transition-all duration-700",
                            phase.emphasized
                                ? "text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
                                : isSpecial
                                    ? "text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white/90"
                                    : "text-sm md:text-base lg:text-lg tracking-tight text-white/80"
                        )}>
                            {text}
                        </h3>

                        {/* Visual Continuity Cue */}
                        {isSpecial && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "80px", opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 0.8 }}
                                className={cn(
                                    "h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12 relative overflow-hidden",
                                    !isEven && "ml-auto"
                                )}
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-[2px]"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export function AboutJourney() {
    const { scrollYProgress } = useScroll()
    const { language, t } = useLanguage()

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const storyData = getAboutStoryData(language)

    return (
        <section id="about-journey" className="relative py-24 md:py-40 bg-[#020617] overflow-hidden">
            <StardustBackground />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text animate-glow-pulse-text">
                        {t("about.title")}
                    </h2>
                    <p className="text-white/40 text-[10px] md:text-xs max-w-xl mx-auto font-black tracking-[0.4em] uppercase">
                        {t("about.subtitle")}
                    </p>
                </div>

                <div className="relative">
                    {/* Subtle Continuity Line */}
                    <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[0.5px] bg-white/5" />

                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[0.5px] bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-rose-500/30 origin-top z-0"
                    />

                    <div className="space-y-32 md:space-y-64">
                        {storyData.map((item, index) => (
                            <StoryNode
                                key={index}
                                text={item.text}
                                image={item.image}
                                index={index}
                                phase={item.phase as any}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Narrative Footer Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
        </section>
    )
}
