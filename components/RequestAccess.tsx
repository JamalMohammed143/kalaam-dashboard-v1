"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RequestAccess() {
  return (
    <section className="py-20 px-40">
      <div className="container mx-auto rounded-lg bg-gradient-to-br from-[#f6f6ff] to-[#ede9fa] overflow-hidden p-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl overflow-hidden"
          >
            <Image src="/images/chat-image.png" alt={""} width="400" height="500" className="w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl mb-4">Start <span className="text-primary">Voice-Enabling</span> Your Business Today</h2>
            <p className="mb-6 text-gray-500">Transform your applications with cutting-edge voice technology</p>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Request Access</h3>
              <p className="text-gray-600 mb-6">
                Be the first to experience ILM Kalam, your voice enabler.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reference (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join Waitlist
                </Button>

                <p className="text-xs text-center text-gray-500">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}