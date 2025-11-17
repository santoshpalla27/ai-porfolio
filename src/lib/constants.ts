// src/lib/constants.ts
import { Project, Skill, Experience, SocialLink } from '@/types'

export const SITE_CONFIG = {
  name: 'DevOps Engineer',
  title: 'Senior DevOps Engineer | Cloud Architecture | CI/CD Expert',
  description: 'Specialized in building scalable infrastructure, automating deployments, and optimizing cloud resources.',
  url: 'https://yourportfolio.com',
  email: 'contact@yourportfolio.com',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:contact@yourportfolio.com',
    icon: 'mail'
  }
]

export const SKILLS: Skill[] = [
  // DevOps Tools
  { name: 'Docker', icon: 'docker', category: 'devops', level: 95 },
  { name: 'Kubernetes', icon: 'kubernetes', category: 'devops', level: 90 },
  { name: 'Linux', icon: 'linux', category: 'devops', level: 95 },
  { name: 'Git', icon: 'git', category: 'devops', level: 95 },
  
  // Cloud Platforms
  { name: 'AWS', icon: 'aws', category: 'cloud', level: 90 },
  { name: 'Azure', icon: 'azure', category: 'cloud', level: 80 },
  { name: 'GCP', icon: 'gcp', category: 'cloud', level: 75 },
  
  // CI/CD
  { name: 'Jenkins', icon: 'jenkins', category: 'cicd', level: 90 },
  { name: 'GitLab CI', icon: 'gitlab', category: 'cicd', level: 85 },
  { name: 'GitHub Actions', icon: 'github', category: 'cicd', level: 90 },
  { name: 'ArgoCD', icon: 'argocd', category: 'cicd', level: 85 },
  
  // IaC
  { name: 'Terraform', icon: 'terraform', category: 'iac', level: 90 },
  { name: 'Ansible', icon: 'ansible', category: 'iac', level: 85 },
  { name: 'Helm', icon: 'helm', category: 'iac', level: 85 },
  
  // Monitoring
  { name: 'Prometheus', icon: 'prometheus', category: 'monitoring', level: 90 },
  { name: 'Grafana', icon: 'grafana', category: 'monitoring', level: 90 },
  { name: 'ELK Stack', icon: 'elastic', category: 'monitoring', level: 80 },
  
  // Additional
  { name: 'NGINX', icon: 'nginx', category: 'devops', level: 85 },
  { name: 'Redis', icon: 'redis', category: 'devops', level: 80 },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Multi-Cloud Kubernetes Platform',
    description: 'Designed and implemented a multi-cloud Kubernetes infrastructure spanning AWS, Azure, and GCP with automated failover and disaster recovery.',
    image: '/projects/k8s-platform.png',
    tags: ['Kubernetes', 'AWS', 'Azure', 'Terraform', 'ArgoCD'],
    github: 'https://github.com/yourusername/k8s-platform',
    architecture: '/projects/k8s-arch.png'
  },
  {
    id: '2',
    title: 'CI/CD Pipeline Automation',
    description: 'Built enterprise-grade CI/CD pipelines reducing deployment time by 70% with zero-downtime deployments using GitOps principles.',
    image: '/projects/cicd.png',
    tags: ['Jenkins', 'GitLab CI', 'Docker', 'Helm', 'ArgoCD'],
    github: 'https://github.com/yourusername/cicd-automation',
    live: 'https://demo.cicd.com'
  },
  {
    id: '3',
    title: 'Infrastructure as Code Framework',
    description: 'Created reusable Terraform modules for AWS infrastructure provisioning, enabling teams to deploy environments in minutes.',
    image: '/projects/iac.png',
    tags: ['Terraform', 'AWS', 'Python', 'Bash'],
    github: 'https://github.com/yourusername/terraform-modules'
  },
  {
    id: '4',
    title: 'Observability Stack',
    description: 'Implemented comprehensive monitoring and logging solution using Prometheus, Grafana, and ELK stack with custom dashboards and alerts.',
    image: '/projects/monitoring.png',
    tags: ['Prometheus', 'Grafana', 'ElasticSearch', 'Kibana'],
    github: 'https://github.com/yourusername/observability-stack'
  },
  {
    id: '5',
    title: 'Container Security Pipeline',
    description: 'Developed automated security scanning pipeline for container images with vulnerability detection and compliance checks.',
    image: '/projects/security.png',
    tags: ['Docker', 'Trivy', 'Falco', 'Jenkins'],
    github: 'https://github.com/yourusername/container-security'
  },
  {
    id: '6',
    title: 'Serverless Deployment Platform',
    description: 'Built serverless application deployment platform on AWS Lambda with automated scaling and cost optimization.',
    image: '/projects/serverless.png',
    tags: ['AWS Lambda', 'API Gateway', 'Terraform', 'CloudFormation'],
    github: 'https://github.com/yourusername/serverless-platform'
  }
]

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Tech Giant Corp',
    position: 'Senior DevOps Engineer',
    duration: '2021 - Present',
    description: [
      'Led migration of monolithic applications to microservices architecture on Kubernetes',
      'Reduced infrastructure costs by 40% through optimization and auto-scaling implementations',
      'Implemented GitOps workflow using ArgoCD improving deployment frequency by 300%',
      'Mentored team of 5 junior DevOps engineers'
    ],
    technologies: ['Kubernetes', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus']
  },
  {
    id: '2',
    company: 'Cloud Solutions Inc',
    position: 'DevOps Engineer',
    duration: '2019 - 2021',
    description: [
      'Designed and implemented CI/CD pipelines for 20+ microservices',
      'Automated infrastructure provisioning using Terraform and Ansible',
      'Implemented comprehensive monitoring solution with Prometheus and Grafana',
      'Achieved 99.9% uptime for production services'
    ],
    technologies: ['Jenkins', 'Docker', 'AWS', 'Terraform', 'Grafana']
  },
  {
    id: '3',
    company: 'StartUp Ventures',
    position: 'Junior DevOps Engineer',
    duration: '2017 - 2019',
    description: [
      'Built and maintained CI/CD pipelines using Jenkins and GitLab CI',
      'Managed AWS infrastructure and implemented backup strategies',
      'Created monitoring dashboards and alert systems',
      'Automated deployment processes reducing manual effort by 80%'
    ],
    technologies: ['Jenkins', 'AWS', 'Docker', 'GitLab', 'Bash']
  }
]

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]