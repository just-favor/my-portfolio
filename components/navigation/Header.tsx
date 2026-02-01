"use client"

import Link from "next/link"
import { HiMenu } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Home", href: "/" },
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
          <Link href="/" className="font-bold text-xl">
            MY-PORTFOLIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition"
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
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
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
