// WebGL worker for offloading heavy computations
self.onmessage = async (e) => {
  const { type, payload } = e.data;
  
  try {
    switch (type) {
      case 'processMesh':
        // Process mesh data in the worker
        const result = await processMeshData(payload);
        self.postMessage({ type: 'meshProcessed', payload: result });
        break;
        
      case 'generateGeometry':
        // Generate geometry in the worker
        const geometry = await generateGeometry(payload);
        self.postMessage({ type: 'geometryGenerated', payload: geometry });
        break;
        
      default:
        self.postMessage({ type: 'error', error: 'Unknown message type' });
    }
  } catch (error) {
    self.postMessage({ 
      type: 'error', 
      error: error.message,
      stack: error.stack 
    });
  }
};

async function processMeshData(data) {
  // Process mesh data here
  return { status: 'processed', vertices: data.vertices?.length || 0 };
}

async function generateGeometry(params) {
  // Generate geometry here
  return { status: 'generated', ...params };
}

// Handle errors in the worker
self.onerror = (error) => {
  console.error('Worker error:', error);
  return true; // Prevent default error handling
};
