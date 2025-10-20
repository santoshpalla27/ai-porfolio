import { motion } from 'framer-motion';

const SkillsSection = () => {
  const devopsSkills = [
    { name: 'CI/CD Pipelines', level: 95 },
    { name: 'Docker & Kubernetes', level: 90 },
    { name: 'AWS/Azure/GCP', level: 85 },
    { name: 'Terraform', level: 90 },
    { name: 'Jenkins', level: 85 },
    { name: 'Ansible', level: 80 },
    { name: 'Prometheus & Grafana', level: 85 },
    { name: 'GitLab', level: 90 },
  ];

  const programmingSkills = [
    { name: 'Python', level: 85 },
    { name: 'Bash Scripting', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'Go', level: 70 },
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
            My <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">DevOps & Infrastructure</h3>
              {devopsSkills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Programming & Scripting</h3>
              {programmingSkills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
              
              <h3 className="text-2xl font-semibold mt-10 mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['Linux', 'Git', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 
                  'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 
                  'New Relic', 'Datadog', 'Helm', 'Vault', 'Consul'].map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;