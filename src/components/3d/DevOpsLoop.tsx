// src/components/3d/DevOpsLoop.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { MeshDistortMaterial } from '@react-three/drei'

export default function DevOpsLoop() {
  const torusRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      torusRef.current.rotation.y += 0.01
      torusRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group>
      {/* Outer ring */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <MeshDistortMaterial 
          color="#0070f3" 
          attach="material" 
          distort={0.5} 
          speed={2} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Inner ring */}
      <mesh position={[0, 0, 0.5]}>
        <torusGeometry args={[1.5, 0.2, 16, 100]} />
        <MeshDistortMaterial 
          color="#00f5ff" 
          attach="material" 
          distort={0.3} 
          speed={1.5} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  )
}