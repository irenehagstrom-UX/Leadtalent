import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with this coach transformed not just my leadership style, but my entire approach to decision-making. The ROI has been immeasurable—both for me personally and for our organization's bottom line.",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVentures Inc.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote:
      "In six months, I went from feeling overwhelmed by my responsibilities to leading with clarity and confidence. The tools and frameworks I learned continue to serve me every single day.",
    name: "Michael Rodriguez",
    role: "COO",
    company: "Global Dynamics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote:
      "This coaching engagement was the catalyst for a complete cultural transformation in our organization. The ripple effects of my personal growth touched every level of the company.",
    name: "Jennifer Park",
    role: "Chief People Officer",
    company: "Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section ref={ref} className="py-32 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-ui text-sm tracking-wider uppercase text-sienna">
            Client testimonials
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-charcoal">
            Transformations that speak
          </h2>
        </motion.div>

        <div className="relative overflow-hidden min-h-[400px] mb-12">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="bg-white rounded-lg p-12 md:p-16 shadow-xl pointer-events-auto">
                <Quote className="w-12 h-12 text-sienna/20 mb-8" />

                <blockquote className="font-body text-xl md:text-2xl text-charcoal leading-relaxed mb-12">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display font-semibold text-lg text-charcoal">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="font-body text-sage">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-sienna w-8" : "bg-sage/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
      </div>
    </section>
  );
}
