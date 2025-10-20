import { motion } from 'framer-motion';

const AboutSection = () => {
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
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm Santosh Reddy, a DevOps Engineer with expertise in designing, implementing, 
                and maintaining scalable infrastructure solutions. With a strong background 
                in cloud technologies, automation, and system reliability, I help organizations 
                achieve faster deployment cycles and higher availability.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My passion lies in bridging the gap between development and operations, 
                ensuring seamless delivery of high-quality software products. I specialize 
                in containerization, CI/CD pipelines, infrastructure as code, and cloud 
                architecture solutions.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not optimizing infrastructure, I enjoy contributing to open-source 
                projects and staying updated with the latest DevOps trends and technologies.
              </p>
            </div>
            
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500">
              About Image
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">DevOps Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in automating everything possible, measuring what matters, 
                and fostering a culture of collaboration and continuous improvement.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Core Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Infrastructure as Code, CI/CD, Containerization, Monitoring & Alerting, 
                Cloud Architecture, Security & Compliance.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To build resilient, scalable infrastructure that enables businesses 
                to focus on innovation rather than infrastructure concerns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;