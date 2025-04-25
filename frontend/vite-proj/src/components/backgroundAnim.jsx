// BackgroundAnimation.jsx
import React, { useEffect, useRef, useState } from 'react';
import NetworkBackground from './background';
import './background.css';

const BackgroundAnimation = ({ options = {} }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create the animation instance
    const networkBackground = new NetworkBackground(containerRef.current, {
      ...options,
      reducedMotion: prefersReducedMotion
    });
    
    // Set up reduced motion listener
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    
    // Set loading state
    setIsLoaded(true);
    
    // Clean up
    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      
      // Clean up Three.js resources
      if (networkBackground.renderer) {
        networkBackground.renderer.dispose();
        if (containerRef.current) {
          containerRef.current.removeChild(networkBackground.renderer.domElement);
        }
      }
      
      if (networkBackground.scene) {
        networkBackground.scene.clear();
      }
      
      // Dispose of geometries and materials
      if (networkBackground.particleSystem) {
        networkBackground.particleSystem.geometry.dispose();
        networkBackground.particleSystem.material.dispose();
      }
      
      networkBackground.lines.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
    };
  }, [options]);
  
  return (
    <div className="background-container">
      {/* Static fallback/loading background */}
      <div className={`background-static ${prefersReducedMotion || !isLoaded ? 'visible' : ''}`} />
      
      {/* Canvas container for Three.js */}
      <div ref={containerRef} />
      
      {/* Overlay for better content contrast */}
      <div className="background-overlay" />
    </div>
  );
};

export default BackgroundAnimation;