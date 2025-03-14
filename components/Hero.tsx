"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mic } from "lucide-react"

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#f6f6ff] to-[#ede9fa] overflow-hidden">
      <div className="container mx-auto px-4 pt-60 pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-semibold text-primary mb-6">
              Revolutionize<br />
              <span className="text-black font-[400]">Interaction with AI<br />
              Voice</span>
            </h1>
            <p className="text-gray-500 mb-8 text-lg font-[400]">
              Your AI-powered voice agent that seamlessly integrates into any
              system – enabling natural, human-like conversations.
            </p>
            <div className="flex space-x-4">
              <Button variant="default" size="lg">Try for Free</Button>
              <Button variant="outline" size="lg">
                Request a Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">AI Voice Assistant</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-gray-600">How can I help you today?</div>
                <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[80%] ml-auto">
                  I need to book a appointment.
                </div>
                <div className="text-gray-600">
                  I can help with that. What date and time works best?
                </div>
                
                <div className="flex items-center justify-center p-4 border rounded-lg border-gray-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Tap to speak</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}