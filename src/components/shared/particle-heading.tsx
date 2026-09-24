"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
// أنواع الأشكال اللي الجسيمات ممكن تتجمع وتكونها
type ShapeType = "question" | "rings" | "exclamation" | "logo";

interface ParticleHeadingProps {
  children: React.ReactNode;
  shape?: ShapeType;
  className?: string;
  /** Extra canvas padding around the content (px). Default 60 */
  canvasPadding?: number;
  /** Override particle count (auto-scaled by default) */
  particleCount?: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** 
 * دالة بتقرأ قيمة CSS Variable من الـ root بتاع الصفحة 
 * ده بيخلينا نجيب اللون الأساسي (Primary) حتى لو اتغير بين الـ Dark/Light mode
 */
function getCSSVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

/** 
 * Linear Interpolation (الاستيفاء الخطي)
 * دالة بنستخدمها عشان نحرك الجسيمات بنعومة من مكانها الحالي للهدف (بدل ما تنط مرة واحدة)
 */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Generate Cartesian points for a question-mark shape */
function buildQuestionPoints(cx: number, cy: number, r: number, count: number) {
  const pts: { x: number; y: number }[] = [];
  
  // 1. The hook (arc)
  const arcPts = Math.round(count * 0.6);
  // Start up-left, go over the top, end straight down at the center
  const startAngle = Math.PI * 1.1;
  const endAngle = Math.PI * 2.5;
  for (let i = 0; i < arcPts; i++) {
    const a = startAngle + (endAngle - startAngle) * (i / arcPts);
    pts.push({ 
      x: cx + Math.cos(a) * r, 
      y: cy - r * 0.3 + Math.sin(a) * r 
    });
  }

  // 2. The stem (straight down)
  const stemPts = Math.round(count * 0.25);
  // arc ends at y = cy - r*0.3 + r = cy + 0.7*r
  for (let i = 0; i < stemPts; i++) {
    const t = i / stemPts;
    pts.push({ x: cx, y: cy + r * 0.7 + t * r * 0.5 });
  }

  // 3. The dot
  const dotPts = count - pts.length;
  for (let i = 0; i < dotPts; i++) {
    const a = (Math.PI * 2 * i) / Math.max(1, dotPts);
    pts.push({
      x: cx + Math.cos(a) * (r * 0.15),
      y: cy + r * 1.55 + Math.sin(a) * (r * 0.15),
    });
  }
  return pts;
}

/** Generate Cartesian points for an exclamation-mark shape */
function buildExclamationPoints(cx: number, cy: number, r: number, count: number) {
  const pts: { x: number; y: number }[] = [];
  const stemPts = Math.round(count * 0.8);
  for (let i = 0; i < stemPts; i++) {
    const t = i / stemPts;
    // Stem from top to bottom
    pts.push({ x: cx, y: cy - r * 0.8 + t * r * 1.4 });
  }
  // Dot
  const dotPts = count - stemPts;
  for (let i = 0; i < dotPts; i++) {
    const a = (Math.PI * 2 * i) / Math.max(1, dotPts);
    pts.push({
      x: cx + Math.cos(a) * (r * 0.15),
      y: cy + r * 1.1 + Math.sin(a) * (r * 0.15),
    });
  }
  return pts;
}

/** Generate Cartesian points for concentric rings */
function buildRingsPoints(cx: number, cy: number, maxR: number, count: number) {
  const rings = 3;
  const pts: { x: number; y: number }[] = [];
  for (let ring = 0; ring < rings; ring++) {
    const r = (maxR * (ring + 1)) / rings;
    const ringCount = Math.round(count / rings);
    for (let i = 0; i < ringCount; i++) {
      const a = (Math.PI * 2 * i) / ringCount;
      pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
    }
  }
  return pts;
}

/** 
 * دالة بتولد النقاط (Coordinates) الخاصة بلوجو الشركة "Target Digital Solution"
 * اللوجو بيتكون من:
 * 1. حلقة أساسية (Main Ring)
 * 2. نقطة في المركز (Center Dot)
 * 3. بروز في أعلى اليمين (Protrusion)
 * 4. قوس تحت الحلقة (U-Shape)
 */
function buildLogoPoints(cx: number, cy: number, r: number, count: number) {
  const pts: { x: number; y: number }[] = [];
  
  const R = r * 2; // بنكبر القطر عشان ياخد مساحة أكبر وقت التجميع
  const localCy = cy - R * 0.5; // بنرفع المركز شوية لفوق عشان التوازن
  
  // بنحدد أوزان لكل جزء في اللوجو عشان نوزع عليهم عدد الجسيمات الإجمالي (count)
  const ringLen = 2 * Math.PI * R;
  const uLen = Math.PI * R;
  const protLen = R * 0.5;
  const dotLen = R * 0.3; 
  const totalLen = ringLen + uLen + protLen + dotLen;
  
  // 1. الحلقة الأساسية (Main Ring)
  const ringPts = Math.round(count * (ringLen / totalLen));
  for (let i = 0; i < ringPts; i++) {
    const a = (Math.PI * 2 * i) / ringPts;
    pts.push({ x: cx + Math.cos(a) * R, y: localCy + Math.sin(a) * R });
  }
  
  // 2. نقطة المركز (Center Dot)
  const dotPts = Math.round(count * (dotLen / totalLen));
  for (let i = 0; i < dotPts; i++) {
    const a = (Math.PI * 2 * i) / Math.max(1, dotPts);
    pts.push({ x: cx + Math.cos(a) * (R * 0.1), y: localCy + Math.sin(a) * (R * 0.1) });
  }
  
  // 3. البروز العلوي الأيمن (Top-Right Protrusion)
  const protPts = Math.round(count * (protLen / totalLen));
  const pAngle = -Math.PI / 4; // زاوية -45 درجة (فوق يمين)
  for (let i = 0; i < protPts; i++) {
    const t = i / Math.max(1, protPts - 1);
    const l = R + t * (R * 0.45);
    pts.push({ x: cx + Math.cos(pAngle) * l, y: localCy + Math.sin(pAngle) * l });
  }
  
  // 4. القوس السفلي (Bottom U-Shape)
  const uPts = count - pts.length;
  const uCy = localCy + R * 1.3; // المسافة بين الحلقة الأساسية والقوس
  for (let i = 0; i < uPts; i++) {
    // قوس من PI (يسار) لحد 0 (يمين)
    const a = Math.PI - (Math.PI * i) / Math.max(1, uPts - 1);
    pts.push({ x: cx + Math.cos(a) * R, y: uCy + Math.sin(a) * R });
  }
  
  // تدوير الشكل بالكامل بمقدار 90 درجة عشان يبقى بالعرض (Horizontal)
  const angle = Math.PI / 2; 
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  pts.forEach(p => {
    const dx = p.x - cx;
    const dy = p.y - cy; // بنلف حوالين المركز الأصلي للكانفاس
    p.x = cx + dx * cosA - dy * sinA;
    p.y = cy + dx * sinA + dy * cosA;
  });
  
  return pts;
}

// ─── Particle class ───────────────────────────────────────────────────────────
/**
 * كلاس الجسيم الواحد (Particle)
 * بيتحكم في مكان كل نقطة، سرعتها، حركتها العشوائية، ولونها.
 */
class Particle {
  x: number; // المكان الحالي (أفقي)
  y: number; // المكان الحالي (رأسي)
  targetX: number; // المكان اللي المفروض يروحه وقت التجميع
  targetY: number; // المكان اللي المفروض يروحه وقت التجميع
  vx: number; // سرعة الانتشار والتفرق (أفقية)
  vy: number; // سرعة الانتشار والتفرق (رأسية)
  size: number; // حجم الدائرة
  jitterX: number; // مسافة الاهتزاز العشوائي وقت التجميع (عشان ميكونوش لازقين في بعض)
  jitterY: number; 
  phase: number; // معامل رياضي لعمل حركة موجية متناغمة
  color: string;

