'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Message = {
    id: string;
    role: 'user' | 'ai';
    content: string | React.ReactNode;
    timestamp: Date;
};

const responses = {
    default: "I'm not sure about that, but I can tell you about my DevOps skills, projects, or experience!",
    hello: "Hello! I'm Santosh's AI assistant. How can I help you today?",
    me: "I'm Santosh Reddy, a DevOps Engineer passionate about automating infrastructure and optimizing CI/CD pipelines. I love working with cloud technologies and solving complex deployment challenges.",
    projects: (
        <div className="space-y-2">
            <p>Here are some key projects I've worked on:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cloud Migration:</strong> Migrated legacy on-premise applications to AWS using Terraform and Docker.</li>
                <li><strong>CI/CD Pipeline Optimization:</strong> Reduced build times by 40% using Jenkins shared libraries and parallel execution.</li>
                <li><strong>Kubernetes Orchestration:</strong> Managed multi-cluster Kubernetes environments for high availability microservices.</li>
            </ul>
        </div>
    ),
    skills: (
        <div className="space-y-2">
            <p>My technical toolkit includes:</p>
            <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Git', 'Linux', 'Python', 'Bash', 'Prometheus', 'Grafana'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    ),
    stack: "My daily drivers are AWS for cloud, Terraform for IaC, Kubernetes for orchestration, and Jenkins/GitHub Actions for CI/CD.",
    contact: "You can reach me via email at santoshpalla2002@gmail.com or connect with me on LinkedIn.",
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 'init',
                role: 'ai',
                content: responses.hello,
                timestamp: new Date()
            }]);
        }
    }, []);

    const generateResponse = async (query: string) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        const lowerQuery = query.toLowerCase();
        let responseContent: string | React.ReactNode = responses.default;

        if (lowerQuery.includes('who') || lowerQuery.includes('me') || lowerQuery.includes('about')) responseContent = responses.me;
        else if (lowerQuery.includes('project') || lowerQuery.includes('work')) responseContent = responses.projects;
        else if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack')) responseContent = responses.skills;
        else if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) responseContent = responses.contact;
        else if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) responseContent = responses.hello;

        const aiMessage: Message = {
            id: Date.now().toString(),
            role: 'ai',
            content: responseContent,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
    };

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        await generateResponse(input);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/80"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold">Santosh AI</h3>
                                    <p className="text-[10px] opacity-80">Ask me anything!</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-1 hover:bg-white/20 transition-colors"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-none'
                                                : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-tl-none'
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white dark:bg-neutral-800 px-4 py-3 rounded-2xl rounded-tl-none border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="border-t border-neutral-200 dark:border-neutral-800 p-3 bg-white/50 dark:bg-neutral-900/50">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2.5 pr-12 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 cursor-pointer"
            >
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-neutral-900"></span>
                </span>
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
