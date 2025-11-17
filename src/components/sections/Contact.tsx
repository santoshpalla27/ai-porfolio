// src/components/sections/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Suspense, useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Scene3D from '@/components/3d/Scene3D'
import { fadeInUp, staggerContainer } from '@/components/animations/variants'

// 3D Envelope
function Envelope() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <meshStandardMaterial color="#0070f3" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Flap */}
      <mesh rotation={[0.5, 0, 0]} position={[0, 0.5, 0.15]}>
        <boxGeometry args={[1.5, 0.02, 0.4]} />
        <meshStandardMaterial color="#0af" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-900/50 to-dark-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 dark:bg-dark-700/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 dark:bg-dark-700/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-dark-700/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-dark-700/30 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  icon={<Send size={20} />}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & 3D */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* 3D Envelope */}
            <motion.div 
              className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-neon-cyan/20"
              variants={fadeInUp}
            >
              <Scene3D camera={{ position: [0, 0, 5] }} controls>
                <Suspense fallback={null}>
                  <Envelope />
                </Suspense>
              </Scene3D>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={fadeInUp}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Email</h4>
                    <a 
                      href="mailto:contact@example.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Phone</h4>
                    <a 
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}