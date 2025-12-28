import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Clock, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/salmanzulfiqarshaikh/',
    label: 'Visit LinkedIn profile',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/SalmanZulfiqarShaikh',
    label: 'Visit GitHub profile',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/',
    label: 'Visit Instagram profile',
  },
];

// Pakistan Flag SVG Component
const PakistanFlag = () => (
  <svg
    viewBox="0 0 900 600"
    className="w-5 h-4 inline-block"
    aria-label="Pakistan flag"
  >
    <rect fill="#01411C" width="900" height="600" />
    <rect fill="#FFFFFF" width="225" height="600" />
    <circle fill="#FFFFFF" cx="583" cy="300" r="150" />
    <circle fill="#01411C" cx="610" cy="300" r="120" />
    <polygon
      fill="#FFFFFF"
      points="663,105 693,195 788,195 713,255 738,345 663,285 588,345 613,255 538,195 633,195"
    />
  </svg>
);

const Footer = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-12 md:py-16 border-t border-white/5 bg-deep-alt/20">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm">
              From <span className="text-foreground font-medium">Karachi</span> with passion
            </p>
          </motion.div>

          {/* Center - Local Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Clock size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Local time:</span>
            <span className="text-sm text-foreground font-medium">{localTime}</span>
          </motion.div>

          {/* Right - Credits & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Credits with heart outline and Pakistan flag */}
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center">
              Made with{' '}
              <Heart size={14} className="text-primary" strokeWidth={2} />{' '}
              in <PakistanFlag /> Pakistan
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Manify. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="text-[12vw] font-bold text-white/[0.015] whitespace-nowrap tracking-tighter">
          MANIFY STUDIO
        </div>
      </div>
    </footer>
  );
};

export default Footer;
