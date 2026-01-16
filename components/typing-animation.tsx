"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

export function TypingAnimation() {
  const { t } = useLanguage()

  const roles = [
    t("hero.developer"),
    t("hero.student"),
    t("hero.owner"),
    t("hero.volunteer"),
    t("hero.advisor"),
  ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(currentRole.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        } else {
          setCurrentText(currentRole.substring(0, currentText.length + 1))

          if (currentText === currentRole) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentRoleIndex])

  return (
    <span className="gradient-text font-semibold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
