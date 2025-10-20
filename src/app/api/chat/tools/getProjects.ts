import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Santosh Reddy",
  parameters: z.object({}),
  execute: async () => {
    return "Here are Santosh's projects above! Each project showcases different DevOps skills and technologies including cloud infrastructure, automation, and system reliability. If you have any specific questions about any of them, feel free to ask! 🚀";
  },
});