"use client"

import { useEffect, useState } from "react"
import { Locale } from "@/lib/i18n"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()

    if (browserLang.startsWith("en")) {
      setLocale("en")
    } else {
      setLocale("pt")
    }
  }, [])

  const toggleLocale = () => {
    setLocale(prev => (prev === "pt" ? "en" : "pt"))
  }

  return {
    locale,
    toggleLocale
  }
}