  constructor(canvasW: number, canvasH: number) {
    this.x = Math.random() * canvasW;
    this.y = Math.random() * canvasH;
    this.targetX = this.x;
    this.targetY = this.y;
    // سرعة الانتشار
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = 3 + Math.random() * 4;
    // مسافة التباعد العشوائي أثناء التجميع (عشان يبعدوا أكتر عن بعض)
    this.jitterX = (Math.random() - 0.5) * 70;
    this.jitterY = (Math.random() - 0.5) * 70;
    this.phase = Math.random() * Math.PI * 3;
    this.color = "#3b5bdb";
  }

  /**
   * وضع الانتشار العشوائي (Drift)
   * الجسيم بيتحرك في الخلفية بحرية وبيخبط في حواف الـ Canvas ويرتد
   */
  drift(canvasW: number, canvasH: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvasW) this.vx *= -1; // ارتداد عند الحافة
    if (this.y < 0 || this.y > canvasH) this.vy *= -1; // ارتداد عند الحافة
    this.x = Math.max(0, Math.min(canvasW, this.x));
    this.y = Math.max(0, Math.min(canvasH, this.y));
  }

  /**
   * وضع الانجذاب والتجمع (Attract)
   * بنستخدم الـ lerp عشان نحرك الجسيم للـ target بنعومة
   * وبنضيف عليه Jitter عشان ميقفش ثابت مكانه ويدي تأثير الروح (Fuzzy)
   */
  attract(time: number) {
    const jx = Math.sin(time + this.phase) * this.jitterX;
    const jy = Math.cos(time * 0.7 + this.phase) * this.jitterY;
    // قللنا سرعة التجميع (0.04)
    this.x = lerp(this.x, this.targetX + jx, 0.04);
    this.y = lerp(this.y, this.targetY + jy, 0.04);
  }

