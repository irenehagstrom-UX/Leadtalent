import HeroSection from './HeroSection';
import PhilosophySection from './PhilosophySection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import CredentialsBar from './CredentialsBar';
import CTASection from './CTASection';
import Footer from './Footer';
import Navigation from './Navigation';

function Home() {
  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <HeroSection />
      </div>
      
      <div className="w-full h-px bg-sage/20 my-32"></div>
      
      <div id="philosophy">
        <PhilosophySection />
      </div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      <CredentialsBar />
      
      <CTASection />
      
      <Footer />
    </div>
  );
}

export default Home;
