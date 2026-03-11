import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

function TechBall({ position, name, color }: { position: [number, number, number], name: string, color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(t * 0.5 + position[0]) * 0.002;
    mesh.current.rotation.x = Math.cos(t * 0.5) * 0.1;
    mesh.current.rotation.y = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} ref={mesh}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
        <Text
          position={[0, 0, 0.61]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
        >
          {name}
        </Text>
      </mesh>
    </Float>
  );
}

const technologies = [
  { name: 'React', color: '#61DAFB', pos: [-3, 1.5, 0] },
  { name: 'Next.js', color: '#ffffff', pos: [-1, 2, 1] },
  { name: 'Node.js', color: '#339933', pos: [2, 1.8, -1] },
  { name: 'TS', color: '#3178C6', pos: [4, 0.5, 0] },
  { name: 'MongoDB', color: '#47A248', pos: [-4, -1, 1] },
  { name: 'SQL', color: '#4479A1', pos: [-1.5, -2, -1] },
  { name: 'Docker', color: '#2496ED', pos: [1.5, -1.5, 0] },
  { name: 'AWS', color: '#FF9900', pos: [3.5, -1, -1] },
];

export default function TechStack() {
  return (
    <div className="h-[600px] w-full relative cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h2 className="text-6xl md:text-8xl font-black opacity-10 tracking-tighter uppercase">
          My Techstack
        </h2>
      </div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          {technologies.map((tech, i) => (
            <TechBall key={i} position={tech.pos as any} name={tech.name} color={tech.color} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