  /** رسم الجسيم على هيئة دائرة (Arc) */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.2;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export function ParticleHeading({
  children,
  shape = "rings",
  className = "",
  canvasPadding = 60,
  particleCount,
}: ParticleHeadingProps) {
  const wrapperId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const attractedRef = useRef(false);
  const timeRef = useRef(0); // مؤقت بيزيد مع كل Frame لتشغيل حركة الارتجاف (Jitter)
  const reducedMotionRef = useRef(false); // للتحقق من إعدادات الـ Accessibility (لو المستخدم موقف الـ Animations)

  // دالة لتحديد عدد الجسيمات بناءً على حجم الشاشة (الموبايل بياخد جسيمات أقل لتقليل الحمل على المعالج)
  const resolveCount = useCallback(() => {
    if (particleCount) return particleCount;
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 860;
    return isMobile ? 30 : 70;
  }, [particleCount]);

  /** 
   * دالة تهيئة الـ Canvas وحساب أماكن الأهداف (Targets)
   * بتشتغل كل مرة يحصل فيها Resize للشاشة عشان اللوجو يفضل مظبوط
   */
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    // بنكبر الكانفاس بمسافة canvasPadding من كل الاتجاهات عشان الجسيمات متاخدش Cut-off
    const rect = wrapper.getBoundingClientRect();
    const w = rect.width + canvasPadding * 2;
    const h = rect.height + canvasPadding * 2;
    canvas.width = w;
    canvas.height = h;

    // بننشئ المصفوفة الخاصة بالجسيمات
    const count = resolveCount();
    particlesRef.current = Array.from(
      { length: count },
      () => new Particle(w, h)
    );

    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.28;
    
    // بناءً على الـ Shape المختار بنولد مجموعة النقاط
    const pts =
      shape === "question"
        ? buildQuestionPoints(cx, cy, r, count)
        : shape === "exclamation"
        ? buildExclamationPoints(cx, cy, r, count)
        : shape === "logo"
        ? buildLogoPoints(cx, cy, r, count)
        : buildRingsPoints(cx, cy, r, count);

    // بنوزع الأهداف على كل الجسيمات
    particlesRef.current.forEach((p, i) => {
      p.targetX = pts[i % pts.length].x;
      p.targetY = pts[i % pts.length].y;
    });
  }, [canvasPadding, shape, resolveCount]);

  /** 
   * دالة الـ Animation الأساسية (بتتنده 60 مرة في الثانية)
   */
  const animate = useCallback(function tick() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // توفير استهلاك المعالج: لو التاب بتاع المتصفح مش ظاهر، بنوقف الرسم لكن بنكمل الـ Loop
    if (document.visibilityState === "hidden") {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    // تنظيف الكانفاس قبل رسم الـ Frame الجديد
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // قراءة اللون الأساسي للموقع لايف، عشان لو العميل غيّر من Dark لـ Light Mode الجسيمات يتغير لونها فوراً
    const primaryColor = getCSSVar("--primary", "#3b5bdb");
    timeRef.current += 0.016;
    const isAttracted = attractedRef.current;

    particlesRef.current.forEach((p) => {
      p.color = primaryColor;
      
      // لو المستخدم مفعل ميزة (تقليل الحركة) بنكتفي برسم الأشكال ثابتة بدون أنيميشن
      if (reducedMotionRef.current) {
        p.draw(ctx);
        return;
      }
      
      // هنا القرار: يتجمعوا لتكوين الشكل، ولا يتفرقوا في الخلفية؟
      if (isAttracted) {
        p.attract(timeRef.current);
      } else {
        p.drift(canvas.width, canvas.height);
      }
      p.draw(ctx);
    });

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    reducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    initCanvas();
    rafRef.current = requestAnimationFrame(animate);

    const ro = new ResizeObserver(() => initCanvas());
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [initCanvas, animate]);

  // Mobile IntersectionObserver fallback
  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 860;
    if (!isMobile) return;
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        attractedRef.current = entry.intersectionRatio >= 0.5;
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id={wrapperId}
      ref={wrapperRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => { attractedRef.current = true; }}
      onMouseLeave={() => { attractedRef.current = false; }}
      onFocus={() => { attractedRef.current = true; }}
      onBlur={() => { attractedRef.current = false; }}
      tabIndex={0}
      style={{ outline: "none" }}
      role="group"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          top: -canvasPadding,
          left: -canvasPadding,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
