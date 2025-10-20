import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Kubernetes Multi-Cloud Deployment',
      description: 'Designed and implemented a multi-cloud Kubernetes deployment strategy using GitOps principles for a fintech client.',
      technologies: ['Kubernetes', 'Helm', 'ArgoCD', 'AWS', 'GCP'],
      github: 'https://github.com/santoshreddy/k8s-multicloud',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Infrastructure Automation Suite',
      description: 'Developed a comprehensive automation suite for infrastructure provisioning and management using Terraform and Ansible.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Python'],
      github: 'https://github.com/santoshreddy/infra-automation',
      demo: 'https://demo.example.com'
    },
    {
      title: 'CI/CD Pipeline for Microservices',
      description: 'Built a scalable CI/CD pipeline for 30+ microservices with automated testing, deployment, and rollback capabilities.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Prometheus'],
      github: 'https://github.com/santoshreddy/cicd-microservices',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Monitoring and Alerting Platform',
      description: 'Implemented a comprehensive monitoring solution with custom dashboards and intelligent alerting for critical systems.',
      technologies: ['Prometheus', 'Grafana', 'AlertManager', 'ELK'],
      github: 'https://github.com/santoshreddy/monitoring-platform',
      demo: 'https://demo.example.com'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      GitHub Repository
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;