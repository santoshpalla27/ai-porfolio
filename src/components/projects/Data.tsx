// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
    {
    // --- NEW KUBERNETES MULTI-CLOUD PROJECT ---
    title: 'Kubernetes Multi-Cloud Deployment',
    description:
      'Designed and implemented a multi-cloud Kubernetes deployment strategy using GitOps principles for a fintech client. Achieved 60% faster deployment times and improved system reliability.',
    techStack: [
      'Kubernetes',
      'Helm',
      'ArgoCD',
      'AWS',
      'GCP',
      'Terraform',
      'Docker',
      'GitOps',
    ],
    date: 'September 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/k8s-multicloud',
      },
    ],
    images: [
      { src: '/projects/k8s-architecture.png', alt: 'Kubernetes Multi-Cloud Architecture Diagram' },
      { src: '/projects/argocd-dashboard.png', alt: 'ArgoCD GitOps Dashboard' },
    ],
  },
  {
    title: 'Infrastructure Automation Suite',
    description:
      'Developed a comprehensive automation suite for infrastructure provisioning and management using Terraform and Ansible. Reduced manual provisioning time by 80% and eliminated configuration drift.',
    techStack: [
      'Terraform',
      'Ansible',
      'AWS',
      'Python',
      'Jenkins',
      'Docker',
      'CI/CD',
    ],
    date: 'August 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/infra-automation',
      },
    ],
    images: [
      { src: '/projects/terraform-iac.png', alt: 'Infrastructure as Code with Terraform' },
      { src: '/projects/ansible-playbook.png', alt: 'Ansible Playbook Execution' },
    ],
  },
  {
    title: 'CI/CD Pipeline for Microservices',
    description:
      'Built a scalable CI/CD pipeline for 30+ microservices with automated testing, deployment, and rollback capabilities. Improved deployment frequency by 4x and reduced failure rate by 70%.',
    techStack: [
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'GitLab',
      'Helm',
      'Nexus',
    ],
    date: 'July 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/cicd-microservices',
      },
    ],
    images: [
      { src: '/projects/cicd-pipeline.png', alt: 'CI/CD Pipeline Dashboard' },
      { src: '/projects/jenkins-pipeline.png', alt: 'Jenkins Pipeline Visualization' },
    ],
  },
  {
    title: 'Monitoring and Alerting Platform',
    description:
      'Implemented a comprehensive monitoring solution with custom dashboards and intelligent alerting for critical systems. Achieved 99.9% uptime visibility and reduced mean time to detection by 65%.',
    techStack: [
      'Prometheus',
      'Grafana',
      'AlertManager',
      'ELK',
      'Python',
      'Kubernetes',
      'CloudWatch',
    ],
    date: 'June 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/monitoring-platform',
      },
    ],
    images: [
      { src: '/projects/prometheus-dashboard.png', alt: 'Prometheus Metrics Dashboard' },
      { src: '/projects/grafana-dashboard.png', alt: 'Grafana Monitoring Dashboard' },
    ],
  },
  {
    title: 'Cloud Migration Framework',
    description:
      'Developed a framework for migrating legacy applications to cloud platforms with zero downtime and rollback capabilities. Successfully migrated 25+ applications to AWS with 99.99% uptime.',
    techStack: [
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Ansible',
      'Migration Tools',
      'Load Balancer',
    ],
    date: 'May 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/cloud-migration',
      },
    ],
    images: [
      { src: '/projects/cloud-migration-arch.png', alt: 'Cloud Migration Architecture' },
      { src: '/projects/aws-migration.png', alt: 'AWS Migration Dashboard' },
    ],
  },
  {
    title: 'Security Scanning Pipeline',
    description:
      'Integrated automated security scanning into CI/CD pipelines to detect vulnerabilities before deployment. Reduced security incidents by 85% and improved compliance by 100%.',
    techStack: [
      'Jenkins',
      'SonarQube',
      'OWASP ZAP',
      'Trivy',
      'Docker',
      'Kubernetes',
      'Vault',
    ],
    date: 'April 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/santoshreddy/security-pipeline',
      },
    ],
    images: [
      { src: '/projects/security-dashboard.png', alt: 'Security Scanning Dashboard' },
      { src: '/projects/vulnerability-report.png', alt: 'Vulnerability Scan Report' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
   {
    category: 'Kubernetes & Cloud',
    title: 'Kubernetes Multi-Cloud Deployment',
    src: '/projects/k8s-preview.png',
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'Kubernetes Multi-Cloud Deployment' }} />
    ),
  },
  {
    category: 'Infrastructure Automation',
    title: 'Infrastructure Automation Suite',
    src: '/projects/infra-automation-preview.png',
    content: (
      <ProjectContent project={{ title: 'Infrastructure Automation Suite' }} />
    ),
  },
  {
    category: 'CI/CD & Pipeline',
    title: 'CI/CD Pipeline for Microservices',
    src: '/projects/cicd-preview.png',
    content: (
      <ProjectContent project={{ title: 'CI/CD Pipeline for Microservices' }} />
    ),
  },
  {
    category: 'Monitoring & Observability',
    title: 'Monitoring and Alerting Platform',
    src: '/projects/monitoring-preview.png',
    content: (
      <ProjectContent project={{ title: 'Monitoring and Alerting Platform' }} />
    ),
  },
  {
    category: 'Cloud Migration',
    title: 'Cloud Migration Framework',
    src: '/projects/cloud-migration-preview.png',
    content: (
      <ProjectContent project={{ title: 'Cloud Migration Framework' }} />
    ),
  },
  {
    category: 'Security & Compliance',
    title: 'Security Scanning Pipeline',
    src: '/projects/security-preview.png',
    content: (
      <ProjectContent project={{ title: 'Security Scanning Pipeline' }} />
    ),
  },
];