"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Snippet Butler has completely transformed how I work with AI. I've saved countless hours by reusing optimized prompts.",
      author: "Alex Morgan",
      role: "Content Creator",
      avatar: "AM",
    },
    {
      quote:
        "As a team lead, I needed a way to share prompt libraries with my team. Snippet Butler made this process seamless.",
      author: "Sarah Chen",
      role: "AI Product Manager",
      avatar: "SC",
    },
    {
      quote:
        "The prompt optimization feature alone is worth the download. My results from AI tools improved dramatically.",
      author: "Michael Rodriguez",
      role: "Technical Writer",
      avatar: "MR",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#0a0e17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Join thousands of professionals who have improved their AI workflow with Snippet Butler.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-white dark:bg-[#121a2a] border-[#c9a55c]/20 h-full">
                <CardContent className="pt-6">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="border-t border-[#c9a55c]/10 pt-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 bg-[#1a2b4a] border border-[#c9a55c]/30">
                      <AvatarFallback className="text-[#c9a55c]">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-black dark:text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
