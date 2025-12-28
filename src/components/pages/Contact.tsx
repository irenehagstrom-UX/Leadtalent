import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Image } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Encouragement */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-charcoal">
              Contact & Impressum
            </h1>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="/images/frank_chari.jpg"
                alt="Frank Berton"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight">
                Let me help you excel
              </h2>
              <p className="font-body text-base text-warmgray leading-relaxed">
                Whether you're looking to enhance your leadership skills, navigate a career transition, or unlock your team's potential, I'm here to support your journey. Reach out using any of the contact methods below.
              </p>
              <div className="font-body text-base text-warmgray leading-relaxed mt-6 pt-6 border-t border-sage">
                <p className="font-semibold text-charcoal">LeadTalent Consulting</p>
                <p>Südwestkorso 65</p>
                <p>12161 Berlin</p>
                <p className="mt-3">frank.berton@leadtalent.de</p>
                <p>+49 1514 033 71 87</p>
                <a href="https://www.linkedin.com/in/frank-berton/" target="_blank" rel="noopener noreferrer" className="text-[#A84867] hover:underline">LinkedIn profile</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Image References */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Image className="w-6 h-6 text-sage mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                Image references
              </h3>
              <p className="font-body text-sage">
                All images are purchased stock photos or copyright of Frank Berton
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      <Footer />
    </div>
  );
}
