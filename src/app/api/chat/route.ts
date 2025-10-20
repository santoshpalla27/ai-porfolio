import { createOpenAI } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getSkills } from './tools/getSkills';
import { getExperience } from './tools/getExperience';

// Create OpenAI-compatible client to work with OpenRouter/Qwen
const openrouter = createOpenAI({
  apiKey: process.env.QWEN_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  headers: {
    'HTTP-Referer': 'http://localhost:3000', // Add your website URL here
    'X-Title': 'Santosh DevOps Portfolio', // Add your app name here
  }
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    try {
      const result = await streamText({
        model: openrouter('qwen/qwen-2.5-72b-instruct:free'),
        messages,
        tools: [
          getProjects,
          getPresentation,
          getContact,
          getSkills,
          getExperience,
        ],
        maxSteps: 5,
      });

      return result.toDataStreamResponse();
    } catch (streamErr) {
      // If streaming fails, try with generateText
      console.log('Streaming failed, falling back to generateText:', streamErr.message);
      const fallbackResult = await generateText({
        model: openrouter('qwen/qwen-2.5-72b-instruct:free'),
        messages,
        tools: [
          getProjects,
          getPresentation,
          getContact,
          getSkills,
          getExperience,
        ],
        maxSteps: 5,
      });

      return new Response(JSON.stringify(fallbackResult), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (err) {
    console.error('Global error:', err);
    return new Response(String(err), { status: 500 });
  }
}
