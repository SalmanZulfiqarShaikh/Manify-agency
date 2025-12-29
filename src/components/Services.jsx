import { motion, useInView } from 'framer-motion';
import { useRef, memo, useState, useEffect, useMemo, useCallback } from 'react';
import { Code, Zap, Search, Bot, Smartphone, Workflow } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building robust, high-performance websites with clean code and modern frameworks.',
    color: 'primary',
  },
  {
    icon: Workflow,
    title: 'Automation & Workflows',
    description: 'Streamlining your operations with smart automation and seamless integrations.',
    color: 'secondary',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improving search rankings with technical SEO and performance optimization.',
    color: 'accent',
  },
  {
    icon: Bot,
    title: 'AI Agents & Integrations',
    description: 'Implementing intelligent AI solutions that automate and enhance your business.',
    color: 'primary',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Creating mobile and web applications with intuitive user experiences.',
    color: 'secondary',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Connecting applications with third-party services and building custom APIs.',
    color: 'accent',
  },
];

const getColorClasses = (color) => {
  switch (color) {
    case 'primary':
      return 'text-foreground group-hover:bg-foreground/10 border-foreground/30';
    case 'secondary':
      return 'text-foreground group-hover:bg-foreground/10 border-foreground/30';
    case 'accent':
      return 'text-foreground group-hover:bg-foreground/10 border-foreground/30';
    default:
      return 'text-foreground group-hover:bg-foreground/10 border-foreground/30';
  }
};

const ServiceCard = memo(({ service, prefersReducedMotion }) => {
  const Icon = service.icon;
  const colorClasses = getColorClasses(service.color);
  
  return (
    <motion.div
      variants={prefersReducedMotion ? {} : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
      }}
      className="group glass-card glass-card-hover rounded-2xl p-6 md:p-8"
      style={{ willChange: 'transform' }}
    >
      <div className={`w-14 h-14 rounded-xl border ${colorClasses} flex items-center justify-center mb-6 transition-colors duration-300`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
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

  const containerVariants = useMemo(() => prefersReducedMotion ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }, [prefersReducedMotion]);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 spotlight-neutral opacity-50 pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-badge mb-4">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            We help you build{' '}
            <span className="text-gradient-light">better</span>
            <br className="hidden sm:block" />
            digital experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, our team offers comprehensive development and automation services
            tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);
