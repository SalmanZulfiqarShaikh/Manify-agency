import { useState, useRef, memo, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do you build AI automations or n8n workflows?',
    answer: 'We design custom AI automations and n8n workflows tailored to your business needs. This includes connecting various APIs, setting up triggers, and creating intelligent decision trees that automate repetitive tasks and enhance productivity.',
  },
  {
    question: 'What tools do you use for automation and AI agents?',
    answer: 'We work with n8n, Make (Integromat), Zapier, and custom solutions. For AI agents, we leverage OpenAI, Anthropic, and other LLM providers to build intelligent systems that can handle customer support, data processing, and workflow automation.',
  },
  {
    question: 'How can automation help my product or MVP?',
    answer: 'Automation reduces manual work, speeds up processes, and ensures consistency. For MVPs, it helps you validate ideas faster without hiring a large team. From lead nurturing to data sync and notifications, automation keeps your product running smoothly.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timeline varies based on project complexity. A simple automation or landing page typically takes 1-2 weeks, while a full product or web application can take 4-8 weeks. We provide a detailed timeline estimate during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes! We offer maintenance packages that include regular updates, security patches, workflow monitoring, and technical support. This ensures your automations and products stay current and perform optimally.',
  },
];

// Scroll to contact helper
const scrollToContact = (e) => {
  e.preventDefault();
  const el = document.getElementById('contact-form');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const FaqItem = memo(({ faq, isOpen, onClick, index, prefersReducedMotion }) => {
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : index * 0.1 }}
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
});

FaqItem.displayName = 'FaqItem';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleItemClick = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="label-badge mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Common{' '}
            <span className="text-gradient-light">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Can&apos;t find what you&apos;re looking for? Feel free to reach out directly.
          </p>
          <a 
            href="#contact-form"
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Us
          </a>
        </motion.div>

        {/* FAQ Items */}
        <div ref={ref} className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Faq);
