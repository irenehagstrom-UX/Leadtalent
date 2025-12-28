import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[60%_40%] gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-[72px] leading-[1.1] text-charcoal">
            Transform your leadership.{" "}
            <span className="text-sienna">Elevate your impact.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-warmgray leading-relaxed max-w-2xl"
          >
            Executive coaching for C-suite leaders and senior managers who are
            ready to unlock their full potential and drive transformational
            change in their organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link to="/contact">
              <button className="font-ui px-8 py-4 bg-[#A84867] hover:bg-[#8a3a54] text-cream rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl">
                Schedule discovery call
              </button>
            </Link>
            <Link to="/individual-services#personal-coaching">
              <button className="font-ui px-8 py-4 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-lg transition-all duration-200">
                View approach
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src="/images/frank_casual.jpg"
              alt="Professional Leadership Coach"
              className="w-full h-auto aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
          </div>

          {/* Floating credential badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-lg shadow-xl border border-sage/20"
          >
            <div className="font-ui text-sm text-sage mb-1">Experience</div>
            <div className="font-display font-semibold text-3xl text-charcoal">
              19+ Years
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
