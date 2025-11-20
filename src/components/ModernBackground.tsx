"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function ModernBackground() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black" />;
    }

    const isDark = theme === 'dark' || resolvedTheme === 'dark';

    if (!isDark) {
        return <BackgroundGrid />;
    }

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-900 dark:bg-black overflow-hidden">
            <ShootingStars />
            <StarsBackground />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent z-20 pointer-events-none" />
        </div>
    );
}
