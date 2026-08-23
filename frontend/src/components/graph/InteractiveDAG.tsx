"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html, useCursor } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  id: string;
  label: string;
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed';
  position: [number, number, number];
}

const mockNodes: NodeData[] = [
  { id: 'n1', label: 'HTML/CSS Basics', status: 'completed', position: [-4, 2, 0] },
  { id: 'n2', label: 'JavaScript Fundamentals', status: 'completed', position: [0, 2, 0] },
  { id: 'n3', label: 'React Hooks', status: 'in_progress', position: [2, -1, 0] },
  { id: 'n4', label: 'Server Components', status: 'locked', position: [5, -1, 0] },
];

function SkillNode({ node, onClick }: { node: NodeData; onClick: (id: string) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useCursor(hovered);

  useFrame((state) => {
    if (meshRef.current && node.status === 'in_progress') {
      meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
      meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
  });

  const getColor = () => {
    switch (node.status) {
      case 'completed': return '#000000';
      case 'in_progress': return '#f59e0b'; // Amber
      case 'unlocked': return '#3b82f6';   // Blue
      case 'locked': return '#d1d5db';     // Gray
      default: return '#d1d5db';
    }
  };

  // NEW: Heatmap Glow Effect
  const getEmissive = () => {
    if (node.status === 'in_progress') return '#f59e0b';
    if (node.status === 'completed') return '#10b981'; // Subtle green heat
    return '#000000';
  };

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(node.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={getColor()} 
          emissive={getEmissive()}
          emissiveIntensity={node.status === 'in_progress' ? 1.5 : (node.status === 'completed' ? 0.4 : 0)}
          wireframe={node.status === 'locked'}
          toneMapped={false}
        />
      </mesh>
      
      <Text
        position={[0, -1, 0]}
        fontSize={0.4}
        color="#1a1a1a"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#ffffff"
      >
        {node.label}
      </Text>
      
      {hovered && (
        <Html position={[0, 1, 0]} center>
          <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none">
            {node.status.replace('_', ' ').toUpperCase()}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function InteractiveDAG({ onNodeSelect }: { onNodeSelect: (id: string) => void }) {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {mockNodes.map((node) => (
          <SkillNode key={node.id} node={node} onClick={onNodeSelect} />
        ))}

        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={false} 
          minDistance={5} 
          maxDistance={15} 
        />
      </Canvas>
    </div>
  );
}