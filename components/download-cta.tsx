"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { PlatformBadge } from "@/components/platform-badge"
import Link from "next/link"

export default function DownloadCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1a2b4a]/50 backdrop-blur-sm z-0 dark:bg-[#1a2b4a]/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Transform Your Prompt Management?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            Download Snippet Butler today and join thousands of professionals who have optimized their AI workflow.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <Link href="/downloads/SnippetButlerSetup.exe" download>
                <Button
                  size="lg"
                  className="bg-[#1a2b4a] hover:bg-[#2a3b5a] text-[#c9a55c] border border-[#c9a55c]/50 px-8 dark:bg-[#1a2b4a] dark:hover:bg-[#2a3b5a] dark:text-[#c9a55c]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </Button>
              </Link>
              <div className="mt-2">
                <PlatformBadge available={true} />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Button
                size="lg"
                variant="outline"
                className="text-black dark:text-white border-[#c9a55c] hover:bg-[#c9a55c]/20 dark:hover:bg-[#c9a55c]/20"
                disabled
              >
                <Download className="mr-2 h-5 w-5" />
                Download for macOS
              </Button>
              <div className="mt-2">
                <PlatformBadge available={false} />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Button
                size="lg"
                variant="outline"
                className="text-black dark:text-white border-[#c9a55c] hover:bg-[#c9a55c]/20 dark:hover:bg-[#c9a55c]/20"
                disabled
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Linux
              </Button>
              <div className="mt-2">
                <PlatformBadge available={false} />
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-500 text-sm">Version 1.2.0 | 14.2 MB | Released May 1, 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
