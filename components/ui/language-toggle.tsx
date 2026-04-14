"use client"

import { useLanguage } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Image from "next/image"

const languages = [
  { value: "id" as Locale, label: "Indonesia", flag: "https://flagcdn.com/w40/id.png", code: "ID" },
  { value: "en" as Locale, label: "English", flag: "https://flagcdn.com/w40/gb.png", code: "EN" },
]

function FlagImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={20}
      height={15}
      className="rounded-[2px] object-cover shrink-0"
      unoptimized
    />
  )
}

interface LanguageSelectProps {
  isScrolled?: boolean
  className?: string
}

export function LanguageSelect({ isScrolled = true, className }: LanguageSelectProps) {
  const { locale, setLocale } = useLanguage()

  const current = languages.find((l) => l.value === locale) ?? languages[0]

  return (
    <Select value={locale} onValueChange={(val) => setLocale(val as Locale)}>
      <SelectTrigger
        size="sm"
        className={cn(
          "gap-1.5 border-0 font-medium text-xs tracking-wide cursor-pointer",
          isScrolled
            ? "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
            : "bg-slate-200/60 hover:bg-slate-200 text-slate-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white",
          className
        )}
      >
        <SelectValue placeholder="Language">
          <FlagImage src={current.flag} alt={current.label} />
          <span>{current.code}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end" alignItemWithTrigger={false}>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <FlagImage src={lang.flag} alt={lang.label} />
            <span>{lang.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
