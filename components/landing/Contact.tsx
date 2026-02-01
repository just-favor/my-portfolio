"use client"

import { Button } from "@/components/ui/button"
import { HiMail } from "react-icons/hi"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6 text-muted-foreground">
          I’m currently open to new opportunities and collaborations. 
          Feel free to reach out via email or connect on social media.
        </p>
        <Button asChild size="lg">
          <a href="mailto:your.email@example.com">
            <HiMail className="mr-2 h-5 w-5" /> Email Me
          </a>
        </Button>
      </div>
    </section>
  )
}
