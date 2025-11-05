import { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const gridSize = 50;
    const maxDistance = 150;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const size = 2 + (1 - distance / maxDistance) * 4;

            ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.6})`; // primary color
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Draw connecting lines
            if (x + gridSize < canvas.width) {
              const nextDx = mousePos.current.x - (x + gridSize);
              const nextDy = mousePos.current.y - y;
              const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);

              if (nextDistance < maxDistance) {
                ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + gridSize, y);
                ctx.stroke();
              }
            }

            if (y + gridSize < canvas.height) {
              const nextDx = mousePos.current.x - x;
              const nextDy = mousePos.current.y - (y + gridSize);
              const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);

              if (nextDistance < maxDistance) {
                ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.3})`; // secondary color
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + gridSize);
                ctx.stroke();
              }
            }
          } else {
            ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    drawGrid();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveGrid;
