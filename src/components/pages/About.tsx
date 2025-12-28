import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  GraduationCap,
  Globe,
  Users,
  TrendingUp,
  Target,
  BookOpen,
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

const expertise = {
  regions: ["D-A-CH", "Europe", "APAC"],
  industries: [
    "Energy & industrials",
    "Chemicals",
    "Financial services",
    "Life sciences & pharma",
    "Telecoms",
  ],
  coaching: [
    "Executive coaching",
    "Leadership coaching",
    "Career coaching",
    "Group coaching",
  ],
  levels: ["C-Suite", "VP and BU leaders", "High potentials"],
};

const whyMe = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Extensive experience with major enterprises such as Korn Ferry, Hudson, Gartner, and SHL.",
  },
  {
    icon: Target,
    title: "Evidence-based approach",
    description:
      "Utilizing proven methodologies to deliver measurable results.",
  },
  {
    icon: Globe,
    title: "Global perspective",
    description:
      "Experienced in working with diverse cultures and industries worldwide.",
  },
];

const degrees = [
  "Master in HR & Coaching, Coaching Psychology, Sydney University",
  "Bachelor of Business, Berlin University of Applied Science",
];

const certificates = [
  "Hogan Assessment Certified",
  "Korn Ferry Certified",
  "SHL (OPQ) Certified",
];

const books = [
  {
    title: "Leadership That Matters",
    subtitle:
      "The Critical Factors for Making a Difference in People's Lives and Organizations' Success",
    author: "Marshall Sashkin",
    image: "/images/matters.jpeg",
  },
  {
    title: "The Psychology of Executive Coaching",
    subtitle:
      "Reflecting the latest developments in the field of executive coaching.",
    author: "Bruce Peltier",
    image: "/images/Psychology of Executive Coaching .jpg",
  },
  {
    title: "Behavioral Coaching",
    subtitle: "How to build sustainable personal and organizational strength",
    author: "Suzanne Skiffington and Perry Zeus",
    image: "/images/behaviour_coaching.jpeg",
  },
  {
    title: "Positive Psychology Coaching in the Workplace",
    subtitle:
      "Research-to-practice text explores how coaching can support thriving in the workplace.",
    author: "Wendy-Ann Smith, Ilona Boniwell, Suzy Green",
    image: "/images/pshy-in-workplace.jpeg",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Image and Quote */}
      <section className="pt-20 relative">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src="/images/power.png"
            alt="About Frank Berton"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            <div className="max-w-4xl text-center">
              <div className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                "I leverage a strengths and evidence-based approach in my work"
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal mb-4">
              Experience & Expertise
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection>
              <div className="space-y-4">
                <div className="font-ui text-sm uppercase tracking-wider text-sienna mb-4">
                  Regions
                </div>
                <div className="space-y-2">
                  {expertise.regions.map((region) => (
                    <div key={region} className="font-body text-warmgray">
                      {region}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-4">
                <div className="font-ui text-sm uppercase tracking-wider text-sienna mb-4">
                  Industries
                </div>
                <div className="space-y-2">
                  {expertise.industries.map((industry) => (
                    <div key={industry} className="font-body text-warmgray">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-4">
                <div className="font-ui text-sm uppercase tracking-wider text-sienna mb-4">
                  Coaching
                </div>
                <div className="space-y-2">
                  {expertise.coaching.map((type) => (
                    <div key={type} className="font-body text-warmgray">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-4">
                <div className="font-ui text-sm uppercase tracking-wider text-sienna mb-4">
                  Levels coached
                </div>
                <div className="space-y-2">
                  {expertise.levels.map((level) => (
                    <div key={level} className="font-body text-warmgray">
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <img
                  src="/images/frank_about.jpg"
                  alt="Frank Berton"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="font-display font-semibold text-4xl text-charcoal mb-8">
                  About me, Frank Berton
                </h2>
                <div className="space-y-6 font-body text-lg text-warmgray leading-relaxed">
              <p>
                Over 19 years' experience working as a talent management
                consultant and coach, across industry sectors and geographic
                territories to drive growth, resilience, change and
                transformations.
              </p>
              <p>
                Leveraging a strengths and evidence-based approach I work
                exploratively off my client's agenda, helping them develop
                change capabilities and enhance their sense of empowerment.
              </p>
              <p>
                I have worked as an independent consultant and Principal in
                leading advisory firms, where I delivered and led talent and
                leadership projects in multicultural environments including
                Europe, India, and APAC—always with a focus on supporting people
                strategy, business objectives, flow, and "happiness."
              </p>
              <p>
                I completed a business degree and earned a master's in HR
                Management and Coaching Psychology from the University of Sydney
                under the tutelage of Dr. Anthony Grant. I also served as
                President of the Coaching and Mentoring Association and continue
                to support the development of professional, evidence-based
                coaching practice.
              </p>
              <p>
                As a freelance consultant, I assist individuals and businesses
                in making successful career and succession decisions.
                Collaborating with professional partners in my network, I ensure
                a high level of quality and service orientation for my clients
                even in larger projects.
              </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              Why me?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMe.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] h-full"
                  >
                    <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-sienna" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-warmgray leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Already Successfully Supported */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              Already successfully supported
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              <div className="flex items-center justify-center h-40">
                <img
                  src="/images/shl.png"
                  alt="SHL"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-40">
                <img
                  src="/images/kornferry.png"
                  alt="Korn Ferry"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-40">
                <img
                  src="/images/gartner.png"
                  alt="Gartner"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-40">
                <img
                  src="/images/atrain.png"
                  alt="ATRAIN"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Life Lessons from Tennis */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display font-semibold text-4xl text-cream mb-8 text-center">
              Life lessons from tennis
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/tennis_frank.jpg"
                  alt="Frank Berton playing tennis"
                  className="rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full h-auto"
                />
              </div>
              <div>
                <p className="font-body text-lg text-cream/90 leading-relaxed">
                  Tennis, much like life, is a game of strategy, resilience, and
                  adaptability. Success often hinges on the ability to
                  anticipate and respond to challenges, whether it's navigating
                  unexpected obstacles on the court or overcoming personal
                  hurdles off the court. Every point counts, every decision and
                  action in life can have significant consequences. Both require
                  focus, determination, and the willingness to learn from both
                  victories and defeats. Ultimately, whether on the court or in
                  life, it's the mindset of perseverance and continuous
                  improvement that leads to success.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#f4f2ef]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display font-semibold text-4xl text-charcoal mb-12 text-center">
              Certificates
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Degrees */}
            <div className="flex flex-col gap-6">
              {degrees.map((degree, index) => (
                <AnimatedSection key={degree}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-start gap-4"
                  >
                    <GraduationCap className="w-6 h-6 text-sienna flex-shrink-0 mt-1" />
                    <span className="font-body text-warmgray leading-relaxed">
                      {degree}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            {/* Right Column - Certificates */}
            <div className="flex flex-col gap-6">
              {certificates.map((certificate, index) => (
                <AnimatedSection key={certificate}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-start gap-4"
                  >
                    <Award className="w-6 h-6 text-sienna flex-shrink-0 mt-1" />
                    <span className="font-body text-warmgray leading-relaxed">
                      {certificate}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Great Books */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-charcoal">
              Great books on leadership coaching
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <AnimatedSection key={book.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] h-full flex gap-6"
                >
                  <div className="flex-shrink-0 w-24">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-auto rounded shadow-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
                      {book.title}
                    </h3>
                    <p className="font-body text-sage mb-4 italic">
                      {book.subtitle}
                    </p>
                    <div className="font-body text-sm text-warmgray">
                      Author: {book.author}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
