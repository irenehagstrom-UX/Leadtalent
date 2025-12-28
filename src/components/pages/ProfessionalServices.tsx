import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Target,
  Users,
  ClipboardCheck,
  ArrowRight,
  Check,
  MessageSquare,
  FileText,
  UserCheck,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const serviceAnchors = [
  { id: "executive-coaching", title: "1:1 Executive coaching", icon: Target },
  { id: "team-development", title: "Team development", icon: Users },
  {
    id: "assessment-centres",
    title: "Assessment centres",
    icon: ClipboardCheck,
  },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

export default function ProfessionalServices() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none" 
          style={{
            backgroundImage: "url('/images/paper birds-long.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-ui text-sm tracking-wider uppercase text-sienna mb-4">
              Professional Services
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-charcoal">
              Professional services for leaders, teams, and organizations
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-warmgray leading-relaxed max-w-3xl mx-auto"
          >
            I partner with executives, leadership teams, and HR organizations to
            strengthen leadership capability, improve collaboration, and support
            sustainable performance. My work combines deep assessment expertise
            with coaching, facilitation, and evidence-based frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-ui px-8 py-4 bg-[#A84867] hover:bg-[#8a3a54] text-cream rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Book an introductory call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Overview / Anchor Navigation */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal">
              Service offerings
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceAnchors.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  onClick={() => scrollToSection(service.id)}
                  className="group bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-1 text-left"
                >
                  <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center mb-4 group-hover:bg-sienna/20 transition-colors">
                    <Icon className="w-7 h-7 text-sienna" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 font-ui text-sm text-linkBlue">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Section 1: Executive Coaching */}
      <section
        id="executive-coaching"
        className="py-24 px-8 md:px-16 lg:px-24 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-sienna" />
              </div>
              <h2 className="font-display font-semibold text-4xl text-charcoal">
                1:1 Executive coaching
              </h2>
            </div>
            <p className="font-body text-lg text-warmgray leading-relaxed">
              Personalized executive coaching designed to support leaders
              through growth, transition, and complex change — helping them
              build clarity, confidence, and impact.
            </p>
          </AnimatedSection>

          {/* Coaching Approach */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                A collaborative coaching partnership
              </h3>
              <div className="font-body text-warmgray leading-relaxed space-y-4">
                <p>
                  Executive coaching is a confidential and collaborative
                  partnership. Rather than providing direct advice or
                  instructions, I support leaders in finding their own answers,
                  strengthening self-awareness, and unlocking their full
                  potential.
                </p>
                <p>
                  I act as a sparring partner, challenging perspectives and
                  supporting reflective decision-making during change processes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Personal Development Plan */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Tailored development plan
              </h3>
              <p className="font-body text-warmgray leading-relaxed mb-6">
                Each coaching engagement begins with a personal development
                plan, designed in close collaboration with the client. The plan
                is tailored to individual goals, role context, and leadership
                challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Clear leadership objectives",
                  "Actionable development strategies",
                  "Ongoing reflection and progress tracking",
                  "Practical application in day-to-day leadership situations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sienna mt-0.5 flex-shrink-0" />
                    <span className="font-body text-warmgray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Duration & Format */}
          <AnimatedSection>
            <div className="bg-charcoal rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl text-cream mb-4">
                Engagement format
              </h3>
              <p className="font-body text-sage leading-relaxed">
                Executive coaching typically runs between three and twelve
                months, depending on individual needs, goals, and organizational
                context. Sessions are structured, focused, and aligned with real
                business challenges.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full h-px bg-sage/20"></div>

      {/* Service Section 2: Team Development */}
      <section
        id="team-development"
        className="py-24 px-8 md:px-16 lg:px-24 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-sienna" />
              </div>
              <h2 className="font-display font-semibold text-4xl text-charcoal">
                Team development
              </h2>
            </div>
            <p className="font-body text-lg text-warmgray leading-relaxed">
              Transform leadership teams into high-performing units aligned on
              vision, values, and execution.
            </p>
          </AnimatedSection>

          {/* Focus Areas */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Focus areas
              </h3>
              <p className="font-body text-warmgray leading-relaxed mb-6">
                Team development initiatives are designed to strengthen
                collaboration, leadership effectiveness, and shared
                accountability.
              </p>
              <div className="space-y-3">
                {[
                  "Leadership alignment and shared purpose",
                  "Team dynamics and trust",
                  "Communication and feedback culture",
                  "Decision-making and problem-solving",
                  "Navigating complexity and change",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sienna mt-2 flex-shrink-0"></div>
                    <span className="font-body text-warmgray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Formats & Methods */}
          <AnimatedSection>
            <div className="bg-[#f4f2ef] rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-6">
                Formats & Interventions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: MessageSquare,
                    label: "Team assessments & diagnostics",
                  },
                  { icon: Users, label: "Quarterly offsite facilitation" },
                  { icon: Target, label: "Group coaching sessions" },
                  {
                    icon: FileText,
                    label: "Custom leadership and team frameworks",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-white rounded-lg p-4"
                    >
                      <Icon className="w-5 h-5 text-sienna" />
                      <span className="font-body text-warmgray">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="font-body text-warmgray leading-relaxed">
                Sessions include structured discussions, reflective exercises,
                and practical activities. Participants share insights and
                challenges, receive peer feedback, and learn within a
                psychologically safe and collaborative environment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full h-px bg-sage/20"></div>

      {/* Service Section 3: Assessment Centres */}
      <section
        id="assessment-centres"
        className="py-24 px-8 md:px-16 lg:px-24 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center">
                <ClipboardCheck className="w-7 h-7 text-sienna" />
              </div>
              <h2 className="font-display font-semibold text-4xl text-charcoal">
                Assessment centres
              </h2>
            </div>
            <p className="font-body text-lg text-warmgray leading-relaxed">
              Fair, structured, and evidence-based assessment centres to support
              hiring, promotion, and leadership development decisions.
            </p>
          </AnimatedSection>

          {/* Assessment Design */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Aligned with organizational goals
              </h3>
              <p className="font-body text-warmgray leading-relaxed">
                I collaborate closely with HR professionals and hiring managers
                to ensure that assessment exercises are aligned with
                organizational values, leadership expectations, and
                role-specific requirements.
              </p>
            </div>
          </AnimatedSection>

          {/* Methods & Expertise */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Assessment methods
              </h3>
              <p className="font-body text-warmgray leading-relaxed mb-6">
                With extensive experience facilitating assessment centres, I
                design and lead exercises such as:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Leadership simulations and role-play exercises",
                  "Psychometric assessments",
                  "Structured candidate interviews",
                  "Group exercises and case-based tasks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sienna mt-0.5 flex-shrink-0" />
                    <span className="font-body text-warmgray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Leadership Competencies */}
          <AnimatedSection className="mb-12">
            <div className="bg-[#f4f2ef] rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Leadership competency evaluation
              </h3>
              <p className="font-body text-warmgray leading-relaxed mb-6">
                With over 25 years of experience as an assessor and coach, I
                ensure fair, consistent, and transparent evaluation of
                candidates' suitability and leadership potential.
              </p>
              <p className="font-body text-warmgray leading-relaxed mb-4">
                Assessed competencies include:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Communication and influence",
                  "Decision-making and judgment",
                  "Emotional intelligence",
                  "Collaboration and leadership presence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white rounded-lg p-4"
                  >
                    <UserCheck className="w-5 h-5 text-sienna" />
                    <span className="font-body text-warmgray">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sage text-sm mt-6">
                Structured competency models and clear assessment criteria are
                used throughout.
              </p>
            </div>
          </AnimatedSection>

          {/* Results & Feedback */}
          <AnimatedSection>
            <div className="bg-charcoal rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl text-cream mb-4">
                Clear results and development feedback
              </h3>
              <p className="font-body text-sage leading-relaxed mb-6">
                Participants and organizations receive constructive, actionable
                feedback highlighting strengths, development areas, and
                leadership potential.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Detailed written assessment reports",
                  "One-on-one feedback sessions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sienna" />
                    <span className="font-body text-cream">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-cream/80 italic">
                A professional development plan combined with individual
                coaching is often the most effective path for supporting
                managers in their transition into strong, confident leaders.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section id="cta" className="py-24 px-8 md:px-16 lg:px-24 bg-sienna">
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-cream leading-tight">
            Let's talk about your leadership needs
          </h2>
          <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
            Whether you are supporting individual leaders, developing leadership
            teams, or making critical talent decisions, I'd be happy to explore
            how we can work together.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-ui px-10 py-5 bg-cream hover:bg-white text-charcoal rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
