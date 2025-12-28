import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with seamless checkout experience.',
    gradient: 'from-primary/30 via-primary/10 to-transparent',
    accent: 'primary',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive analytics dashboard for data-driven decisions.',
    gradient: 'from-secondary/30 via-secondary/10 to-transparent',
    accent: 'secondary',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Secure and user-friendly banking experience on mobile.',
    gradient: 'from-accent/30 via-accent/10 to-transparent',
    accent: 'accent',
  },
  {
    title: 'Real Estate Platform',
    category: 'Full Stack',
    description: 'Property listing platform with advanced search features.',
    gradient: 'from-primary/30 via-secondary/10 to-transparent',
    accent: 'primary',
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden bg-deep-alt/30">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="label-badge mb-4">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Recent <span className="text-gradient-teal">projects</span>
            </h2>
          </div>
          <a 
            href="#contact" 
            className="btn-secondary inline-flex items-center gap-2 w-fit"
          >
            View All Work
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden"
            >
              {/* Project Image Area */}
              <div className={`relative h-48 md:h-64 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ExternalLink size={32} className="text-foreground/50" />
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-primary text-sm">View Project</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className={`text-xs font-medium text-${project.accent} uppercase tracking-wider`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
