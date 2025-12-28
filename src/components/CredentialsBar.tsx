import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, TrendingUp, Building2, GraduationCap } from "lucide-react";

const credentials = [
  {
    icon: Award,
    label: "Certified in leadership circle profile",
    details:
      "360-degree assessment tool used by Fortune 500 companies worldwide",
  },
  {
    icon: TrendingUp,
    label: "19 years experience",
    details:
      "Two decades coaching executives across technology, finance, and healthcare sectors",
  },
  {
    icon: Building2,
    label: "100+ Executives coached",
    details: "Including CEOs and C-suite leaders from Global 2000 companies",
  },
];

export default function CredentialsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 px-8 md:px-16 lg:px-24 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={credential.label}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sienna/20 flex items-center justify-center transition-all duration-300 group-hover:bg-sienna/30">
                    <Icon className="w-8 h-8 text-sienna" />
                  </div>

                  <div className="font-ui text-sm font-medium text-cream leading-snug">
                    {credential.label}
                  </div>
                </div>

                {/* Tooltip on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                    pointerEvents: hoveredIndex === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 z-10"
                >
                  <div className="bg-cream rounded-lg p-4 shadow-2xl">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cream rotate-45"></div>
                    <p className="font-body text-sm text-warmgray relative z-10">
                      {credential.details}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
