import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Clock, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    name: 'Website',
    icon: Globe,
    url: 'https://salmanzulfi.dev',
    label: 'Visit personal website',
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
    className="w-5 h-4 inline-block border border-white/10 rounded-sm"
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
    <footer className="relative py-12 md:py-16 border-t border-white/5 bg-background">
      <div className="section-container">
        {/* Main Footer Content - 3 Areas */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Local Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Clock size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Local time:</span>
            <span className="text-sm text-foreground font-medium">{localTime}</span>
          </motion.div>

          {/* Center - Credits with Pakistan flag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-1 text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Made with{' '}
              <Heart size={14} className="text-muted-foreground" strokeWidth={1.5} />{' '}
              in <PakistanFlag /> Pakistan
            </p>
            <p className="text-sm text-muted-foreground">
              by <span className="text-foreground font-medium glow-text">Salman Zulfiqar Shaikh</span>
            </p>
          </motion.div>

          {/* Right - Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Read This Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 pt-6 border-t border-white/5"
        >
          <Link 
            to="/legal"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Read this
          </Link>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="text-[12vw] font-bold text-white/[0.01] whitespace-nowrap tracking-tighter">
          MANIFY STUDIO
        </div>
      </div>
    </footer>
  );
};

export default Footer;
