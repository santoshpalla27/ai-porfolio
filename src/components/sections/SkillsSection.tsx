'use client';

import { motion } from 'framer-motion';

const skills = [
    { category: "Cloud & Infrastructure", items: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible"] },
    { category: "Containerization", items: ["Docker", "Kubernetes", "Helm", "EKS", "ECS"] },
    { category: "CI/CD & DevOps", items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "CircleCI"] },
    { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"] },
    { category: "Scripting & Backend", items: ["Python", "Bash", "Go", "Node.js", "SQL"] },
    { category: "Tools & Others", items: ["Git", "Jira", "Linux", "Nginx", "Networking"] }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-colors shadow-sm"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(item => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
