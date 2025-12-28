import { motion } from 'framer-motion';

const logos = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Coursera", src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" },
  { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Zapier", src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg" },
  { name: "Reddit", src: "https://images.icon-icons.com/2972/PNG/512/reddit_logo_icon_186876.png" },
  { name: "Canva", src: "https://1000logos.net/wp-content/uploads/2023/02/Canva-logo.png" },
];

const TrustedBy = () => {
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

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-slow">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              style={{ minWidth: '120px' }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
