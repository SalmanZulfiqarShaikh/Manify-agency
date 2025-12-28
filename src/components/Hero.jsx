import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github, Linkedin } from 'lucide-react';

const projectCards = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
  },
  {
    title: 'AI Integration',
    category: 'Automation',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Full Stack',
  },
  {
    title: 'Mobile App',
    category: 'App Development',
  },
  {
    title: 'SEO Campaign',
    category: 'Marketing',
  },
  {
    title: 'Workflow System',
    category: 'Automation',
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden flex flex-col">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 spotlight-bronze rounded-full blur-3xl pointer-events-none" />
      
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

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center text-center gap-6 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-badge"
          >
            <Sparkles size={14} />
            <span>Bringing Manifestations to Life</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          >
            We build{' '}
            <span className="text-gradient-bronze">digital</span>
            <br />
            experiences that{' '}
            <span className="text-gradient-copper">manifest</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl"
          >
            Our studio crafts stunning websites, automates workflows, and integrates AI solutions 
            that help businesses stand out and scale effortlessly.
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
              View Our Work
            </a>
          </motion.div>

          {/* GitHub / LinkedIn Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <a
              href="https://github.com/SalmanZulfiqarShaikh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted/50 text-foreground border border-white/10 rounded-full hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <Github size={16} />
              Visit our GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/salmanzulfiqarshaikh/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted/50 text-foreground border border-white/10 rounded-full hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin size={16} />
              Visit our LinkedIn
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/5"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Project Cards Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full overflow-hidden py-8 border-t border-white/5"
      >
        <div className="flex animate-marquee">
          {[...projectCards, ...projectCards].map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 glass-card rounded-xl p-4 w-56 pointer-events-none"
            >
              <div className="w-full h-24 rounded-lg bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 mb-3" />
              <div className="text-xs text-primary font-medium mb-1">{card.category}</div>
              <div className="text-foreground font-medium text-sm">{card.title}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
