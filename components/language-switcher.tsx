"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  flag: string
  subdomain: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸", subdomain: "en" },
  { code: "zh", name: "中文", flag: "🇨🇳", subdomain: "zh" },
  { code: "jp", name: "日本語", flag: "🇯🇵", subdomain: "jp" },
]

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Detect language from subdomain
    const hostname = window.location.hostname
    const subdomain = hostname.split(".")[0]

    if (subdomain === "downloads") {
      // Check if path contains language code
      const pathLang = window.location.pathname.split("/")[1]
      const matchedLang = languages.find((lang) => lang.subdomain === pathLang)
      if (matchedLang) {
        setCurrentLang(matchedLang)
      }
    }
  }, [])

  if (!mounted) return null

  const switchLanguage = (lang: Language) => {
    const currentUrl = window.location.href
    const baseUrl = "https://downloads.snippetbutler.com"
    window.location.href = `${baseUrl}/${lang.subdomain}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:text-[#c9a55c]">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#121a2a] border-[#c9a55c]/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 cursor-pointer ${
              currentLang.code === lang.code ? "text-[#c9a55c]" : "text-white"
            } hover:text-[#c9a55c] hover:bg-[#1a2b4a]`}
            onClick={() => switchLanguage(lang)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
