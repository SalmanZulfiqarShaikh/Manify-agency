import { motion, useInView } from 'framer-motion';
import { useRef, memo, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const GITHUB_LINK = 'https://github.com/SalmanZulfiqarShaikh';

const projects = [
  {
    title: 'SEO Dashboard',
    category: 'SEO Optimization',
    image: 'https://cdn.dribbble.com/userupload/3727510/file/original-d5a961960f20255d075b714697306c27.png?format=webp&resize=400x300&vertical=center',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://xdfile.com/wp-content/uploads/2020/03/lafyuu_ui_kit-1.jpg',
  },
  {
    title: 'Mobile Banking App',
    category: 'App Development',
    image: 'https://s3-alpha.figma.com/hub/file/866576731/c42b7715-5384-42b3-8328-2e7cea2d6ddf-cover.png',
  },
  {
    title: 'AI Workflow System',
    category: 'AI Automation',
    image: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/image_d96a5a6593.png',
  },
];

const ProjectCard = memo(({ project, index, isInView, prefersReducedMotion }) => (
  <motion.a
    href={GITHUB_LINK}
    target="_blank"
    rel="noreferrer"
    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
    className="group glass-card glass-card-hover rounded-2xl overflow-hidden"
    style={{ willChange: 'transform' }}
  >
    {/* Project Image Area */}
    <div className="relative h-48 md:h-64 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ willChange: 'transform' }}
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="btn-primary text-sm flex items-center gap-2">
          View Project
          <ArrowUpRight size={16} />
        </span>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-xl font-semibold text-foreground mt-2">
        {project.title}
      </h3>
    </div>
  </motion.a>
));

ProjectCard.displayName = 'ProjectCard';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden bg-deep-alt/30">
      <div className="section-container relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="label-badge mb-4">Selected Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Recent <span className="text-gradient-light">projects</span>
          </h2>
          <a 
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Work
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Work);
