import { motion, useInView } from 'framer-motion';
import { useRef, memo, useState, useEffect } from 'react';
import { MessageSquare, Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'Understanding your goals, target audience, and project requirements.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Crafting a roadmap and technical approach tailored to your needs.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description: 'Creating stunning visuals and intuitive user interfaces.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Development',
    description: 'Building your project with clean, scalable code.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project and providing ongoing support.',
  },
];

const StepCard = memo(({ step, index, isInView, isLast, prefersReducedMotion }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
      className="relative group"
    >
      <div className="glass-card glass-card-hover rounded-2xl p-6 text-center h-full" style={{ willChange: 'transform' }}>
        {/* Step Number */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          {step.number}
        </div>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
          <Icon size={28} className="text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {step.description}
        </p>
      </div>

      {/* Arrow - Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rotate-45 -translate-y-1/2" />
      )}
    </motion.div>
  );
});

StepCard.displayName = 'StepCard';

const Process = () => {
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
    <section id="process" className="relative py-24 md:py-32 overflow-hidden bg-deep-alt/30">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-badge mb-4">Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            You&apos;re <span className="text-gradient-light">5 steps</span> away
            <br className="hidden sm:block" />
            from a new product
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <StepCard 
                key={step.number} 
                step={step} 
                index={index} 
                isInView={isInView}
                isLast={index === steps.length - 1}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Process);
