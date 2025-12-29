import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const projectImages = [
  'https://preview.redd.it/from-bridge-troll-to-8-figure-boss-all-thanks-to-one-simple-v0-lbkmy9pulu0f1.jpeg?width=640&crop=smart&auto=webp&s=d1f9e7b8b24dabf27f0ced3ff1026a35c2bb3d7b',
  'https://cdn.dribbble.com/userupload/16450697/file/original-e6936e0048bb5f3eff760e3182576c05.png?resize=400x0',
  'https://cdn.dribbble.com/userupload/16394212/file/original-c93733561f565d650dce4b759a417fb0.png?resize=400x0',
  'https://s3-alpha.figma.com/hub/file/5399439708/200334e3-04ba-4ce8-a267-17357790d405-cover.png',
];

const GITHUB_LINK = 'https://github.com/SalmanZulfiqarShaikh';

// Memoized project card - no links, no pointer
const ProjectCard = memo(({ img, tiltClass }) => (
  <div
    className={`flex-shrink-0 mx-4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none ${tiltClass}`}
    style={{ width: '320px', height: '220px', willChange: 'transform' }}
  >
    <img 
      src={img} 
      alt="" 
      loading="lazy"
      className="w-full h-full object-cover bg-muted pointer-events-none"
    />
  </div>
));

ProjectCard.displayName = 'ProjectCard';

// Scroll to contact helper
const scrollToContact = (e) => {
  e.preventDefault();
  const el = document.getElementById('contact-form');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement && !prefersReducedMotion) {
      heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove, prefersReducedMotion]);

  // Memoize project cards array
  const projectCards = useMemo(() => {
    const images = [...projectImages, ...projectImages, ...projectImages];
    return images.map((img, index) => {
      const tiltPattern = index % 3;
      const tiltClass = tiltPattern === 0 
        ? '-rotate-6' 
        : tiltPattern === 2 
          ? 'rotate-6' 
          : '-rotate-1';
      return <ProjectCard key={index} img={img} tiltClass={tiltClass} />;
    });
  }, []);

  // Animation variants for reduced motion
  const fadeVariant = prefersReducedMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section ref={heroRef} className="relative min-h-screen pt-20 md:pt-24 overflow-hidden flex flex-col">
      {/* Cursor Glow Effect - Desktop only, skip if reduced motion */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute pointer-events-none z-0 hidden md:block"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: theme === 'dark' 
              ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.08) 30%, rgba(59,130,246,0.06) 50%, transparent 70%)',
            willChange: 'transform',
          }}
        />
      )}

      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 spotlight-neutral rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating Orbs - skip on mobile and reduced motion */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-32 left-10 w-2 h-2 rounded-full bg-white/20 blur-sm hidden md:block"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            className="absolute top-64 right-20 w-3 h-3 rounded-full bg-white/15 blur-sm hidden md:block"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-white/10 blur-sm hidden md:block"
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          />
        </>
      )}

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center text-center gap-6 py-12 lg:py-16">
          <motion.div
            initial={fadeVariant.initial}
            animate={fadeVariant.animate}
            transition={{ duration: 0.5 }}
            className="label-badge"
          >
            <Sparkles size={14} />
            <span>Bringing Manifestations to Life</span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          >
            We build{' '}
            <span className="text-gradient-light">digital</span>
            <br />
            experiences that{' '}
            <span className="text-gradient-neutral">manifest</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl"
          >
            Our studio crafts stunning websites, automates workflows, and integrates AI solutions 
            that help businesses stand out and scale effortlessly.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a 
              href="#contact-form"
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/5"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Project Cards  - Unclickable, Faster */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative w-full overflow-hidden py-10 border-t border-white/5"
      >
        <div 
          className={`flex ${prefersReducedMotion ? '' : 'animate-marquee-fast'}`}
          style={{ willChange: 'transform' }}
        >
          {projectCards}
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
