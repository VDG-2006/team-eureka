"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingConstellation() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#1a1a1a" transparent opacity={0.6} />
        </mesh>
      ))}

      {nodes.map((node, i) => {
        if (i === nodes.length - 1) return null;
        const nextNode = nodes[i + 1];
        
        const points = [
          new THREE.Vector3(...node.position),
          new THREE.Vector3(...nextNode.position)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={`line-${i}`}>
            <bufferGeometry attach="geometry" {...lineGeometry} />
            <lineBasicMaterial attach="material" color="#a3a3a3" transparent opacity={0.3} />
          </line>
        );
      })}
    </group>
  );
}

export default function AmbientGraph3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <fog attach="fog" args={['#f3f3f1', 5, 15]} />
        <RotatingConstellation />
      </Canvas>
    </div>
  );
}