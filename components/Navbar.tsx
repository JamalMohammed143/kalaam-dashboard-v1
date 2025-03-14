"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mic } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white backdrop-blur-sm z-50 border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
           <Image src="/images/ilmux-blue-logo.webp" width="150" height="100" alt={""} />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Use Cases</a>
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</a>

          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </div>
    </motion.nav>
  )
}