import { Phone, Instagram, Youtube, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999?text=Hi%20CCC!%20I%20want%20to%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-dark-green shadow-lg flex items-center justify-center text-cream hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="https://www.instagram.com/chaichakhnacompanyofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-fire-orange shadow-lg flex items-center justify-center text-cream hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-tea-brown shadow-lg flex items-center justify-center text-cream hover:scale-110 transition-transform"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </a>
      <a
        href="tel:+919999999999"
        className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
