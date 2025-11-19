'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-6 opacity-20 blur-xl"></div>
                            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl">
                                <Image
                                    src="/anime-devops-avatar.png"
                                    alt="Santosh Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            About Me
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            I'm a passionate DevOps Engineer with a knack for automating infrastructure and optimizing CI/CD pipelines. With a strong background in cloud technologies, I help organizations build scalable, reliable, and secure systems.
                        </p>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            My journey started with a curiosity for how things work under the hood, which led me to explore Linux, networking, and eventually the vast world of Cloud Computing. I believe in the power of "Infrastructure as Code" and strive to make deployments as boring (predictable) as possible.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</span>
                                <span className="text-sm text-neutral-500">Years Experience</span>
                            </div>
                            <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-800"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</span>
                                <span className="text-sm text-neutral-500">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
