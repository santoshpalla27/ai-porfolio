import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead DevOps initiatives for multiple product teams, implementing CI/CD pipelines and cloud infrastructure optimizations.',
      achievements: [
        'Reduced deployment time by 60% through optimized CI/CD pipelines',
        'Improved system reliability with 99.9% uptime',
        'Implemented Infrastructure as Code practices using Terraform'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Innovations Ltd',
      period: '2020 - 2022',
      description: 'Managed containerized applications on Kubernetes and implemented monitoring solutions.',
      achievements: [
        'Deployed and managed 20+ microservices on Kubernetes',
        'Implemented comprehensive monitoring with Prometheus and Grafana',
        'Automated infrastructure provisioning with Ansible'
      ]
    },
    {
      title: 'Infrastructure Engineer',
      company: 'Data Systems Co.',
      period: '2018 - 2020',
      description: 'Maintained large-scale infrastructure and implemented automation scripts.',
      achievements: [
        'Maintained 99.5% uptime for critical systems',
        'Automated routine tasks reducing manual work by 70%',
        'Implemented backup and disaster recovery procedures'
      ]
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
            Work <span className="text-blue-600">Experience</span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company} • {exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
                <ul className="mt-3 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;