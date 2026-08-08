import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Frank brought his thoughtful brand of support, enthusiasm and experience in dealing with change to each meeting. With the aid of weekly exercises, Frank helped me to understand my core values, the reasons that I will be successful and through this to ultimately identify my future career path. Combined with practical guidance for CV writing, job searching, and career planning Frank helped immeasurably with my successful career progression.",
    name: "Kenneth Young",
    role: "VP Global Pharma",
    company: "",
    image: "/images/ken_young.jpeg",
  },
  {
    quote:
      "Working with Frank was a grounding experience during a very uncertain time. After being laid off, I felt overwhelmed and unsure of my next steps, but his coaching helped me regain clarity and confidence. He asks thoughtful questions and creates a space where you feel truly heard. What I appreciated most was his practical, down-to-earth advice that I could apply right away. Each session left me feeling more focused, motivated, and ready to move forward. I'm very grateful for his guidance and highly recommend him to anyone navigating a transition or seeking a fresh perspective.",
    name: "Irina Klusova",
    role: "Senior HR Manager - Global Pharma - Dubai",
    company: "",
    image:
      "/images/Irina_Klusova.jpeg",
  },
  {
    quote:
      "Working with Frank made a real difference during my job search. It was always a pleasure having a session with him because he brought a positive attitude coupled with valuable tips. Frank helped me identify a range roles that could build on my expertise while challenging me in new industries / company scales. He then provided valuable feedback to my CV in the context of the different roles I decided to target. Once I was applying and going through interviews, he helped me build the confidence needed to ace the process. Practical, supportive, and exactly what I needed.",
    name: "Elitsa Manova",
    role: "Head of Strategy",
    company: "HelloFresh",
    image: "/images/Manova.jpeg",
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

        <div className="relative mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
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
              className="w-full"
            >
              <div className="bg-white rounded-lg p-6 md:p-12 lg:p-16 shadow-xl">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-sienna/20 mb-3 md:mb-4" />

                <blockquote className="font-body text-base md:text-lg lg:text-xl text-charcoal leading-relaxed mb-6 md:mb-12">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="font-display font-semibold text-base md:text-lg text-charcoal">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="font-body text-sm md:text-base text-sage">
                      {testimonials[currentIndex].role}{testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
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
