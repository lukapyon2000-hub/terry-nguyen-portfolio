import React, { useEffect, useRef, useState } from 'react';

export const NightBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Canvas starfield & atmospheric particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 3200);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.75), // Upper 75% for sky
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
    }));

    // Generate mist / cloud particles
    const cloudCount = 12;
    const clouds = Array.from({ length: cloudCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.5) + height * 0.1,
      radius: Math.random() * 180 + 100,
      vx: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
      alpha: Math.random() * 0.04 + 0.01,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Deep night sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#040711');
      skyGrad.addColorStop(0.35, '#0a1024');
      skyGrad.addColorStop(0.7, '#070a14');
      skyGrad.addColorStop(1, '#020307');

      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft Moon Glow on canvas (top right area)
      const moonX = width * 0.82;
      const moonY = height * 0.18;
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, 320);
      moonGlow.addColorStop(0, 'rgba(235, 240, 255, 0.22)');
      moonGlow.addColorStop(0.3, 'rgba(180, 205, 245, 0.08)');
      moonGlow.addColorStop(0.7, 'rgba(100, 140, 200, 0.02)');
      moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 320, 0, Math.PI * 2);
      ctx.fill();

      // Moon disc
      const moonDisc = ctx.createRadialGradient(moonX - 8, moonY - 8, 2, moonX, moonY, 32);
      moonDisc.addColorStop(0, '#ffffff');
      moonDisc.addColorStop(0.8, '#e2e8f0');
      moonDisc.addColorStop(1, '#cbd5e1');
      ctx.fillStyle = moonDisc;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 32, 0, Math.PI * 2);
      ctx.fill();

      // Render stars
      for (const star of stars) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.fillStyle = `rgba(240, 245, 255, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render drifting clouds
      for (const cloud of clouds) {
        cloud.x += cloud.vx;
        if (cloud.x - cloud.radius > width) cloud.x = -cloud.radius;
        if (cloud.x + cloud.radius < 0) cloud.x = width + cloud.radius;

        const cloudGrad = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius
        );
        cloudGrad.addColorStop(0, `rgba(180, 200, 240, ${cloud.alpha})`);
        cloudGrad.addColorStop(1, 'rgba(10, 15, 30, 0)');

        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mountain Silhouettes
      ctx.fillStyle = '#050812';
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, height * 0.78);
      ctx.quadraticCurveTo(width * 0.15, height * 0.68, width * 0.35, height * 0.76);
      ctx.quadraticCurveTo(width * 0.55, height * 0.84, width * 0.75, height * 0.72);
      ctx.quadraticCurveTo(width * 0.88, height * 0.65, width, height * 0.74);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Foreground darker mountain / forest ridge
      ctx.fillStyle = '#020307';
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, height * 0.85);
      ctx.quadraticCurveTo(width * 0.25, height * 0.78, width * 0.5, height * 0.86);
      ctx.quadraticCurveTo(width * 0.78, height * 0.9, width, height * 0.82);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#060913]">
      {/* Fallback & Layered Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
      />

      {/* Nature-at-night video loop */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 mix-blend-screen opacity-40 ${
            videoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          src="https://assets.mixkit.co/videos/preview/mixkit-starry-night-sky-over-a-silent-lake-41549-large.mp4"
        />
      )}

      {/* Subtle Gradient Overlay as requested:
          Top: deep navy / transparent
          Center: dark blue
          Bottom: almost black
      */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-[#060b18]/70 via-[#0a1224]/80 to-[#03050a]/95" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 z-2 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,5,10,0.85)_100%)]" />
    </div>
  );
};
