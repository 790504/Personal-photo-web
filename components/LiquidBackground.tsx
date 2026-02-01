import React, { useEffect, useRef } from 'react';

interface LiquidBackgroundProps {
  theme: 'dark' | 'light';
}

const LiquidBackground: React.FC<LiquidBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);

  // Keep themeRef in sync with prop for the animation loop
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Orb definition
    interface Orb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorDark: string;
      colorLight: string;
    }

    // Colors config
    const orbs: Orb[] = [
      { 
        x: Math.random() * width, y: Math.random() * height, vx: 0.3, vy: 0.1, radius: 500, 
        colorDark: 'rgba(255, 255, 255, 0.05)', 
        colorLight: 'rgba(0, 0, 0, 0.03)' // Very subtle shadow
      }, 
      { 
        x: Math.random() * width, y: Math.random() * height, vx: -0.2, vy: 0.2, radius: 400, 
        colorDark: 'rgba(200, 200, 210, 0.08)', 
        colorLight: 'rgba(100, 110, 130, 0.05)' 
      }, 
      { 
        x: Math.random() * width, y: Math.random() * height, vx: 0.2, vy: -0.3, radius: 600, 
        colorDark: 'rgba(150, 160, 180, 0.05)', 
        colorLight: 'rgba(180, 190, 200, 0.08)' 
      }, 
      { 
        x: Math.random() * width, y: Math.random() * height, vx: -0.4, vy: -0.1, radius: 450, 
        colorDark: 'rgba(220, 220, 230, 0.06)', 
        colorLight: 'rgba(50, 50, 60, 0.04)' 
      }, 
    ];

    let animationFrameId: number;

    const animate = () => {
      const isDark = themeRef.current === 'dark';
      
      // Background fill with smooth transition simulated by alpha clear is hard in canvas without persistent buffer
      // So we just clear and fill. CSS transition handles the bottom layer color, canvas handles orbs.
      ctx.clearRect(0, 0, width, height);
      
      // We don't fillRect background color here, we let the parent div bg color show through.
      // But we need to composite the orbs. 

      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off walls
        if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        
        const color = isDark ? orb.colorDark : orb.colorLight;
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Heavy blur to create the liquid glass effect */}
      <div className="absolute inset-0 backdrop-blur-[120px]" />
      {/* Fine grain noise */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LiquidBackground;