"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HiArrowRight, HiDownload } from "react-icons/hi"

export function Hero() {
  return (
    <section className="min-h-[70vh] md:min-h-[60vh] flex items-center justify-center relative overflow-hidden border-b-2">
      {/* Background gradient */}
      <div className="absolute inset-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-6" />
              <img 
                src="/8B196245-CF10-4B40-B51A-B629B51D274A.PNG" 
                alt="Ogbewe Favour" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-lg rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center text-primary text-lg md:text-2xl font-medium"
              >
                👋 Hello, I'm
              </motion.div>
              
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Favour Ogbewe</span>
              </h1>
            </div>

            <p className="text-lg md:text-2xl font-medium text-primary max-w-160 leading-relaxed">
              Frontend Developer crafting exceptional digital experiences with modern technologies and user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" asChild>
                <Link href="#projects">
                  View My Work
                  <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}