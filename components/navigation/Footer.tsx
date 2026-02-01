"use client"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-200 dark:bg-gray-900 backdrop-blur py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Favour Ogbewe. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex gap-5">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/just-favor" target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/ogbewe-favour-11740a367/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="size-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/just__favor/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
