"use client"

import { motion } from "framer-motion"
import { Mic, Zap, BarChart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Voice Recognition",
      description: "99.9% Accuracy Rate",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered",
      description: "Smart Response System",
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "Analytics",
      description: "Real-time insights",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Start <span className="text-blue-600">Voice-Enabling</span> Your Business Today
          </h2>
          <p className="text-gray-600">
            Transform your applications with cutting-edge voice technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}