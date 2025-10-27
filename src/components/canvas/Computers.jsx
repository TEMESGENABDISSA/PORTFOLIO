import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Model = ({ isMobile }) => {
  const group = useRef();
  const { scene } = useGLTF(
    './desktop_pc/scene.gltf',
    true,
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );

  // Smooth rotation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.8; // Increased speed
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};

const Computers = ({ isMobile }) => {
  return (
    <group>
      <Lights />
      <Model isMobile={isMobile} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(null);
  const canvasRef = useRef();

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL not supported');
      }
    } catch (e) {
      setError('WebGL is not supported in your browser');
      return;
    }

    // Handle mobile detection
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  if (error) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        background: '#0f172a',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div>
          <h3>3D Model Could Not Be Loaded</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#4f46e5',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} ref={canvasRef}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ 
          position: [20, 3, 5], 
          fov: 25, 
          near: 0.1, 
          far: 1000 
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          
          // Handle context lost/restored events
          const handleContextLost = (event) => {
            console.log('WebGL context lost');
            event.preventDefault();
          };
          
          const handleContextRestored = () => {
            console.log('WebGL context restored');
          };
          
          gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);
          gl.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
          
          return () => {
            gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
            gl.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
          };
        }}
      >
        <Suspense fallback={null}>
          <Computers isMobile={isMobile} />
          <Preload all />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          maxDistance={25}
          minDistance={8}
          rotateSpeed={0.8}
          zoomSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.1}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
