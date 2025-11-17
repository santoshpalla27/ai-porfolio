// src/types/index.ts
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  architecture?: string
}

export interface Skill {
  name: string
  icon: string
  category: 'devops' | 'cloud' | 'cicd' | 'monitoring' | 'iac'
  level: number
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
  logo?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}