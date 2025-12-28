import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
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

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-cream paper-texture overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-charcoal">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Content */}
      <section className="pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* General Information */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                General information
              </h2>
              <p className="font-body text-warmgray leading-relaxed">
                The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can personally identify you. Detailed information on data protection is listed in below text.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Data Collection */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Data collection on this website
              </h2>
              <div className="space-y-6 font-body text-warmgray leading-relaxed">
                <div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                    Who is responsible for data collection on this website?
                  </h3>
                  <p>
                    Data processing on this website is carried out by the website operator. You can find the full contact details on this page.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                    How is data collected?
                  </h3>
                  <p className="mb-4">
                    Your data is collected by you providing it to me via email.
                  </p>
                  <p>
                    Other data is automatically collected by the Website provider when you visit the website. These are mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter our website.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                    What is done with the data?
                  </h3>
                  <p>
                    Some of the data is collected to ensure the proper functioning of the website. Other data may be used to analyze how users navigate the website.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                    What rights do you have regarding your data?
                  </h3>
                  <p>
                    You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking, or deletion of this data. For this purpose, as well as for further questions regarding data protection, you can contact us at any time using the address provided in the imprint.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Analysis Tools */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Analysis tools and third-party tools
              </h2>
              <div className="space-y-4 font-body text-warmgray leading-relaxed">
                <p>
                  When you visit this website, your surfing behavior may be statistically evaluated. This is mainly done with cookies and so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you. You can object to this analysis or prevent it by not using certain tools.
                </p>
                <p>
                  You can object to this analysis. We will inform you about the options for objection in this privacy policy.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Data Protection */}
          <AnimatedSection>
            <div className="bg-[#f4f2ef] rounded-lg p-8">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Data protection
              </h2>
              <div className="space-y-4 font-body text-warmgray leading-relaxed">
                <p>
                  The operators of these pages take the protection of your personal data very seriously. Personal data is confidentially treated in accordance with the statutory data protection regulations and this privacy policy.
                </p>
                <p>
                  When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
                </p>
                <p>
                  We would like to point out that data transmission over the Internet (e.g., communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Responsible Authority */}
          <AnimatedSection>
            <div className="bg-charcoal rounded-lg p-8">
              <h2 className="font-display font-semibold text-2xl text-cream mb-4">
                Responsible authority
              </h2>
              <p className="font-body text-cream/90 leading-relaxed">
                The responsible authority for data processing on this website is LeadTalent consulting owner: Frank Berton, Südwestkorso 65, 12161 Berlin
              </p>
            </div>
          </AnimatedSection>
          
          {/* Revocation */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Revocation of your consent to data processing
              </h2>
              <p className="font-body text-warmgray leading-relaxed">
                Many data processing operations are only possible with your express consent. You can revoke your consent at any time. An informal notification by e-mail to me is sufficient for this purpose. The legality of the data processing carried out until the revocation remains unaffected by the revocation.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Data Portability */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Right to data portability
              </h2>
              <p className="font-body text-warmgray leading-relaxed">
                You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent that it is technically feasible.
              </p>
            </div>
          </AnimatedSection>
          
          {/* SSL/TLS */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                SSL or TLS encryption
              </h2>
              <p className="font-body text-warmgray leading-relaxed">
                For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line. If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Information, Blocking, Deletion */}
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Information, blocking, deletion
              </h2>
              <p className="font-body text-warmgray leading-relaxed">
                Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction, blocking or deletion of this data. For this purpose, as well as for further questions regarding personal data, you can contact us at any time at the address given in the imprint.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Cookies */}
          <AnimatedSection>
            <div className="bg-[#f4f2ef] rounded-lg p-8">
              <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
                Cookies
              </h2>
              <div className="space-y-4 font-body text-warmgray leading-relaxed">
                <p>
                  The internet pages partly use so-called cookies. Cookies do not harm your computer and do not contain viruses. Cookies serve to make the offer more user-friendly, effective, and secure. Cookies are small text files that are stored on your computer and saved by your browser.
                </p>
                <p>
                  Most of the cookies used are so-called "session cookies". They are automatically deleted after your visit. Other cookies remain stored on your device until you delete them. These cookies enable us to recognize your browser the next time you visit.
                </p>
                <p>
                  You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be limited.
                </p>
                <p>
                  Cookies that are required for the execution of the electronic communication process or for the provision of certain functions desired by you (e.g., shopping cart function) are stored on the basis of Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the storage of cookies for the technically error-free and optimized provision of its services. Insofar as other cookies (e.g., cookies for analyzing your surfing behavior) are stored, these are treated separately in this privacy policy.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
