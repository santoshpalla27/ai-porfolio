import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description: 'This tool shows detailed work experience information of Santosh Reddy.',
  parameters: z.object({}),
  execute: async () => {
    return `Santosh Reddy's Work Experience:

Senior DevOps Engineer | Tech Solutions Inc. | 2022 - Present
- Lead DevOps initiatives for multiple product teams
- Implemented CI/CD pipelines and cloud infrastructure optimizations
- Reduced deployment time by 60% and achieved 99.9% system uptime
- Implemented Infrastructure as Code practices using Terraform

DevOps Engineer | Cloud Innovations Ltd | 2020 - 2022
- Managed containerized applications on Kubernetes
- Implemented monitoring solutions with Prometheus and Grafana
- Automated infrastructure provisioning with Ansible
- Deployed and managed over 20 microservices on Kubernetes

Infrastructure Engineer | Data Systems Co. | 2018 - 2020
- Maintained large-scale infrastructure systems
- Implemented automation scripts reducing manual work by 70%
- Established backup and disaster recovery procedures
- Achieved 99.5% uptime for critical systems
`;
  },
});