'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, Copy, Check, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isCopied, setIsCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('santosh@example.com');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending or construct mailto
        const subject = `Portfolio Contact from ${formState.name}`;
        const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
        const mailtoLink = `mailto:santosh@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat about the latest in DevOps?
                        I'm always open to new opportunities and interesting conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg flex flex-col justify-between"
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Fill out the form or reach out directly via email or social media.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Email</p>
                                        <div className="flex items-center gap-2 group">
                                            <a href="mailto:santosh@example.com" className="text-lg font-semibold hover:text-blue-600 transition-colors">
                                                santosh@example.com
                                            </a>
                                            <button
                                                onClick={handleCopyEmail}
                                                className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-all"
                                                title="Copy Email"
                                            >
                                                {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Location</p>
                                        <p className="text-lg font-semibold">Hyderabad, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">Follow me on</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "#", color: "hover:text-black dark:hover:text-white" },
                                    { icon: Linkedin, href: "#", color: "hover:text-[#0077b5]" },
                                    { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send size={18} />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
