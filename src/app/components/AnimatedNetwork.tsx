import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
};

export default function AnimatedNetwork({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];

    const createNodes = () => {
      const density = width < 768 ? 20 : width < 1280 ? 34 : 48;
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: 1 + Math.random() * 1.8,
        pulse: Math.random() * Math.PI * 2
      }));
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createNodes();
    };

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.7, height * 0.45, 0, width * 0.7, height * 0.45, Math.max(width, height) * 0.72);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
      gradient.addColorStop(0.45, 'rgba(34, 211, 238, 0.05)');
      gradient.addColorStop(1, 'rgba(5, 5, 9, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
        }

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);
          const maxDistance = width < 768 ? 110 : 150;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.22;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        const pulse = prefersReducedMotion ? 0.5 : (Math.sin(time * 0.002 + node.pulse) + 1) / 2;
        ctx.fillStyle = `rgba(244, 240, 255, ${0.45 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
