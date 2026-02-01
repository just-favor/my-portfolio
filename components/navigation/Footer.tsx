"use client"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/90 backdrop-blur py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
