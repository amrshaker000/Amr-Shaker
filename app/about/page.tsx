import { Navigation } from "@/components/navigation"
import { AboutJourney } from "@/components/about-journey"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-20">
                <AboutJourney />
            </div>
        </main>
    )
}
