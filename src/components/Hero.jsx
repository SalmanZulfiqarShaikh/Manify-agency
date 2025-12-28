import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const projectCards = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    gradient: 'from-primary/20 to-secondary/20',
    rotate: '-6deg',
    delay: 0.2,
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    gradient: 'from-secondary/20 to-violet/20',
    rotate: '3deg',
    delay: 0.4,
  },
  {
    title: 'Mobile App',
    category: 'Product Design',
    gradient: 'from-violet/20 to-primary/20',
    rotate: '-3deg',
    delay: 0.6,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 spotlight-violet rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-32 left-10 w-2 h-2 rounded-full bg-primary/50 blur-sm"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-64 right-20 w-3 h-3 rounded-full bg-secondary/50 blur-sm"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-accent/50 blur-sm"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label-badge w-fit"
            >
              <Sparkles size={14} />
              <span>Creative Developer & Designer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Building{' '}
              <span className="text-gradient-teal">digital</span>
              <br />
              experiences that{' '}
              <span className="text-gradient-violet">inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg"
            >
              I craft stunning websites and web applications that help businesses 
              stand out and connect with their audience in meaningful ways.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="btn-secondary flex items-center justify-center gap-2">
                View Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mt-8 pt-8 border-t border-white/5"
            >
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[400px] lg:h-[600px] hidden md:block">
            {projectCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotate }}
                transition={{ duration: 0.8, delay: card.delay, ease: 'easeOut' }}
                className={`absolute glass-card rounded-2xl p-6 w-64 cursor-pointer transition-all duration-300 hover:scale-105`}
                style={{
                  top: `${index * 120 + 50}px`,
                  left: `${index * 40 + (index % 2 === 0 ? 0 : 60)}px`,
                  zIndex: projectCards.length - index,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: '0deg',
                  boxShadow: '0 0 60px hsl(var(--teal) / 0.2)',
                }}
              >
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${card.gradient} mb-4`} />
                <div className="text-xs text-primary font-medium mb-1">{card.category}</div>
                <div className="text-foreground font-semibold">{card.title}</div>
              </motion.div>
            ))}

            {/* Glowing Accent */}
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
