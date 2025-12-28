import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Hire on Upwork',
    description: 'Top-rated team with 100% job success',
    link: '#',
    badge: 'Top Rated',
  },
  {
    name: 'Hire on Fiverr',
    description: 'Level 2 seller with excellent reviews',
    link: '#',
    badge: 'Level 2',
  },
  {
    name: 'Direct Hire',
    description: 'Work with us directly for the best rates',
    link: '#contact',
    badge: 'Recommended',
  },
];

const ContactStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-deep-alt/30">
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
              Already have a <span className="text-gradient-light">design</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let us turn it into a live website — clean, fast, and conversion-ready. 
              Our team will bring your vision to life with pixel-perfect precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@example.com" className="btn-primary flex items-center justify-center gap-2 group">
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="btn-secondary flex items-center justify-center gap-2">
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
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
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
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {platform.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStrip;
