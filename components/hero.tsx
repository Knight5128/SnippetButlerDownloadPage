"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Code } from "lucide-react"
import { FloatingSnippet } from "@/components/floating-snippet"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating snippets background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingSnippet count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6">
              Manage Your Prompts with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a55c] to-[#e9c57c]">
                {" "}
                Snippet Butler
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Your personal assistant for organizing, retrieving, and optimizing AI prompts. Save time and boost
            productivity with intelligent prompt management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#1a2b4a] hover:bg-[#2a3b5a] text-[#c9a55c] border border-[#c9a55c]/50 px-8 dark:bg-[#1a2b4a] dark:hover:bg-[#2a3b5a] dark:text-[#c9a55c]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black dark:text-white border-[#c9a55c] hover:bg-[#c9a55c]/20 dark:hover:bg-[#c9a55c]/20"
              asChild
            >
              <a href="https://docs.snippetbutler.com" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-5 w-5" />
                View Documentation
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            Available for Windows, macOS and Linux coming soon. Version 1.2.0
          </motion.div>
        </div>
      </div>
    </div>
  )
}
