const fs = require('fs');
const file = 'd:/Target Digital Solution/Target-Digital-Solutions/src/components/shared/animations.tsx';
let content = fs.readFileSync(file, 'utf8');
const newAnimations = `

interface ZoomInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ZoomIn({ children, delay = 0, className = '' }: ZoomInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = '' }: ZoomInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FlipIn({ children, delay = 0, className = '', direction = 'x' }: ZoomInProps & { direction?: 'x' | 'y' }) {
  const initialRotation = direction === 'x' ? { rotateX: 90 } : { rotateY: 90 };
  const animateRotation = direction === 'x' ? { rotateX: 0 } : { rotateY: 0 };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...initialRotation }}
      whileInView={{ opacity: 1, ...animateRotation }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, delay = 0, className = '', direction = 'left' }: FadeInProps) {
  const directions = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: 100 },
    right: { x: -100 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay, type: 'tween', ease: 'easeOut', duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
`;

fs.appendFileSync(file, newAnimations);
console.log('Added new animations');
