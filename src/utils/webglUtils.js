import * as THREE from 'three';

export const initWebGLContext = (canvas) => {
  try {
    const contextAttributes = {
      alpha: true,
      antialias: true,
      depth: true,
      stencil: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: true,
    };

    // Try to create WebGL2 context first, fallback to WebGL1
    let gl = canvas.getContext('webgl2', contextAttributes) || 
             canvas.getContext('webgl', contextAttributes) ||
             canvas.getContext('experimental-webgl', contextAttributes);

    if (!gl) {
      throw new Error('WebGL not supported in this browser');
    }

    // Set up WebGL extensions
    const extensions = [
      'EXT_color_buffer_float',
      'OES_texture_float',
      'OES_texture_float_linear',
      'OES_standard_derivatives',
      'WEBGL_compressed_texture_s3tc',
      'EXT_texture_filter_anisotropic',
      'OES_element_index_uint',
      'ANGLE_instanced_arrays',
    ];

    extensions.forEach(ext => {
      const extension = gl.getExtension(ext);
      if (!extension) {
        console.warn(`WebGL extension ${ext} not available`);
      }
    });

    // Set default WebGL state
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    return gl;
  } catch (error) {
    console.error('Failed to initialize WebGL:', error);
    throw error;
  }
};

export const createWorker = (workerPath, options = {}) => {
  try {
    // Create a blob URL for the worker
    const blob = new Blob([`importScripts('${workerPath}');`], { 
      type: 'application/javascript' 
    });
    const workerUrl = URL.createObjectURL(blob);
    
    // Create the worker with the blob URL
    const worker = new Worker(workerUrl, {
      type: 'module',
      credentials: 'same-origin',
      ...options
    });
    
    // Clean up the blob URL when the worker is terminated
    worker.cleanup = () => {
      URL.revokeObjectURL(workerUrl);
      worker.terminate();
    };
    
    return worker;
  } catch (error) {
    console.error('Failed to create worker:', error);
    throw error;
  }
};

export const loadGLTFModel = (url, onProgress) => {
  return new Promise((resolve, reject) => {
    try {
      const loader = new THREE.GLTFLoader();
      
      // Optional: Add DRACO loader for compressed models
      // const dracoLoader = new DRACOLoader();
      // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
      // loader.setDRACOLoader(dracoLoader);
      
      loader.load(
        url,
        (gltf) => {
          // Fix materials
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Ensure materials are properly configured
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => {
                    mat.side = THREE.FrontSide;
                    mat.needsUpdate = true;
                  });
                } else {
                  child.material.side = THREE.FrontSide;
                  child.material.needsUpdate = true;
                }
              }
            }
          });
          
          resolve(gltf);
        },
        onProgress,
        (error) => {
          console.error('Error loading GLTF model:', error);
          reject(error);
        }
      );
    } catch (error) {
      console.error('Failed to load GLTF model:', error);
      reject(error);
    }
  });
};

export const handleContextLoss = (renderer, onContextRestored) => {
  const canvas = renderer.domElement;
  
  const handleContextLost = (event) => {
    event.preventDefault();
    console.log('WebGL context lost');
    
    // Attempt to restore context after a short delay
    setTimeout(() => {
      if (renderer.getContext().isContextLost()) {
        console.log('Attempting to restore WebGL context...');
        renderer.getContext().restoreContext();
      }
    }, 100);
  };
  
  const handleContextRestored = () => {
    console.log('WebGL context restored');
    
    // Re-initialize WebGL state
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Notify parent component
    if (typeof onContextRestored === 'function') {
      onContextRestored();
    }
  };
  
  // Add event listeners
  canvas.addEventListener('webglcontextlost', handleContextLost, false);
  canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
  
  // Return cleanup function
  return () => {
    canvas.removeEventListener('webglcontextlost', handleContextLost);
    canvas.removeEventListener('webglcontextrestored', handleContextRestored);
  };
};
