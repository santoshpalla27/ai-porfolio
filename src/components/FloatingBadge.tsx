
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingBadgeProps {
    icon: LucideIcon;
    title: string;
    value: string;
    valueColor?: string;
    bgColor: string;
    className?: string;
    delay?: string;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({
    icon: Icon,
    title,
    value,
    valueColor = "text-gray-700 dark:text-slate-400",
    bgColor,
    className = "",
    delay = "0s"
}) => {
    return (
        <div
            className={`glass-card absolute z-30 flex items-center gap-3 rounded-lg p-3 shadow-xl border-l-2 border-indigo-500/30 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md ${className}`}
            style={{ animationDelay: delay }}
        >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${bgColor} text-white shadow-lg`}>
                <Icon size={20} />
            </div>
            <div className="hidden sm:block">
                <div className="text-xs font-bold text-gray-900 dark:text-white">{title}</div>
                <div className={`text-[10px] font-medium ${valueColor}`}>{value}</div>
            </div>
        </div>
    );
};

export default FloatingBadge;
