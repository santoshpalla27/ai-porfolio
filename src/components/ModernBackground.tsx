"use client";
import React, { useEffect, useState } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function ModernBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black" />;
    }

    return <BackgroundGrid />;
}
