"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-[#c9a55c]/20 dark:border-[#c9a55c]/20"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/AppIcon.png" alt="Snippet Butler Logo" width={32} height={32} />
        <span className="text-black dark:text-white font-medium text-xl">Snippet Butler</span>
      </Link>

      <div className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how-it-works">How it Works</NavLink>
        <NavLink href="#testimonials">Testimonials</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggle />
        <LanguageSwitcher />
        <Button variant="ghost" className="text-black dark:text-white hover:text-[#c9a55c]">
          <a href="https://docs.snippetbutler.com" target="_blank" rel="noopener noreferrer">
            Documentation
          </a>
        </Button>
        <Button className="bg-[#1a2b4a] hover:bg-[#2a3b5a] text-[#c9a55c] border border-[#c9a55c]/50 dark:bg-[#1a2b4a] dark:hover:bg-[#2a3b5a] dark:text-[#c9a55c] dark:border-[#c9a55c]/50">
          Download Now
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-black dark:text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-[#c9a55c] dark:hover:text-[#c9a55c] transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a55c] transition-all group-hover:w-full" />
    </Link>
  )
}
