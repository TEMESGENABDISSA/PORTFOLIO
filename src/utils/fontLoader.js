const loadFont = (fontFamily, url, options = {}) => {
  // Skip in Node.js or non-browser environments
  if (typeof document === 'undefined') return Promise.resolve();

  return new Promise((resolve, reject) => {
    try {
      // Check if font is already loaded
      if (document.fonts) {
        if (document.fonts.check(`16px "${fontFamily}"`)) {
          return resolve();
        }
      }

      // Create a stylesheet link for the font
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@400;700&display=swap`;
      link.rel = 'stylesheet';
      
      // Handle font loading events
      link.onload = () => {
        // For browsers that support the Font Loading API
        if ('fonts' in document) {
          document.fonts.ready.then(() => {
            resolve();
          }).catch(error => {
            console.warn(`Font loading failed: ${fontFamily}`, error);
            resolve(); // Resolve anyway to not block the app
          });
        } else {
          // Fallback for browsers without Font Loading API
          setTimeout(resolve, 1000);
        }
      };
      
      link.onerror = (error) => {
        console.warn(`Failed to load font: ${fontFamily}`, error);
        resolve(); // Resolve anyway to not block the app
      };
      
      // Add the link to the document
      document.head.appendChild(link);
    } catch (error) {
      console.warn(`Error loading font ${fontFamily}:`, error);
      resolve(); // Resolve anyway to not block the app
    }
  });
};

// Preload common fonts
export const preloadFonts = async () => {
  try {
    await Promise.all([
      loadFont('Roboto'),
      loadFont('Roboto Mono')
    ]);
  } catch (error) {
    console.warn('Error preloading fonts:', error);
  }
};

export default loadFont;
