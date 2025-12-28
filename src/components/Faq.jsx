import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and various animation libraries like Framer Motion and GSAP. I also work with headless CMS platforms and API integrations.',
  },
  {
    question: 'How does your pricing work?',
    answer: 'I offer both fixed-price and hourly rate options depending on project scope. For most projects, I provide a detailed quote after understanding your requirements. This ensures transparency and helps align expectations from the start.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timeline varies based on project complexity. A simple landing page typically takes 1-2 weeks, while a full website or web application can take 4-8 weeks. I\'ll provide a detailed timeline estimate during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes! I offer maintenance packages that include regular updates, security patches, content changes, and technical support. This ensures your website stays current and performs optimally.',
  },
  {
    question: 'Can I request revisions during the project?',
    answer: 'Absolutely. My process includes revision rounds at key milestones. I work collaboratively with clients to ensure the final product exceeds expectations. Open communication is key to successful projects.',
  },
];

const FaqItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-foreground font-medium pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="label-badge mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Common{' '}
              <span className="text-gradient-teal">questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can&apos;t find what you&apos;re looking for? Feel free to reach out directly.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Contact Me
            </a>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div ref={ref} className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
