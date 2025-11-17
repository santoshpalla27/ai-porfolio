// src/components/3d/Pipeline.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function Pipeline() {
  const tubeRef = useRef(null)
  const particlesRef = useRef(null)

  // Create tube path
  const path = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, 0, 0),
      new THREE.Vector3(-1, 1, 0),
      new THREE.Vector3(1, -1, 0),
      new THREE.Vector3(3, 0, 0),
    ])
    return curve
  }, [])

  // Create particles along the path
  const particles = useMemo(() => {
    const points = []
    for (let i = 0; i < 100; i++) {
      const t = i / 100
      const point = path.getPoint(t)
      points.push(point.x, point.y, point.z)
    }
    return new Float32Array(points)
  }, [path])

  useFrame((state) => {
    if (tubeRef.current) {
      // @ts-ignore
      tubeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    if (particlesRef.current) {
      const positions = (particlesRef.current as THREE.InstancedMesh).geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const t = ((state.clock.elapsedTime * 0.5 + i / positions.length) % 1)
        const point = path.getPoint(t)
        positions[i] = point.x
        positions[i + 1] = point.y
        positions[i + 2] = point.z
      }
      // @ts-ignore
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Tube */}
      <mesh ref={tubeRef}>
        <tubeGeometry args={[path, 64, 0.1, 8, false]} />
        <meshStandardMaterial 
          color="#0070f3" 
          transparent 
          opacity={0.3} 
          metalness={0.7} 
          roughness={0.2} 
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          color="#00f5ff"
          size={0.05}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  )
}