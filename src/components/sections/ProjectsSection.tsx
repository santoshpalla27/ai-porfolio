'use client';

import { motion } from 'framer-motion';
import { Github, FileText, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
    {
        title: "Cloud Infrastructure Migration",
        description: "A complete migration of legacy monolithic applications to a microservices architecture on AWS. Implemented EKS for orchestration and Terraform for IaC, resulting in 99.99% uptime.",
        tags: ["AWS EKS", "Terraform", "Helm", "Docker"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        links: {
            github: "#",
            docs: "#"
        }
    },
    {
        title: "DevSecOps Pipeline Automation",
        description: "Designed a robust CI/CD pipeline integrating automated security scanning (SAST/DAST), container signing, and compliance checks, reducing deployment time by 60%.",
        tags: ["Jenkins", "GitHub Actions", "Trivy", "Python"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
        links: {
            github: "#",
            docs: "#"
        }
    },
    {
        title: "Serverless Data Lake",
        description: "Architected a scalable serverless data lake using AWS Lambda, S3, and Glue. Processes terabytes of real-time data for analytics dashboards with minimal latency.",
        tags: ["AWS Lambda", "S3", "DynamoDB", "Node.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        links: {
            github: "#",
            docs: "#"
        }
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2"></div>
                <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Exploring the frontiers of cloud computing and automation.
                        Here are some of the complex systems I've engineered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Button
                        variant="outline"
                        className="w-full rounded-xl border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 gap-2 transition-all"
                        asChild
                    >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                            <span>Source Code</span>
                        </a>
                    </Button>

                    <Button
                        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg shadow-blue-500/20 transition-all"
                        asChild
                    >
                        <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                            <FileText size={18} />
                            <span>Architecture & Docs</span>
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
