import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Laptop = () => {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {/* Laptop base */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Screen */}
      <group position={[0, 1.1, -1]} rotation={[0.4, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.8, 1.6, 0.05]} />
          <meshStandardMaterial 
            color="#0a0a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Screen content */}
        <mesh position={[0, 0, 0.026]}>
          <planeGeometry args={[2.7, 1.5]} />
          <meshStandardMaterial 
            color="#0f0f2d"
            emissive="#1a237e"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
      
      {/* Hinge */}
      <mesh position={[0, 0.6, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.9} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, 0.11, 0.3]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.8, 1.2]} />
        <meshStandardMaterial 
          color="#0a0a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Touchpad */}
      <mesh position={[0, 0.12, -0.2]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.7]} />
        <meshStandardMaterial 
          color="#111122"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sparkles } from "@react-three/drei";
import CanvasLoader from "../Loader";

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0, 7],
        fov: 50,
        near: 0.1,
        far: 200,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0f3460" />
      
      <Suspense fallback={<CanvasLoader />}>
        <Laptop />
        <Sparkles 
          count={30}
          size={3}
          scale={8}
          color="#915EFF"
          opacity={0.5}
          speed={0.5}
        />
        <Preload all />
      </Suspense>
      
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default LaptopCanvas;
