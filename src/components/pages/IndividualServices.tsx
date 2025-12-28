import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Phone,
  ClipboardList,
  Target,
  MessageSquare,
  Heart,
  Shield,
  Flame,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const coachingSteps = [
  {
    number: "01",
    title: "Free 15 minute Get-to-Know call",
    description:
      "A short, no-obligation conversation to help you understand how my coaching practice works, explore the options available, and see if we are a good fit for each other.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Understanding where you are today",
    description:
      "Before coaching begins, we establish a clear starting point. Through an assessment of your strengths and development areas, we gain insight into where the coaching focus should be and what will create the most impact.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Defining clear and meaningful goals",
    description:
      "Based on your personal goals and the assessment results, we define SMART goals, specific, measurable, achievable, relevant, and time bound, to guide the coaching journey and track progress.",
    icon: Target,
  },
  {
    number: "04",
    title: "In person or online coaching sessions",
    description:
      "During the coaching sessions, I support you in reflecting on progress, staying motivated, and taking concrete actions. You will be challenged to step outside your comfort zone while being supported to build confidence and momentum toward your goals.",
    icon: MessageSquare,
  },
];

const coachingValues = [
  {
    icon: Heart,
    title: "Honesty",
    description:
      "I provide frank, constructive feedback to support genuine insight and meaningful growth.",
  },
  {
    icon: Flame,
    title: "Courage",
    description:
      "I encourage you to step outside your comfort zone, challenge old patterns, and embrace change.",
  },
  {
    icon: Shield,
    title: "Commitment",
    description:
      "I am fully committed to your development and success through focused, rigorous, and supportive coaching.",
  },
];

const checklistItems = [
  "You are honest and open to receiving feedback",
  "You are motivated to improve and willing to take action",
  "You are ready to reflect, learn, and challenge yourself",
];

export default function IndividualServices() {
  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 md:px-16 lg:px-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/images/highfive.png)' }}
        />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-ui text-sm tracking-wider uppercase text-sienna mb-4">
              Personal Coaching
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-charcoal">
              Lead with influence, not just management
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-warmgray leading-relaxed max-w-3xl mx-auto"
          >
            Personal coaching designed to help you gain clarity, strengthen
            self-awareness, and develop the confidence and skills needed to
            create meaningful, lasting change — in your leadership and your
            life.
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
              Book your free 15 minute Get-to-Know call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coaching Overview */}
      <section id="personal-coaching" className="py-20 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display font-semibold text-4xl text-charcoal">
            What is personal Coaching?
          </h2>
          <p className="font-body text-lg md:text-xl text-warmgray leading-relaxed">
            Personal coaching is a structured and supportive partnership focused
            on helping you understand where you are today, where you want to go,
            and how to get there. Together, we create space for reflection,
            challenge, and action, always grounded in your real-world context.
          </p>
        </AnimatedSection>
      </section>

      {/* Coaching Process */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              How the coaching process works
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {coachingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number}>
                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sienna/10 flex items-center justify-center">
                        <span className="font-display font-black text-2xl md:text-3xl text-sienna">
                          {step.number}
                        </span>
                      </div>
                      {index < coachingSteps.length - 1 && (
                        <div className="w-px h-16 bg-sage/30 mx-auto mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-sienna" />
                        <h3 className="font-display font-semibold text-xl md:text-2xl text-charcoal">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-body text-warmgray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-sage/20"></div>

      {/* Coaching Packages */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              Coaching options
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1: Free */}
            <AnimatedSection>
              <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] h-full flex flex-col">
                <div className="mb-6">
                  <div className="font-ui text-sm text-sienna uppercase tracking-wider mb-2">
                    Start Here
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                    Free get-to-know session
                  </h3>
                  <p className="font-body text-warmgray leading-relaxed">
                    A free, no-obligation 15 minute meeting to learn about my
                    coaching approach and explore whether coaching is right for
                    you.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-sage/20">
                  <div className="font-display font-semibold text-3xl text-charcoal mb-4">
                    Free
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Package 2: Standard */}
            <AnimatedSection>
              <div className="bg-charcoal rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-sienna px-3 py-1 rounded-full">
                  <span className="font-ui text-xs text-cream">Popular</span>
                </div>
                <div className="mb-6">
                  <div className="font-ui text-sm text-sienna uppercase tracking-wider mb-2">
                    3 Months
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-cream mb-4">
                    Standard coaching package
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Basic behavioural assessment",
                      "Individual development plan",
                      "Coaching sessions (30–45 minutes)",
                      "Sessions every second week",
                      "Duration: 3 months",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-sienna mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-cream/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-sage/30">
                  <div className="font-display font-semibold text-3xl text-cream mb-4">
                    Custom
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Package 3: Deep Dive */}
            <AnimatedSection>
              <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] h-full flex flex-col">
                <div className="mb-6">
                  <div className="font-ui text-sm text-sienna uppercase tracking-wider mb-2">
                    5–9 Months
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-charcoal mb-4">
                    Deep dive coaching
                  </h3>
                  <div className="space-y-3 mb-4">
                    {[
                      "Extensive personality assessment",
                      "Detailed development report",
                      "Individual coaching and development plan",
                      "Coaching duration: 5–9 months",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-sienna mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-warmgray">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-sm text-sage italic">
                    Designed for individuals seeking deeper self-awareness and
                    long-term, sustainable change.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-sage/20">
                  <div className="font-display font-semibold text-3xl text-charcoal mb-4">
                    Custom
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coaching Values */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              My coaching values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {coachingValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-sienna/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-sienna" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-charcoal">
                      {value.title}
                    </h3>
                    <p className="font-body text-warmgray leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Is coaching right for you? */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal text-center mb-6">
              Is coaching right for you?
            </h2>
            <p className="font-body text-lg text-warmgray leading-relaxed text-center mb-8">
              Lasting change requires commitment and openness. Coaching may be a
              good fit if:
            </p>
            <div className="space-y-4">
              {checklistItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-cream/50 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-sienna" />
                  </div>
                  <span className="font-body text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Closing CTA */}
      <section id="cta" className="py-24 px-8 md:px-16 lg:px-24 bg-sienna">
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-cream leading-tight">
            Take the first step
          </h2>
          <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
            If you're curious about coaching and want to explore whether it's
            right for you, start with a free, no-obligation conversation.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-ui px-10 py-5 bg-cream hover:bg-white text-charcoal rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Book your free 15 minute Get-to-Know call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
