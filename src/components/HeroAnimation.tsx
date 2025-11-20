'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Globe, Cpu, Shield, Terminal, Code2, GitBranch } from 'lucide-react';

export default function HeroAnimation() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Central Cloud */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10"
            >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 backdrop-blur-sm border border-white/20">
                    <Cloud size={64} className="text-white" />
                </div>

                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </motion.div>

            {/* Orbiting Elements */}
            <OrbitingIcon icon={Server} delay={0} radius={120} duration={20} color="text-green-500" bg="bg-green-500/10" />
            <OrbitingIcon icon={Database} delay={2} radius={120} duration={20} color="text-orange-500" bg="bg-orange-500/10" />
            <OrbitingIcon icon={Terminal} delay={4} radius={120} duration={20} color="text-gray-500" bg="bg-gray-500/10" />

            <OrbitingIcon icon={Code2} delay={1} radius={180} duration={25} reverse color="text-blue-500" bg="bg-blue-500/10" />
            <OrbitingIcon icon={GitBranch} delay={3} radius={180} duration={25} reverse color="text-red-500" bg="bg-red-500/10" />
            <OrbitingIcon icon={Shield} delay={5} radius={180} duration={25} reverse color="text-purple-500" bg="bg-purple-500/10" />

            {/* Floating Particles */}
            {isMounted && [...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                    initial={{
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>
    );
}

function OrbitingIcon({ icon: Icon, delay, radius, duration, reverse = false, color, bg }: any) {
    return (
        <motion.div
            className="absolute"
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay * (duration / 6) }}
        >
            <motion.div
                style={{ translateY: -radius }}
                className={`p-3 rounded-2xl ${bg} backdrop-blur-md border border-white/10 shadow-lg`}
            >
                <motion.div
                    animate={{ rotate: reverse ? 360 : -360 }}
                    transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay * (duration / 6) }}
                >
                    <Icon size={24} className={color} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
