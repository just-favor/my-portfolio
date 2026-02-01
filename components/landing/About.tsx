"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "JavaScript"]

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 border-r-0 md:border-r pr-0 md:pr-8"
            >
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with a love for creating beautiful, 
                functional web experiences. My journey began with curiosity about how 
                websites work, and it has evolved into a career focused on building 
                modern, user-centered applications.
              </p>
              
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
                I specialize in React and Next.js, always staying current with the 
                latest technologies and best practices. When I'm not coding, you'll 
                find me exploring new design trends or contributing to open-source projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Technologies I work with</h3>
              <div className="flex flex-wrap gap-3 md:gap-6 mt-6 md:mt-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="px-4 py-1 text-md font-semibold border-r-2  border-muted-foreground/20">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}