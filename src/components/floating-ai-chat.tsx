'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { Button } from './ui/button';
import { Send, MessageCircle, X } from 'lucide-react';
import ChatMessageContent from './chat/chat-message-content';
import { ChatBubble, ChatBubbleMessage } from './ui/chat/chat-bubble';

const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    if (!isAnimating) {
      setIsOpen(!isOpen);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          onClick={toggleChat}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 w-full max-w-md h-[70vh] flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <h3 className="font-semibold">Santosh's AI Assistant</h3>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center p-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                    <MessageCircle className="text-blue-600 dark:text-blue-400" size={32} />
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Ask me anything about DevOps!</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm Santosh Reddy, a DevOps Engineer. Ask me about my experience, skills, projects, or DevOps best practices.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-tr-none' 
                            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                        }`}
                      >
                        <ChatMessageContent 
                          message={message} 
                          isLast={false} 
                          isLoading={false} 
                          reload={() => Promise.resolve(null)} 
                        />
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about DevOps, infrastructure, CI/CD..."
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="bg-blue-600 hover:bg-blue-700 rounded-full"
                  disabled={isLoading}
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAIChat;