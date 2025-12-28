import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, ExternalLink, Handshake } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/923357947721';
const GITHUB_LINK = 'https://github.com/SalmanZulfiqarShaikh';

// SVG Icons for platforms
const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const FiverrIcon = () => (
  <img 
    src="https://logos-world.net/wp-content/uploads/2020/12/Fiverr-Logo.png" 
    alt="Fiverr" 
    className="w-10 h-8 object-contain"
    style={{ filter: 'brightness(0) invert(1)' }}
  />
);

const platforms = [
  {
    name: 'Hire on Upwork',
    description: 'Top-rated team with 100% job success',
    link: '#',
    badge: 'Top Rated',
    icon: UpworkIcon,
  },
  {
    name: 'Hire on Fiverr',
    description: 'Level 2 seller with excellent reviews',
    link: '#',
    badge: 'Level 2',
    icon: FiverrIcon,
  },
  {
    name: 'Direct Hire',
    description: 'Work with us directly for the best rates',
    link: WHATSAPP_LINK,
    badge: 'Recommended',
    icon: () => <Handshake className="w-8 h-8" />,
  },
];

const ContactStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-deep-alt/30">
      {/* Background Glow */}
      <div className="absolute inset-0 spotlight opacity-40 pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="relative glass-card rounded-3xl p-8 md:p-12 text-center mb-16 overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center glow-neutral"
            >
              <Sparkles size={36} className="text-foreground" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Already have an <span className="text-gradient-light">MVP</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let us turn it into a fully polished product — fast, scalable, and ready for growth. 
              Our team will bring your vision to life with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
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
            </div>
          </div>
        </motion.div>

        {/* Platforms Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Or hire us through these platforms
          </h3>

          <div className="grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.link}
                  target={platform.link.startsWith('http') ? '_blank' : undefined}
                  rel={platform.link.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card glass-card-hover rounded-xl p-6 snap-center min-w-[280px] md:min-w-0 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {platform.badge}
                    </span>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {platform.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStrip;
