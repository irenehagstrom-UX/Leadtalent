import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, Video, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <section
      ref={ref}
      className="py-32 px-8 md:px-16 lg:px-24 bg-cream relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/images/climbing.jpg)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        <h2 className="font-display font-semibold text-4xl md:text-5xl text-charcoal leading-tight">
          Ready to elevate your leadership?
        </h2>

        <p className="font-body text-lg md:text-xl text-warmgray leading-relaxed max-w-2xl mx-auto">
          Let's start with a complimentary 15 minute discovery call to explore
          how coaching can support your goals.
        </p>

        <div className="pt-4">
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 font-ui px-10 py-5 bg-[#A84867] hover:bg-[#8a3a54] text-cream rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <Calendar className="w-5 h-5" />
              Schedule your discovery call
            </button>
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-8 text-left">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-sienna mt-1 flex-shrink-0" />
            <div>
              <div className="font-ui text-sm font-medium text-charcoal">
                15 minutes
              </div>
              <div className="font-body text-sm text-sage">No obligation</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Video className="w-5 h-5 text-sienna mt-1 flex-shrink-0" />
            <div>
              <div className="font-ui text-sm font-medium text-charcoal">
                Virtual meeting
              </div>
              <div className="font-body text-sm text-sage">Zoom or phone</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Calendar Modal */}
      <AnimatePresence>
        {showCalendar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40"
              onClick={() => setShowCalendar(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[85vh] bg-cream rounded-lg shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-sage/20">
                <div>
                  <h3 className="font-display font-semibold text-2xl text-charcoal">
                    Schedule discovery call
                  </h3>
                  <p className="font-body text-sm text-sage mt-1">
                    Choose a time that works best for you
                  </p>
                </div>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="w-10 h-10 rounded-full hover:bg-sage/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-warmgray" />
                </button>
              </div>

              <div
                className="p-8 overflow-y-auto"
                style={{ maxHeight: "calc(85vh - 80px)" }}
              >
                {/* Calendar placeholder - In production, integrate with Calendly, Cal.com, or similar */}
                <div className="bg-white rounded-lg p-12 text-center space-y-6 border-2 border-dashed border-sage/30">
                  <Calendar className="w-16 h-16 text-sienna mx-auto" />
                  <div>
                    <div className="font-display font-semibold text-xl text-charcoal mb-2">
                      Calendar integration
                    </div>
                    <p className="font-body text-sage">
                      Connect your preferred calendar tool (Calendly, Cal.com,
                      etc.)
                    </p>
                  </div>

                  {/* Sample time slots for demonstration */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[
                      "Monday, Jan 15 - 2:00 PM EST",
                      "Wednesday, Jan 17 - 10:00 AM EST",
                      "Thursday, Jan 18 - 3:30 PM EST",
                      "Friday, Jan 19 - 11:00 AM EST",
                    ].map((slot) => (
                      <button
                        key={slot}
                        className="font-ui text-sm py-4 px-6 border-2 border-sage/30 hover:border-linkBlue hover:bg-linkBlue/5 text-charcoal rounded-lg transition-all duration-200"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

import { AnimatePresence } from "framer-motion";
