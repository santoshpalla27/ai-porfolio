'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200 dark:border-neutral-800 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                        I'm currently available for freelance projects and full-time opportunities. If you're interested in working together or just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" className="w-full md:w-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base">
                            <Mail size={20} /> santosh@example.com
                        </Button>
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-2 rounded-full px-8 h-12 text-base">
                            <Linkedin size={20} /> LinkedIn
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-neutral-500">
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
