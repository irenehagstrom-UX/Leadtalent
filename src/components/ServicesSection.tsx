import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Target, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "1:1 Executive Coaching",
    description:
      "Personalized coaching for C-suite executives navigating complex organizational challenges and career transitions.",
    details: [
      "6 or 12-month engagement",
      "Bi-weekly 90-minute sessions",
      "360-degree feedback integration",
      "Unlimited email support",
    ],
    price: "Custom",
    link: "/professional-services#executive-coaching",
  },
  {
    icon: Users,
    title: "Team Development & Leadership Workshops",
    description:
      "Transform your leadership team into a high-performing unit and build specific capabilities across your organization's leadership pipeline.",
    details: [
      "Team assessment & diagnostics",
      "Quarterly offsite facilitation",
      "Half-day or full-day workshop formats",
      "Up to 20 participants per workshop",
      "Interactive & experiential learning",
      "Post-workshop integration plan",
    ],
    price: "Custom",
    link: "/professional-services#team-development",
  },
  {
    icon: ClipboardCheck,
    title: "Assessments",
    description:
      "Comprehensive assessment center offerings to evaluate leadership potential, development needs, and organizational fit.",
    details: [
      "Individual leadership assessments",
      "Assessment center design & facilitation",
      "Psychometric testing & 360 feedback",
      "Detailed reports & development recommendations",
    ],
    price: "Custom",
    link: "/professional-services#assessment-centres",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-8 md:px-16 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-ui text-sm tracking-wider uppercase text-sienna">
            Service offerings
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-charcoal">
            How we work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-white rounded-lg p-8 transition-all duration-200 ${
                  hoveredIndex === index
                    ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)] transform -translate-y-2"
                    : "shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                }`}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-sienna/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-sienna" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-warmgray leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-sage/20 pt-6 space-y-3">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sienna mt-2 flex-shrink-0"></div>
                        <span className="font-body text-sm text-warmgray">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <Link
                  to={service.link}
                  className="mt-6 w-full font-ui text-sm py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-lg transition-all duration-200 block text-center"
                >
                  Learn more
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
