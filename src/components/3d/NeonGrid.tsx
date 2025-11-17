// src/components/3d/NeonGrid.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NeonGrid() {
  const gridRef = useRef(null)

  useFrame((state) => {
    if (gridRef.current) {
      // @ts-ignore
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 2
    }
  })

  return (
    <group ref={gridRef}>
      {/* Grid lines in X direction */}
      {Array.from({ length: 21 }).map((_, i) => (
        <mesh 
          key={`x-${i}`} 
          position={[-10 + i, 0, 0]} 
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.01, 0.01, 20, 8]} />
          <meshStandardMaterial 
            color="#00f5ff" 
            emissive="#00f5ff" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Grid lines in Z direction */}
      {Array.from({ length: 21 }).map((_, i) => (
        <mesh 
          key={`z-${i}`} 
          position={[0, 0, -10 + i]} 
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.01, 0.01, 20, 8]} />
          <meshStandardMaterial 
            color="#00f5ff" 
            emissive="#00f5ff" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}