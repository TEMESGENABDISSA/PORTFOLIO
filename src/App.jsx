import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ErrorBoundary from "./components/ErrorBoundary";
import { preloadFonts } from "./utils/fontLoader";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Chatbot,
  Footer,
} from "./components";
import Testimonials from "./components/Testimonials";
import "./styles/testimonials.css";

const App = () => {
  const { theme } = useTheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Handle WebGL context loss
  useEffect(() => {
    const handleWebGLContextLost = (event) => {
      console.log('WebGL Context Lost:', event);
      event.preventDefault();
      // The context will be automatically restored
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleWebGLContextLost, false);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleWebGLContextLost, false);
      }
    };
  }, []);

  useEffect(() => {
    // Preload fonts when component mounts
    const loadFonts = async () => {
      try {
        await preloadFonts();
      } catch (error) {
        console.error('Error loading fonts:', error);
      } finally {
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  // Show loading state while fonts are loading
  if (!fontsLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-primary">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={null}>
              <Hero />
            </Suspense>
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Testimonials />
          <div className="relative z-0">
            <Contact />
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
        <Chatbot />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
