"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
      className="flex items-center gap-2"
    >
      <Languages className="w-4 h-4" />
      {language === "nl" ? "EN" : "NL"}
    </Button>
  )
}
