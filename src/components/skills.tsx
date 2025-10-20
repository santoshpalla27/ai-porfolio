'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Server, Code, BarChart3, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Cloud Platforms & Infrastructure',
      icon: <Server className="h-5 w-5" />,
      skills: [
        'AWS (EC2, S3, RDS, Lambda, ECS)',
        'Azure (VMs, AKS, Functions)',
        'Google Cloud Platform (Compute, GKE)',
        'Kubernetes & K8s Orchestration',
        'Docker & Containerization',
        'Infrastructure as Code (Terraform)',
        'Configuration Management (Ansible)',
        'CloudFormation',
        'Helm',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'CI/CD & DevOps Tools',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Jenkins',
        'GitLab CI/CD',
        'GitHub Actions',
        'CircleCI',
        'Travis CI',
        'ArgoCD',
        'Spinnaker',
        'TeamCity',
        'Bamboo',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Monitoring & Observability',
      icon: <BarChart3 className="h-5 w-5" />,
      skills: [
        'Prometheus',
        'Grafana',
        'ELK Stack (Elasticsearch, Logstash, Kibana)',
        'Datadog',
        'New Relic',
        'CloudWatch',
        'Splunk',
        'Jaeger',
        'Zipkin',
        'Fluentd',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Security & Compliance',
      icon: <Server className="h-5 w-5" />,
      skills: [
        'Vault',
        'Consul',
        'Terraform State Security',
        'Infrastructure Security',
        'Compliance Frameworks',
        'Secrets Management',
        'Vulnerability Scanning',
        'Policy as Code',
        'IAM & Access Control',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
    {
      category: 'Programming & Scripting',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'Bash/Shell Scripting',
        'Go',
        'PowerShell',
        'JavaScript',
        'YAML',
        'JSON',
        'HCL (HashiCorp Configuration Language)',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'System Architecture Design',
        'Collaboration & Communication',
        'Problem-Solving',
        'Continuous Improvement',
        'Incident Response',
        'Documentation',
        'Team Leadership',
      ],
      color: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none bg-transparent px-0 pb-12 text-black shadow-none dark:text-white">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            DevOps Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;