"use client"

import Link from "next/link"
import { HiMenu } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur relative">
      <div className="container mx-auto h-16 px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="#hero" className="font-bold text-lg md:text-xl">
            MY-PORTFOLIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs md:text-sm font-medium hover:text-primary transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <HiMenu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/80 backdrop-blur border-l border-border/50 w-80">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 px-2 border-b border-border/20">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                  </div>
                  
                  {/* Navigation Links */}
                  <nav className="flex-1 py-8">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent/50 hover:text-primary transition-all duration-200 group"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-colors" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  
                  {/* Footer */}
                  <div className="border-t border-border/20 py-6 px-4">
                    <p className="text-xs text-muted-foreground text-center">
                      © 2024 Favour Ogbewe
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Theme Toggle - Positioned at extreme right edge */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
    </header>
  )
}
