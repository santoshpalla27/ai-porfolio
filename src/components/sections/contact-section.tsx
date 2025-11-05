'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { 
  Mail, Phone, MapPin, Send, 
  Github, Linkedin, Twitter, MessageSquare 
} from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'santosh@example.com',
      href: 'mailto:santosh@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      label: 'Response Time',
      value: '< 24 hours',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-32 px-4 max-w-7xl mx-auto">
      <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a project in mind? Looking for DevOps expertise? 
              Or just want to say hi? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;