import { useEffect, useRef } from "react";

type EightBitFigureProps = { 
  wave?: boolean; 
  label?: string; 
  scale?: number;
};

export default function EightBitFigure({ 
  wave = false, 
  label = "", 
  scale = 1 
}: EightBitFigureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let frame = 0;
    let animationId: number;
    
    function drawFigure(waveAngle: number) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, 64 * scale, 64 * scale);
      ctx.save();
      ctx.scale(scale, scale);
      
      // Body
      ctx.fillStyle = "#222";
      ctx.fillRect(28, 32, 8, 20); // torso
      ctx.fillRect(24, 52, 8, 10); // left leg
      ctx.fillRect(32, 52, 8, 10); // right leg
      
      // Head
      ctx.fillStyle = "#FFD37F";
      ctx.fillRect(24, 16, 16, 16);
      
      // Eyes
      ctx.fillStyle = "#222";
      ctx.fillRect(28, 22, 2, 2);
      ctx.fillRect(34, 22, 2, 2);
      
      // Smile
      ctx.fillStyle = "#A66";
      ctx.fillRect(30, 28, 4, 2);
      
      // Left arm (waving)
      ctx.save();
      ctx.translate(28, 36);
      ctx.rotate(wave ? Math.sin(waveAngle) * 0.6 : 0);
      ctx.fillStyle = "#FFD37F";
      ctx.fillRect(-12, 0, 12, 4);
      ctx.restore();
      
      // Right arm (static)
      ctx.fillStyle = "#FFD37F";
      ctx.fillRect(36, 36, 12, 4);
      
      // Label
      if (label) {
        ctx.font = "bold 10px monospace";
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.fillText(label, 32, 12);
      }
      
      ctx.restore();
    }
    
    function animate() {
      frame++;
      drawFigure(frame / 10);
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [wave, label, scale]);
  
  return (
    <canvas
      ref={canvasRef}
      width={64 * scale}
      height={64 * scale}
      style={{
        imageRendering: "pixelated",
        width: 64 * scale,
        height: 64 * scale,
      }}
    />
  );
}
