import { Mail, Linkedin, Phone } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navigateToPageSection = (path: string, hash?: string) => {
    if (hash) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-charcoal text-cream py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display font-semibold text-2xl">
              Leadership coaching
            </div>
            <p className="font-body text-sm text-sage leading-relaxed">
              Transforming executives into visionary leaders through
              evidence-based coaching.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-ui text-sm font-medium mb-4">Quick links</div>
            <ul className="space-y-2">
              {[
                { label: "Coaching philosophy", id: "philosophy" },
                { label: "Services", id: "services" },
                { label: "Testimonials", id: "testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  {"id" in link ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="font-body text-sm text-sage hover:text-cream transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm text-sage hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-ui text-sm font-medium mb-4">Services</div>
            <ul className="space-y-2">
              {[
                { label: "Executive coaching", path: "/professional-services", hash: "executive-coaching" },
                { label: "Team development", path: "/professional-services", hash: "team-development" },
                { label: "Assessment centers", path: "/professional-services", hash: "assessment-centres" },
                { label: "Personal coaching", path: "/individual-services" },
              ].map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => navigateToPageSection(service.path, service.hash)}
                    className="font-body text-sm text-sage hover:text-cream transition-colors text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-ui text-sm font-medium mb-4">Get in Touch</div>

            <div className="flex gap-3 mt-6">
              <Link
                to="/contact"
                className="w-10 h-10 rounded-full border border-sage/30 hover:border-cream flex items-center justify-center text-sage hover:text-cream transition-all duration-200"
                aria-label="Contact"
              >
                <Phone className="w-4 h-4" />
              </Link>
              <a
                href="mailto:frank.berton@leadtalent.de"
                className="w-10 h-10 rounded-full border border-sage/30 hover:border-cream flex items-center justify-center text-sage hover:text-cream transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/frank-berton-executive-coach"
                className="w-10 h-10 rounded-full border border-sage/30 hover:border-cream flex items-center justify-center text-sage hover:text-cream transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sage/20">
          <div className="flex justify-center items-center gap-4">
            <div className="font-body text-sm text-sage">
              © 2026 LeadTalent Leadership Coaching. All rights reserved.
            </div>
            <span className="text-sage">·</span>
            <Link
              to="/privacy-policy"
              className="font-body text-sm text-sage hover:text-cream transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
