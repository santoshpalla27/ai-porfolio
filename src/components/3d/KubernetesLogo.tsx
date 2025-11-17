// src/components/3d/KubernetesLogo.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Text } from '@react-three/drei'

export default function KubernetesLogo() {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (groupRef.current) {
      // @ts-ignore
      groupRef.current.rotation.y += 0.005
      // @ts-ignore
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Center hexagon */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.2, 6]} />
        <meshStandardMaterial color="#326ce5" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Spokes */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh 
          key={i}
          position={[
            Math.cos((i * Math.PI) / 4) * 1.5, 
            Math.sin((i * Math.PI) / 4) * 1.5, 
            0
          ]}
          rotation={[0, 0, (i * Math.PI) / 4]}
        >
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#326ce5" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Outer nodes */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh 
          key={`node-${i}`}
          position={[
            Math.cos((i * Math.PI) / 4) * 2.2, 
            Math.sin((i * Math.PI) / 4) * 2.2, 
            0
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#326ce5" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}