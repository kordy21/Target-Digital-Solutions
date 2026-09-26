"use client";

import React, { useRef, useEffect } from "react";

interface InteractiveGridProps {
  /** لون الخلفية للكانفاس */
  backgroundColor?: string;
  /** اللون الأساسي للجسيمات في حالتها العادية */
  particleColor?: string;
  /** اللون اللي بيظهر لما الماوس يقرب من الجسيم */
  highlightColor?: string;
  /** الحجم الأساسي للجسيم */
  particleBaseSize?: number;
  /** المسافة بين كل جسيم والتاني في الشبكة */
  particleSpacing?: number;
  /** نصف قطر دائرة التأثير بتاعة الماوس */
  interactionRadius?: number;
  /** أي كلاسات إضافية */
  className?: string;
}

/**
 * كومبوننت InteractiveGrid بيعمل خلفية شبكية متفاعلة مع حركة الماوس.
 * بيستخدم HTML5 Canvas و requestAnimationFrame عشان يدي أداء عالي جداً.
 */
export function InteractiveGrid({
  backgroundColor = "transparent", // خليته شفاف افتراضياً عشان يشتغل فوق الـ Backgrounds
  particleColor = "rgba(59, 130, 246, 0.3)",
  highlightColor = "rgba(96, 165, 250, 1)",
  particleBaseSize = 2,
  particleSpacing = 25,
  interactionRadius = 100,
  className = "",
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; baseX: number; baseY: number; baseSize: number; currentSize: number; currentOpacity: number }[] = [];
    
    // مكان الماوس الافتراضي بره الكانفاس
    const mouse = { x: -1000, y: -1000 };

    // ضبط حجم الكانفاس ليملا الحاوية بتاعته
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    };

    // إنشاء شبكة الجزيئات (Grid)
    const initParticles = () => {
      particles = [];
      const cols = Math.floor(canvas.width / particleSpacing) + 1;
      const rows = Math.floor(canvas.height / particleSpacing) + 1;

      // حساب المسافة المتبقية لتوسيط الشبكة
      const offsetX = (canvas.width % particleSpacing) / 2;
      const offsetY = (canvas.height % particleSpacing) / 2;

      for (let i = 0; i < cols; i++) {
        const gridX = i * particleSpacing + offsetX;
        
        // منحنيات متماثلة ومرفوعة من الأطراف عشان نزود عدد النقط يمين وشمال
        const centeredX = gridX - canvas.width / 2;
        const mountainTop = canvas.height * 0.15 + Math.cos(centeredX * 0.0025) * 180 + Math.cos(centeredX * 0.01) * 40;
        
        for (let j = 0; j < rows; j++) {
          const gridY = j * particleSpacing + offsetY;
          
          if (gridY > mountainTop) {
            // كسر شكل الشبكة (Grid) بوضع عشوائي بسيط لكل نقطة
            const randomX = (Math.random() - 0.5) * (particleSpacing * 0.9);
            const randomY = (Math.random() - 0.5) * (particleSpacing * 0.9);
            
            const x = gridX + randomX;
            const y = gridY + randomY;

            particles.push({
              x: x,
              y: y,
              baseX: x,
              baseY: y,
              baseSize: particleBaseSize,
              currentSize: particleBaseSize,
              currentOpacity: 0.7, // شفافية أساسية
            });
          }
        }
      }
    };

    // دالة النعومة في الحركة (Linear Interpolation)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // حلقة الأنيميشن (Animation Loop)
    const animate = () => {
      // تنظيف الخلفية
      if (backgroundColor === "transparent") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // توفير استهلاك المعالج لو التاب مش ظاهر
      if (document.visibilityState === "hidden") {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      particles.forEach((p) => {
        // حساب المسافة بين الماوس ومكان النقطة الأساسي
        const dx = mouse.x - p.baseX;
        const dy = mouse.y - p.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetSize = p.baseSize;
        let targetOpacity = 0.7; // شفافية أساسية
        let targetX = p.baseX;
        let targetY = p.baseY;

        // تأثير الماوس (التنافر / Repulsion)
        if (distance < interactionRadius) {
          // استخدام منحنى قوة أقوى عشان يدي إحساس إن الماوس بيخترق الشكل بقوة
          const force = Math.pow((interactionRadius - distance) / interactionRadius, 1.2);
          
          if (highlightColor === "transparent") {
            const angle = Math.atan2(dy, dx);
            // مسافة الدفع أطول بكتير عشان يفتح فجوة واسعة (تأثير الاختراق)
            const pushDistance = force * 150; 
            targetX = p.baseX - Math.cos(angle) * pushDistance;
            targetY = p.baseY - Math.sin(angle) * pushDistance;
            
            // عشان إحساس العمق والاختراق، النقط بتصغر وبتختفي كأنها غاصت لجوه
            targetSize = Math.max(0.5, p.baseSize - force * 2);
            targetOpacity = Math.max(0, 0.7 - force * 0.7);
          } else {
            targetSize = p.baseSize + force * 4;
          }
        }

        // تطبيق النعومة (Lerp) أسرع شوية
        p.currentSize = lerp(p.currentSize, targetSize, 0.15);
        p.x = lerp(p.x, targetX, 0.15);
        p.y = lerp(p.y, targetY, 0.15);
        
        p.currentOpacity = lerp(p.currentOpacity, targetOpacity, 0.1);

        // رسم النقطة (مجوفة)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentSize, 0, Math.PI * 2);
        
        ctx.globalAlpha = Math.max(0, p.currentOpacity);
        // بنستخدم particleColor الأساسي ونتحكم في شفافيته بالـ globalAlpha
        ctx.strokeStyle = highlightColor !== "transparent" && distance < interactionRadius ? highlightColor : particleColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1; // Reset
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // مستمعات الأحداث (Event Listeners) لحركة الماوس
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    backgroundColor,
    particleColor,
    highlightColor,
    particleBaseSize,
    particleSpacing,
    interactionRadius,
  ]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full absolute inset-0 z-0 overflow-hidden pointer-events-auto ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
