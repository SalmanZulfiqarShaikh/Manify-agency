import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Search, Layers, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building robust, high-performance websites with clean code and modern frameworks.',
    color: 'primary',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and seamless user experiences that delight users.',
    color: 'secondary',
  },
  {
    icon: Zap,
    title: 'Animation & Motion',
    description: 'Bringing websites to life with smooth, purposeful animations and micro-interactions.',
    color: 'accent',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improving search rankings with technical SEO and performance optimization.',
    color: 'primary',
  },
  {
    icon: Layers,
    title: 'CMS Integration',
    description: 'Implementing content management systems for easy content updates and scalability.',
    color: 'secondary',
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Connecting applications with third-party services and building custom APIs.',
    color: 'accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return 'text-primary group-hover:bg-primary/10 border-primary/20';
      case 'secondary':
        return 'text-secondary group-hover:bg-secondary/10 border-secondary/20';
      case 'accent':
        return 'text-accent group-hover:bg-accent/10 border-accent/20';
      default:
        return 'text-primary group-hover:bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 spotlight-violet opacity-50 pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-badge mb-4">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            I can help you build{' '}
            <span className="text-gradient-teal">better</span>
            <br className="hidden sm:block" />
            online experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, I offer comprehensive web development and design services
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
          {services.map((service) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group glass-card glass-card-hover rounded-2xl p-6 md:p-8"
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
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
