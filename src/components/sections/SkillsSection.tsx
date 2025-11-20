'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    AwsIcon, DockerIcon, KubernetesIcon, TerraformIcon, ReactIcon, NextjsIcon,
    TypeScriptIcon, TailwindIcon, LinuxIcon, JenkinsIcon, GitIcon, AzureIcon,
    GCPIcon, AnsibleIcon, HelmIcon, GitLabIcon, CircleCIIcon, PrometheusIcon,
    GrafanaIcon, PythonIcon, GoIcon, NodeIcon, PostgresIcon, NginxIcon,
    ArgoCDIcon, ElasticIcon, DatadogIcon, JiraIcon, BashIcon, GithubActionsIcon,
    EKSIcon, ECSIcon, CloudWatchIcon
} from '@/components/Icons';
import { Cloud, Server, Database, Globe, Cpu, Shield, Terminal, Code2, GitBranch, Zap, Activity, Layout, Box, Layers, Command } from 'lucide-react';

const skills = [
    {
        category: "Cloud & Infrastructure",
        icon: Cloud,
        items: [
            { name: "AWS", icon: AwsIcon, color: "text-[#FF9900]" },
            { name: "Azure", icon: AzureIcon, color: "text-[#0078D4]" },
            { name: "Google Cloud", icon: GCPIcon, color: "text-[#4285F4]" },
            { name: "Terraform", icon: TerraformIcon, color: "text-[#7B42BC]" },
            { name: "Ansible", icon: AnsibleIcon, color: "text-[#EE0000]" }
        ]
    },
    {
        category: "Containerization",
        icon: Box,
        items: [
            { name: "Docker", icon: DockerIcon, color: "text-[#2496ED]" },
            { name: "Kubernetes", icon: KubernetesIcon, color: "text-[#326CE5]" },
            { name: "Helm", icon: HelmIcon, color: "text-[#0F1689]" },
            { name: "EKS", icon: EKSIcon, color: "text-[#FF9900]" },
            { name: "ECS", icon: ECSIcon, color: "text-[#FF9900]" }
        ]
    },
    {
        category: "CI/CD & DevOps",
        icon: GitBranch,
        items: [
            { name: "Jenkins", icon: JenkinsIcon, color: "text-[#D24939]" },
            { name: "GitHub Actions", icon: GithubActionsIcon, color: "text-[#2088FF]" },
            { name: "GitLab CI", icon: GitLabIcon, color: "text-[#FC6D26]" },
            { name: "ArgoCD", icon: ArgoCDIcon, color: "text-[#EF7B4D]" },
            { name: "CircleCI", icon: CircleCIIcon, color: "text-[#343434]" }
        ]
    },
    {
        category: "Monitoring & Logging",
        icon: Activity,
        items: [
            { name: "Prometheus", icon: PrometheusIcon, color: "text-[#E6522C]" },
            { name: "Grafana", icon: GrafanaIcon, color: "text-[#F46800]" },
            { name: "ELK Stack", icon: ElasticIcon, color: "text-[#005571]" },
            { name: "Datadog", icon: DatadogIcon, color: "text-[#632CA6]" },
            { name: "CloudWatch", icon: CloudWatchIcon, color: "text-[#FF9900]" }
        ]
    },
    {
        category: "Scripting & Backend",
        icon: Terminal,
        items: [
            { name: "Python", icon: PythonIcon, color: "text-[#3776AB]" },
            { name: "Bash", icon: BashIcon, color: "text-[#4EAA25]" },
            { name: "Go", icon: GoIcon, color: "text-[#00ADD8]" },
            { name: "Node.js", icon: NodeIcon, color: "text-[#339933]" },
            { name: "SQL", icon: PostgresIcon, color: "text-[#336791]" }
        ]
    },
    {
        category: "Tools & Others",
        icon: Command,
        items: [
            { name: "Git", icon: GitIcon, color: "text-[#F05032]" },
            { name: "Jira", icon: JiraIcon, color: "text-[#0052CC]" },
            { name: "Linux", icon: LinuxIcon, color: "text-[#FCC624]" },
            { name: "Nginx", icon: NginxIcon, color: "text-[#009639]" },
            { name: "Networking", icon: Globe, color: "text-[#2496ED]" }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Technical Arsenal
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                        A curated stack of modern technologies I use to build scalable, resilient, and automated infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <SpotlightCard key={index} index={index}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    <skillGroup.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                                    >
                                        <item.icon className={`w-5 h-5 ${item.color} transition-colors`} />
                                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpotlightCard({ children, index }: { children: React.ReactNode, index: number }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
