'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
    {
        title: "Cloud Infrastructure Migration",
        description: "Migrated a legacy monolithic application to a microservices architecture on AWS using EKS, Terraform, and Helm charts.",
        tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Automated CI/CD Pipeline",
        description: "Designed and implemented a robust CI/CD pipeline using Jenkins and GitHub Actions, reducing deployment time by 60%.",
        tags: ["Jenkins", "GitHub Actions", "Groovy", "Bash"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Serverless Data Processing",
        description: "Built a serverless data processing pipeline using AWS Lambda, S3, and DynamoDB to handle real-time analytics.",
        tags: ["AWS Lambda", "Python", "DynamoDB", "Serverless"],
        links: { demo: "#", github: "#" }
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my expertise in cloud architecture and automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                                {/* Placeholder for project image */}
                                <span className="text-4xl">🚀</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="sm" className="w-full gap-2">
                                        <Github size={16} /> Code
                                    </Button>
                                    <Button size="sm" className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                                        <ExternalLink size={16} /> Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
