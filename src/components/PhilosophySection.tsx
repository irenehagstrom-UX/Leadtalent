import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="inline-block">
          <div className="font-ui text-sm tracking-wider uppercase text-sienna mb-4">
            My coaching values
          </div>
          <div className="w-16 h-px bg-sage mx-auto"></div>
        </div>

        <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[42px] text-charcoal leading-tight">
          Leadership is not about having all the answers
          <br className="hidden md:block" />
          it's about asking the right questions.
        </h2>

        <p className="font-body text-lg md:text-xl text-warmgray leading-relaxed">
          Through more than a decade of working with C-Suite executives, I've
          developed a coaching methodology that combines behavioral psychology,
          organizational systems thinking, and practical business acumen. My
          approach is rooted in the belief that sustainable transformation
          happens when leaders develop deep self-awareness and cultivate
          authentic presence.
        </p>

        <div className="pt-8 grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Evidence based",
              description: "Grounded in neuroscience and leadership research",
            },
            {
              title: "Action oriented",
              description:
                "Focused on real world application and measurable outcomes",
            },
            {
              title: "Confidential",
              description: "A trusted space for vulnerability and growth",
            },
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="space-y-2"
            >
              <h3 className="font-display font-semibold text-xl text-charcoal">
                {principle.title}
              </h3>
              <p className="font-body text-sage">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
