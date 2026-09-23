const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') && !file.includes('animations')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('d:/Target Digital Solution/Target-Digital-Solutions/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('.map(')) return;
  
  let modified = false;

  // Let's manually replace the 5 specific missing ones for absolute safety:
  if (file.includes('stats-section.tsx')) {
    if (content.includes('<div key={key} className="w-[45%] md:w-auto shrink-0 flex flex-col items-center group cursor-default">')) {
       content = content.replace('<div key={key} className="w-[45%] md:w-auto shrink-0 flex flex-col items-center group cursor-default">', '<StaggerItem key={key} className="w-[45%] md:w-auto shrink-0 flex flex-col items-center group cursor-default">');
       content = content.replace('</p>\n                </div>\n              );', '</p>\n                </StaggerItem>\n              );');
       modified = true;
    }
  }

  if (file.includes('testimonials-section.tsx')) {
    if (content.includes('className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 rtl:pl-0 rtl:pr-4 py-4"')) {
       // testimonials are wrapped in embla, we can just use StaggerItem or ZoomIn
       content = content.replace('{testimonials.map((item) => (', '{testimonials.map((item, index) => (');
       content = content.replace('<div \n                  key={item.id} \n                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 rtl:pl-0 rtl:pr-4 py-4"\n                >', '<ZoomIn delay={index * 0.1} key={item.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 rtl:pl-0 rtl:pr-4 py-4">');
       content = content.replace('</TestimonialCard>\n                </div>\n              ))}  ', '</TestimonialCard>\n                </ZoomIn>\n              ))}  ');
       if (!content.includes('import { ZoomIn }')) {
         content = content.replace('import { useTranslations }', 'import { ZoomIn } from "@/components/shared/animations";\nimport { useTranslations }');
       }
       modified = true;
    }
  }

  if (file.includes('certificates-section.tsx')) {
    if (content.includes('return (\n                <div \n                  key={cert.id}')) {
       content = content.replace('return (\n                <div \n                  key={cert.id}', 'return (\n                <ZoomIn delay={index * 0.1} key={cert.id}');
       content = content.replace('</div>\n              );\n            })} ', '</ZoomIn>\n              );\n            })} ');
       if (!content.includes('import { ZoomIn }')) {
         content = content.replace('import { useTranslations }', 'import { ZoomIn } from "@/components/shared/animations";\nimport { useTranslations }');
       }
       modified = true;
    }
  }

  if (file.includes('portfolio-list.tsx')) {
    if (content.includes('          {filteredProjects.map((project, index) => (\n            <ProjectCard key={project.id} project={project} index={index} />\n          ))}\n')) {
       content = content.replace(
         '          {filteredProjects.map((project, index) => (\n            <ProjectCard key={project.id} project={project} index={index} />\n          ))}\n',
         '          {filteredProjects.map((project, index) => (\n            <FadeIn key={project.id} delay={index * 0.1}><ProjectCard project={project} index={index} /></FadeIn>\n          ))}\n'
       );
       if (!content.includes('import { FadeIn }')) {
         content = content.replace('import { ProjectCard }', 'import { FadeIn } from "@/components/shared/animations";\nimport { ProjectCard }');
       }
       modified = true;
    }
  }
  
  if (file.includes('portfolio-filter.tsx')) {
    if (content.includes('          return (\n            <div key={category.id} className="flex items-center gap-2 md:gap-4">\n              <button')) {
       content = content.replace('return (\n            <div key={category.id}', 'return (\n            <ZoomIn delay={index * 0.05} key={category.id}');
       content = content.replace('</span>\n              </button>\n            </div>\n          );\n        })} ', '</span>\n              </button>\n            </ZoomIn>\n          );\n        })} ');
       if (!content.includes('import { ZoomIn }')) {
         content = content.replace('import { useTranslations }', 'import { ZoomIn } from "@/components/shared/animations";\nimport { useTranslations }');
       }
       modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Modified ' + path.basename(file));
  }
});
