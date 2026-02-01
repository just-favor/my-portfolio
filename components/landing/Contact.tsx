"use client"

import { Button } from "@/components/ui/button"
import { HiMail } from "react-icons/hi"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 text-sm md:text-base text-muted-foreground"
        >
          I'm currently open to new opportunities and collaborations. 
          Feel free to reach out via email or connect on social media.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg">
            <a href="mailto:vivasfavor@gmail.com">
              <HiMail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}