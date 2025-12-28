import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "Manify transformed our online presence completely. Their attention to detail and creative approach exceeded all expectations.",
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc."
  },
  {
    quote: "The automation solutions they built saved us countless hours every week. Professional team with exceptional communication.",
    name: "James Chen",
    role: "Operations Director, ScaleUp Co."
  },
  {
    quote: "Working with Manify was a game-changer. They delivered a stunning website that perfectly captures our brand identity.",
    name: "Emma Rodriguez",
    role: "Founder, Creative Studio"
  }
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 h-full"
  >
    <Quote size={32} className="text-muted-foreground/30 mb-4" />
    <p className="text-foreground mb-6 leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div>
      <p className="text-foreground font-medium">{testimonial.name}</p>
      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What our clients say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </motion.div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
