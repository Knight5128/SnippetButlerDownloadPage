"use client"

import { motion } from "framer-motion"
import { Search, Save, Zap, Repeat, FolderTree, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-[#c9a55c]" />,
      title: "Intelligent Search",
      description: "Find the perfect prompt instantly with our advanced semantic search engine.",
    },
    {
      icon: <Save className="h-10 w-10 text-[#c9a55c]" />,
      title: "One-Click Saving",
      description: "Save prompts from any application with a simple keyboard shortcut.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#c9a55c]" />,
      title: "Prompt Optimization",
      description: "AI-powered suggestions to improve your prompts for better results.",
    },
    {
      icon: <Repeat className="h-10 w-10 text-[#c9a55c]" />,
      title: "Version History",
      description: "Track changes and improvements to your prompts over time.",
    },
    {
      icon: <FolderTree className="h-10 w-10 text-[#c9a55c]" />,
      title: "Hierarchical Organization",
      description: "Organize prompts with tags, folders, and custom categories.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-[#c9a55c]" />,
      title: "Team Sharing",
      description: "Collaborate with your team by sharing prompt libraries securely.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100/80 dark:bg-[#0a0e17]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4"
          >
            Powerful Features for Prompt Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Snippet Butler comes packed with everything you need to manage your AI prompts efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-white dark:bg-[#121a2a] border-[#c9a55c]/20 h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-black dark:text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
