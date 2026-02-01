"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "@/data/projects"
import { useEffect, useState } from "react"

import {
  Card,
  CardContent, 
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id}>
                <Card className="h-full flex flex-col overflow-hidden relative group">
                  {project.image && (
                    <div className="relative w-full h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <Button asChild size="sm">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col justify-between h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="flex flex-wrap gap-2 mt-6 justify-start">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center md:text-left"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden relative group">
                {project.image && (
                  <div className="relative w-fit h-50 group hover:scale-105 transition-all duration-500">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <Button asChild size="sm">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                )}
                
                <div className="p-6 flex flex-col justify-between h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex flex-wrap gap-2 justify-start">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
