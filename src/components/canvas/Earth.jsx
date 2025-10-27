import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, Text, Float } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

// Custom shader for screen effect with vibrant colors
const ScreenShader = {
  uniforms: {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    #define PI 3.14159265359
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    // Color palette function
    vec3 palette(float t) {
      vec3 a = vec3(0.5, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(1.0, 1.0, 1.0);
      vec3 d = vec3(0.8, 0.5, 0.4);
      return a + b*cos(6.28318*(c*t+d));
    }
    
    // 2D Random
    float random (in vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
    }
    
    // 2D Noise
    float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      // Smooth Interpolation
      vec2 u = f*f*(3.0-2.0*f);
      
      // Mix 4 coorners percentages
      return mix(a, b, u.x) + 
              (c - a)* u.y * (1.0 - u.x) + 
              (d - b) * u.x * u.y;
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Animated gradient background with vibrant colors
      vec3 color1 = vec3(0.1, 0.1, 0.3); // Deep blue
      vec3 color2 = vec3(0.0, 0.8, 1.0); // Cyan
      vec3 color3 = vec3(0.8, 0.1, 0.5); // Pink
      
      // Dynamic color shifting
      float t = time * 0.3;
      vec3 bg = mix(color1, color2, 0.5 + 0.5 * sin(uv.x * 2.0 + t));
      bg = mix(bg, color3, 0.5 + 0.5 * sin(uv.y * 2.0 - t));
      
      // Grid effect
      float grid = 0.0;
      float gridSize = 15.0;
      float lineWidth = 0.01;
      
      vec2 gridPos = fract(uv * gridSize);
      grid += smoothstep(0.0, lineWidth, gridPos.x) * 
              smoothstep(lineWidth * 2.0, lineWidth, gridPos.x);
      grid += smoothstep(0.0, lineWidth, gridPos.y) * 
              smoothstep(lineWidth * 2.0, lineWidth, gridPos.y);
      
      // Pulsing effect
      float pulse = 0.7 + 0.3 * sin(time * 0.8);
      
      // Final color with effects
      vec3 finalColor = mix(bg, vec3(0.0, 0.8, 1.0), grid * 0.3) * pulse;
      
      // Add some noise for texture
      float n = noise(uv * 50.0);
      finalColor += (n - 0.5) * 0.03;
      
      // Add scanline effect
      float scanline = sin(uv.y * 1000.0 + time * 10.0) * 0.01;
      finalColor += scanline;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const LaptopModel = ({ isMobile }) => {
  const group = useRef();
  const screenMaterial = useRef();
  const { camera } = useThree();
  
  // Animation
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      
      // Smooth rotation with floating animation
      group.current.rotation.y = time * 0.3;
      group.current.position.y = Math.sin(time * 1.2) * 0.1;
      
      // Slight bobbing on X and Z axes
      group.current.rotation.x = Math.sin(time * 0.5) * 0.05;
      group.current.rotation.z = Math.sin(time * 0.3) * 0.03;
    }
    
    // Update shader time
    if (screenMaterial.current) {
      screenMaterial.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  // Create shader material
  const shaderMaterial = useMemo(
    () => new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() }
      },
      vertexShader: ScreenShader.vertexShader,
      fragmentShader: ScreenShader.fragmentShader
    }),
    []
  );

  // Update shader resolution on resize
  const { size } = useThree();
  useFrame(() => {
    shaderMaterial.uniforms.resolution.value.set(size.width, size.height);
  });

  return (
    <group ref={group} scale={isMobile ? 0.7 : 1}>
      {/* Dynamic lighting */}
      <ambientLight intensity={0.3} color="#00ffff" />
      <pointLight 
        position={[5, 5, 5]} 
        intensity={3} 
        color="#00a8ff" 
        distance={15}
        decay={2}
      />
      <pointLight 
        position={[-5, 3, -5]} 
        intensity={2} 
        color="#ff00ff" 
        distance={15}
        decay={2}
      />
      <pointLight 
        position={[0, -5, 0]} 
        intensity={1.5} 
        color="#00ff88" 
        distance={20}
        decay={2}
      />
      
      {/* Laptop Base with better material */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshPhysicalMaterial 
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Screen with animated shader */}
      <group position={[0, 1.1, -1]} rotation={[0.4, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.8, 1.6, 0.05]} />
          <meshPhysicalMaterial 
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Animated Screen Content */}
        <mesh position={[0, 0, 0.026]}>
          <planeGeometry args={[2.7, 1.5]} />
          <shaderMaterial 
            ref={screenMaterial}
            attach="material"
            args={[shaderMaterial]}
            transparent
          />
        </mesh>
        
        {/* Screen border */}
        <mesh position={[0, 0, 0.025]}>
          <planeGeometry args={[2.82, 1.62]} />
          <meshBasicMaterial 
            color="#333" 
            side={THREE.BackSide}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
      
      {/* Keyboard with keys */}
      <group position={[0, 0.11, 0.3]}>
        <mesh>
          <planeGeometry args={[2.8, 1.2]} />
          <meshPhysicalMaterial 
            color="#111111"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>
        
        {/* Keyboard keys */}
        {Array.from({ length: 40 }).map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          const x = (col - 4.5) * 0.2;
          const y = (row - 2) * -0.2;
          
          return (
            <mesh 
              key={i} 
              position={[x, y, 0.01]} 
              rotation={[-0.1, 0, 0]}
            >
              <boxGeometry args={[0.15, 0.15, 0.02]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#222" : "#333"}
                metalness={0.8}
                roughness={0.3}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Trackpad */}
      <mesh position={[0, 0.12, -0.2]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1.5, 0.7, 0.02]} />
        <meshPhysicalMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>
      
      {/* Hinge with better material */}
      <mesh position={[0, 0.6, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 32]} />
        <meshPhysicalMaterial 
          color="#333"
          metalness={0.95}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Floating particles around the laptop */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          const radius = 2.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <mesh 
              key={i} 
              position={[x, Math.sin(angle * 2) * 0.5, z]}
              scale={0.05}
            >
              <sphereGeometry />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#00ff88" : "#00a8ff"} 
                emissive={i % 2 === 0 ? "#00ff88" : "#00a8ff"}
                emissiveIntensity={0.5}
              />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
};

const EarthCanvas = ({ isMobile }) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ 
        antialias: true,
        powerPreference: "high-performance",
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [0, 0, 6] : [0, 0, 8],
      }}
    >
      <color attach="background" args={['#0a0a0a']} />
      
      {/* Improved lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00a8ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00aa" />
      
      <spotLight
        position={[10, 15, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2048}
        color="#ffffff"
      />
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={!isMobile}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={2} // Increased rotation speed
          rotateSpeed={0.8}
        />
        <LaptopModel isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
