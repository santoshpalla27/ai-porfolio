import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Santosh Reddy. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      name: 'Santosh Reddy',
      role: 'DevOps Engineer',
      about: `I'm Santosh Reddy, a DevOps Engineer specializing in infrastructure automation, cloud technologies, CI/CD pipelines, and system reliability. I'm passionate about building scalable, efficient systems that support modern applications.`,
      funFact: "With expertise in cloud infrastructure, automation, and system reliability, I focus on bridging the gap between development and operations teams to achieve faster deployment cycles and higher availability.",
      contact: {
        email: 'santosh.reddy@example.com',
        location: 'Bangalore, India',
        linkedin: 'https://linkedin.com/in/santosh-reddy',
        github: 'https://github.com/santoshreddy',
      },
    };
  },
});