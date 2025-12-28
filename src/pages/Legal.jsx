import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const imageCredits = [
  {
    description: 'Hero project card 1 (Reddit)',
    url: 'https://preview.redd.it/from-bridge-troll-to-8-figure-boss-all-thanks-to-one-simple-v0-lbkmy9pulu0f1.jpeg?width=640&crop=smart&auto=webp&s=d1f9e7b8b24dabf27f0ced3ff1026a35c2bb3d7b',
  },
  {
    description: 'Hero project card 2 (Dribbble)',
    url: 'https://cdn.dribbble.com/userupload/16450697/file/original-e6936e0048bb5f3eff760e3182576c05.png',
  },
  {
    description: 'Hero project card 3 (Dribbble)',
    url: 'https://cdn.dribbble.com/userupload/16394212/file/original-c93733561f565d650dce4b759a417fb0.png',
  },
  {
    description: 'Hero project card 4 (Figma Community)',
    url: 'https://s3-alpha.figma.com/hub/file/5399439708/200334e3-04ba-4ce8-a267-17357790d405-cover.png',
  },
  {
    description: 'SEO Dashboard (Dribbble)',
    url: 'https://cdn.dribbble.com/userupload/3727510/file/original-d5a961960f20255d075b714697306c27.png',
  },
  {
    description: 'E-commerce UI Kit (XD File)',
    url: 'https://xdfile.com/wp-content/uploads/2020/03/lafyuu_ui_kit-1.jpg',
  },
  {
    description: 'Mobile Banking App (Figma Community)',
    url: 'https://s3-alpha.figma.com/hub/file/866576731/c42b7715-5384-42b3-8328-2e7cea2d6ddf-cover.png',
  },
  {
    description: 'AI Workflow System (n8n)',
    url: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/image_d96a5a6593.png',
  },
  {
    description: 'Google Logo (Wikipedia)',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    description: 'Coursera Logo (Wikipedia)',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
  },
  {
    description: 'Oracle Logo (Wikipedia)',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
  },
  {
    description: 'Zapier Logo (Wikipedia)',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg',
  },
  {
    description: 'Reddit Logo (Icon-Icons)',
    url: 'https://images.icon-icons.com/2972/PNG/512/reddit_logo_icon_186876.png',
  },
  {
    description: 'Canva Logo (1000logos)',
    url: 'https://1000logos.net/wp-content/uploads/2023/02/Canva-logo.png',
  },
  {
    description: 'Fiverr Logo (Logos World)',
    url: 'https://logos-world.net/wp-content/uploads/2020/12/Fiverr-Logo.png',
  },
];

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-20 md:py-28">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Legal & Attribution
          </h1>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert max-w-none"
        >
          <div className="glass-card rounded-2xl p-6 md:p-10 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This website is a <strong className="text-foreground">demo project</strong> created for portfolio and educational purposes only. 
              It is <strong className="text-foreground">not intended for commercial use</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All images, designs, logos, and other visual assets used on this website belong to their respective owners. 
              These materials are used here solely for demonstration purposes and to showcase technical capabilities.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Image & Asset Credits</h2>
            <p className="text-muted-foreground mb-6">
              Below is a list of external images and resources used in this project:
            </p>
            <div className="space-y-4">
              {imageCredits.map((credit, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-foreground font-medium">{credit.description}</span>
                  <a 
                    href={credit.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 break-all"
                  >
                    <ExternalLink size={12} className="flex-shrink-0" />
                    <span className="truncate max-w-xs md:max-w-md">{new URL(credit.url).hostname}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact for Removal</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are the owner of any content featured on this website and would like it removed, 
              or if you have any concerns, please don't hesitate to reach out:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/salmanzulfiqarshaikh/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Contact via LinkedIn
                <ExternalLink size={16} />
              </a>
              <a
                href="mailto:salmanzulfiqar04@gmail.com"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Email: salmanzulfiqar04@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
