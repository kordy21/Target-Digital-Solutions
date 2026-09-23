const fs = require('fs');
const glob = ['about', 'services', 'portfolio', 'clients', 'faq', 'contact'];

glob.forEach(folder => {
  const file = 'd:/Target Digital Solution/Target-Digital-Solutions/src/app/[locale]/' + folder + '/page.tsx';
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('FadeIn')) return;
  
  content = content.replace(/import \{ ([^}]+) \} from "@\/features/g, 'import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";\nimport { $1 } from "@/features');
  
  content = content.replace(/<([A-Z][a-zA-Z0-9]+Section) \/>/g, (match, p1) => {
    const anims = ['FadeIn direction="up"', 'ZoomIn', 'SlideIn direction="left"', 'ScaleIn', 'FlipIn direction="x"'];
    const anim = anims[Math.floor(Math.random() * anims.length)];
    return '<' + anim.split(' ')[0] + ' delay={0.1}' + (anim.includes(' ') ? ' ' + anim.split(' ').slice(1).join(' ') : '') + '><' + p1 + ' /></' + anim.split(' ')[0] + '>';
  });

  content = content.replace(/<([A-Z][a-zA-Z0-9]+List) \/>/g, (match, p1) => {
    return '<FadeIn direction="up" delay={0.1}><' + p1 + ' /></FadeIn>';
  });

  content = content.replace(/<([A-Z][a-zA-Z0-9]+Cards) \/>/g, (match, p1) => {
    return '<ScaleIn delay={0.1}><' + p1 + ' /></ScaleIn>';
  });
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Animated ' + folder + '/page.tsx');
});
