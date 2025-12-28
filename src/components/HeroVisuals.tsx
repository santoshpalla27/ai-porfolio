
import React from 'react';
import Terminal from './Terminal';
import FloatingBadge from './FloatingBadge';
import { Server, Shield } from 'lucide-react';

const HeroVisuals: React.FC = () => {
    return (
        <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none">
            {/* Enhanced Glows */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[60px] sm:blur-[100px] dark:bg-indigo-500/20"></div>
            <div className="absolute left-1/3 top-1/4 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[80px] sm:blur-[120px]"></div>

            <div className="relative p-2 sm:p-0">
                <Terminal />

                {/* Badges */}
                <FloatingBadge
                    icon={Server}
                    title="Uptime"
                    value="99.99%"
                    valueColor="text-green-600 dark:text-green-400"
                    bgColor="from-orange-400 to-red-500"
                    className="top-[-20px] -right-2 sm:-right-8 lg:right-0 xl:-right-12 animate-float-delayed"
                />

                <FloatingBadge
                    icon={Shield}
                    title="Security"
                    value="Automated"
                    valueColor="text-indigo-600 dark:text-indigo-400"
                    bgColor="from-blue-400 to-indigo-500"
                    className="bottom-[-20px] -left-2 sm:-left-8 lg:-left-4 xl:-left-12 animate-float"
                    delay="1.5s"
                />
            </div>
        </div>
    );
};

export default HeroVisuals;
