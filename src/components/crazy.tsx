'use client';

import React from 'react';
import { Server } from 'lucide-react';
const Crazy = () => {
  return (
    <div className="mx-auto w-full text-center">
      <div className="mb-4">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Most Ambitious Project
        </h2>
      </div>
      <div className="flex justify-center items-center p-6 bg-accent rounded-xl">
        <Server className="h-20 w-20 text-primary" />
      </div>
      <p className="text-muted-foreground mt-4">
        Building automated infrastructure that essentially runs itself.
      </p>
    </div>
  );
};

export default Crazy;