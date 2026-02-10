import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import aboutCafe from "@/assets/about-cafe.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const waMsg = `Hi CCC! I'm ${formData.name}.\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(waMsg)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutCafe})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-warm-black/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-3">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-chai-gold italic text-lg">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Locations</h3>
                      <p className="text-muted-foreground text-sm">
                        Branch 1: Kondapur, Hyderabad<br />
                        Branch 2: Madhapur, Hyderabad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a href="tel:+919999999999" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        +91 99999 99999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@chaichakhna.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        info@chaichakhna.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday – Sunday: 8:00 AM – 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="glass-card p-8">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Send us a <span className="text-gradient">Message</span>
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
                      placeholder="Your message or booking request..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-fire-orange transition-colors"
                  >
                    <Send size={18} />
                    {submitted ? "Sent! ✓" : "Send Message"}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-center mb-10">
              Find <span className="text-gradient">Us</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="glass-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5762236443766!2d78.36543237493655!3d17.465054283435315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93001fcf99d3%3A0xb651aa78944058!2sChai%20Chakhna%20Company(CCC)%2C%20Kondapur!5e1!3m2!1sen!2sin!4v1770743488786!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CCC Kondapur Location"
                />
                <div className="p-4 text-center">
                  <h3 className="font-serif font-semibold">📍 Kondapur Branch</h3>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.304651264361!2d78.41076207493569!3d17.428348383465796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9151f3083de1%3A0x3ee0dac911ad17b3!2sChai%20Chakhna%20Company!5e1!3m2!1sen!2sin!4v1770743543450!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CCC Madhapur Location"
                />
                <div className="p-4 text-center">
                  <h3 className="font-serif font-semibold">📍 Madhapur Branch</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
