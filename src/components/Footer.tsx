import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, MapPin, Mail, Clock } from "lucide-react";
import cccLogo from "@/assets/ccc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-warm-black text-cream/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={cccLogo} alt="Chai Chakhna Company Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              Chai Chakhna Company — Modern Indian café serving authentic chai, snacks,
              and fusion street food.
            </p>
            <p className="text-chai-gold italic text-sm">"Where Chai Meets Chakhna"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Menu" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Kondapur & Madhapur, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+919999999999" className="hover:text-primary transition-colors">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@chaichakhna.com" className="hover:text-primary transition-colors">
                  info@chaichakhna.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary shrink-0" />
                <span>8:00 AM – 11:00 PM (All Days)</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/chaichakhnacompanyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-green/50 flex items-center justify-center hover:bg-dark-green transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Chai Chakhna Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
