import { useEffect, useState, useRef, RefObject } from "react"

interface UseInViewOptions {
    threshold?: number
    rootMargin?: string
}

export function useInView<T extends HTMLElement = HTMLElement>(
    options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.2, rootMargin = "0px" } = options
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold, rootMargin }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return [ref, isVisible]
}
