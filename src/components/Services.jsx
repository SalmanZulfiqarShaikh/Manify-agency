import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
      <div className="absolute inset-0 spotlight-bronze opacity-50 pointer-events-none" />
      
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
            We help you build{' '}
            <span className="text-gradient-bronze">better</span>
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
