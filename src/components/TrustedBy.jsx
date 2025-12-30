import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import { oracle, zapier, reddit, dropbox } from '@/assets/trustedby';

const logos = [
  { name: "Oracle", src: oracle },
  { name: "Zapier", src: zapier },
  { name: "Reddit", src: reddit },
  { name: "Dropbox", src: dropbox },
];

const TrustedBy = () => {
  const { theme } = useTheme();
  
  const logoStyle = theme === 'dark' 
    ? { filter: 'brightness(0) invert(1)', opacity: 0.4 }
    : { filter: 'grayscale(100%)', opacity: 0.5 };

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-lg md:text-xl font-medium text-muted-foreground">
            Trusted by top companies
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container - Infinite Seamless Loop */}
      <div className="relative w-full overflow-hidden">
        <div className="flex">
          <div className="flex animate-marquee-infinite">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`a-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain"
                  style={logoStyle}
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-infinite">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`b-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain"
                  style={logoStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
