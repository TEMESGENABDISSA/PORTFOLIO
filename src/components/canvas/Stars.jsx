import { useState, useRef, Suspense, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three';

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(() => {
    try {
      return random.inSphere(new Float32Array(3000), { radius: 1.2 });
    } catch (error) {
      console.error('Error generating stars:', error);
      return new Float32Array(3000).fill(0);
    }
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Handle potential errors with the Points component
  if (!sphere || sphere.length === 0) {
    return null;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// This component will be used within the same Canvas as Computers
const StarsScene = () => {
  return (
    <Suspense fallback={null}>
      <Stars />
    </Suspense>
  );
};

const StarsCanvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <StarsScene />
        <Preload all />
      </Canvas>
    </div>
  );
};

export { StarsScene };
export default StarsCanvas;
