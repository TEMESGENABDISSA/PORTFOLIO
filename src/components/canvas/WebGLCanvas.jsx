import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';

// Extend Three.js with any custom components if needed
// extend({ CustomComponent: CustomComponent });
import PropTypes from 'prop-types';
import CanvasLoader from '../Loader';

// Custom Canvas with proper WebGL context configuration
const WebGLCanvas = ({ children, ...props }) => {
  const canvasRef = useRef();
  
  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      
      if (canvasRef.current.width !== width || canvasRef.current.height !== height) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={canvasRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
          preserveDrawingBuffer: true,
          failIfMajorPerformanceCaveat: false
        }}
        camera={{
          position: [20, 3, 5],
          fov: 25,
          near: 0.1,
          far: 1000,
        }}
        onCreated={({ gl, camera, scene }) => {
          // Set pixel ratio for better performance on high-DPI displays
          const pixelRatio = Math.min(window.devicePixelRatio, 2);
          gl.setPixelRatio(pixelRatio);
          
          // Configure renderer
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
          gl.autoClear = true;
          
          // Configure scene
          scene.background = new THREE.Color(0x000000);
          
          // Configure camera
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          
          // Handle WebGL context lost/restored events
          const handleContextLost = (event) => {
            console.log('WebGL Context Lost', event);
            event.preventDefault();
            // Attempt to restore context after a delay
            setTimeout(() => {
              if (gl.isContextLost()) {
                gl.getContext().restoreContext();
              }
            }, 100);
          };
          
          const handleContextRestored = () => {
            console.log('WebGL Context Restored');
            // Re-initialize WebGL state
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setSize(window.innerWidth, window.innerHeight);
          };
          
          const canvas = gl.domElement;
          canvas.addEventListener('webglcontextlost', handleContextLost, false);
          canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
          
          return () => {
            canvas.removeEventListener('webglcontextlost', handleContextLost);
            canvas.removeEventListener('webglcontextrestored', handleContextRestored);
            
            // Cleanup resources
            scene.traverse(child => {
              if (child.isMesh) {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                  if (Array.isArray(child.material)) {
                    child.material.forEach(material => material.dispose());
                  } else {
                    child.material.dispose();
                  }
                }
              }
            });
          };
        }}
      {...props}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

WebGLCanvas.propTypes = {
  children: PropTypes.node,
};

export default WebGLCanvas;
