import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool shows a list of Santosh Reddy\'s skills.',
  parameters: z.object({}),
  execute: async () => {
    return "You can see all Santosh's skills above.";
  },
});