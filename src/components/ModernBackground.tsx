"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function ModernBackground() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-900 dark:bg-black overflow-hidden">
            <ShootingStars />
            <StarsBackground />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent z-20 pointer-events-none" />
        </div>
    );
}
