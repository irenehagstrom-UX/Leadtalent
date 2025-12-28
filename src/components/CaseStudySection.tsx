import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const outcomes = [
    { icon: TrendingUp, metric: '40%', label: 'Increase in team productivity' },
    { icon: Users, metric: '85%', label: 'Employee engagement score' },
    { icon: Target, metric: '$2.5M', label: 'Cost savings achieved' }
  ];

  return (
    <section ref={ref} className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-ui text-sm tracking-wider uppercase text-sienna">
            Featured Success Story
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-charcoal">
            From Friction to Flow
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team collaboration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <div className="font-ui text-sm text-sienna mb-2">The Challenge</div>
                <p className="font-body text-lg text-warmgray leading-relaxed">
                  A newly promoted VP of Engineering at a fast-growing SaaS company was
                  struggling to unite a fractured leadership team. Silos, territorial
                  behavior, and poor communication were stalling product development.
                </p>
              </div>

              <div className="h-px bg-sage/20"></div>

              <div>
                <div className="font-ui text-sm text-sienna mb-2">The Approach</div>
                <p className="font-body text-lg text-warmgray leading-relaxed">
                  Through a combination of 1:1 executive coaching and team facilitation,
                  we rebuilt trust, established clear communication protocols, and
                  developed a shared leadership operating system.
                </p>
              </div>

              <div className="h-px bg-sage/20"></div>

              <div>
                <div className="font-ui text-sm text-sienna mb-4">The Results</div>
                <div className="grid grid-cols-3 gap-6">
                  {outcomes.map((outcome, index) => {
                    const Icon = outcome.icon;
                    return (
                      <motion.div
                        key={outcome.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="text-center space-y-2"
                      >
                        <Icon className="w-6 h-6 text-sienna mx-auto" />
                        <div className="font-display font-semibold text-2xl text-charcoal">
                          {outcome.metric}
                        </div>
                        <div className="font-body text-xs text-sage leading-tight">
                          {outcome.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-2 font-ui text-sm text-charcoal hover:text-linkBlue transition-colors">
              Read Full Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
