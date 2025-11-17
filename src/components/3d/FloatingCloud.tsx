// src/components/3d/FloatingCloud.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Cloud } from '@react-three/drei'

export default function FloatingCloud() {
  const cloudRef = useRef(null)

  useFrame((state) => {
    if (cloudRef.current) {
      // @ts-ignore
      cloudRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      // @ts-ignore
      cloudRef.current.rotation.y += 0.002
    }
  })

  return (
    <Cloud ref={cloudRef} bounds={[2, 1, 2]} color="#a78bfa" />
  )
}