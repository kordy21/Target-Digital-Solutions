const fs = require('fs');
const glob = ['about', 'services', 'portfolio', 'clients', 'faq', 'contact'];

glob.forEach(folder => {
  const file = 'd:/Target Digital Solution/Target-Digital-Solutions/src/app/[locale]/' + folder + '/page.tsx';
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  const importString = 'import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";\n';
  
  // Remove all occurrences of the animation imports
  content = content.replace(/import \{ FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn \} from "@\/components\/shared\/animations";\r?\n?/g, '');
  
  // Prepend one at the top of the file after the first import (or just replace the first import with it + first import)
  content = content.replace(/import /i, importString + 'import ');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed imports in ' + folder + '/page.tsx');
});
