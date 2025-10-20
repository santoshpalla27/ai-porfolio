import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool provides the contact information of Santosh Reddy. Use this when someone asks for the contact information.',
  parameters: z.object({}),
  execute: async () => {
    return "You can see Santosh's contact information above.";
  },
});
