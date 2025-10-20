'use client';

import React from 'react';
const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          🚀 Beyond the Code - My Tech Life
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          (Open Source, Communities, and Continuous Learning)
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          When I'm not architecting infrastructure, I'm contributing to open-source DevOps tools and platforms. I've contributed to projects like Kubernetes, Terraform, and Prometheus, always looking to improve system reliability and deployment practices.
        </p>
        <p>
          I'm an active member of several tech communities and often speak at cloud meetups and DevOps conferences. Sharing knowledge and learning from other engineers is crucial for staying ahead in this rapidly evolving field.
        </p>
        <p>
          I'm passionate about mentoring junior engineers and helping them navigate their DevOps journey. Whether it's explaining CI/CD best practices or discussing infrastructure architecture, I enjoy fostering the next generation of DevOps professionals.
        </p>
        <p>
          Outside of work, I enjoy reading technical books about system design, cloud architecture, and emerging technologies in the DevOps space. I'm always looking for the next big thing that will shape the future of infrastructure.
        </p>
        <p>
          I also participate in hackathons and DevOps challenges, where I can experiment with new tools and architectures in a competitive environment. It keeps my skills sharp and introduces me to innovative approaches.
        </p>
      </div>
    </div>
  );
};

export default Sports;