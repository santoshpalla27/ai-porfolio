// src/components/3d/Scene3D.tsx
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

interface Scene3DProps {
  children: React.ReactNode
  camera?: { position: [number, number, number]; fov?: number }
  controls?: boolean
  className?: string
}

export default function Scene3D({ 
  children, 
  camera = { position: [0, 0, 5], fov: 75 },
  controls = false,
  className = "w-full h-full"
}: Scene3DProps) {
  return (
    <Canvas className={className}>
      <PerspectiveCamera makeDefault {...camera} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        {children}
      </Suspense>
      {controls && <OrbitControls enableZoom={true} enablePan={true} />}
    </Canvas>
  )
}