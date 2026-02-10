import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

import heroFood from "@/assets/hero-food.jpg";
import menuChai from "@/assets/menu-chai.jpg";
import menuSnacks from "@/assets/menu-snacks.jpg";
import menuParatha from "@/assets/menu-paratha.jpg";
import menuMomos from "@/assets/menu-momos.jpg";
import gallerySpread from "@/assets/gallery-spread.jpg";
import aboutCafe from "@/assets/about-cafe.jpg";

const popularItems = [
  { name: "Kadak Chai", image: menuChai, price: "₹30" },
  { name: "Snacks Platter", image: menuSnacks, price: "₹99" },
  { name: "Punjabi Paratha", image: menuParatha, price: "₹69" },
  { name: "Himachali Momos", image: menuMomos, price: "₹79" },
];

const reviews = [
  {
    name: "Rahul S.",
    text: "Best chai in Hyderabad! The Irani maska bun is absolutely heavenly. Will keep coming back!",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Love the ambiance and the food quality. CCC Special Poha is a must-try. Super hygienic!",
    rating: 5,
  },
  {
    name: "Karthik R.",
    text: "Amazing momos and the kesar chai is out of this world. Great place for friends and family.",
    rating: 4,
  },
];

const Index = () => {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section
        className="relative section-padding"
        style={{
          backgroundImage: `url(${aboutCafe})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-warm-black/85" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-6">
              About <span className="text-gradient">CCC</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Chai Chakhna Company is a modern Indian café serving authentic chai,
              snacks, and fusion street food. We specialize in comfort food,
              hygienic preparation, and memorable flavors that bring people together.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-fire-orange font-semibold transition-colors"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Popular Items */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4">
              Our <span className="text-gradient">Popular Items</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              Handpicked favourites loved by our customers
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {popularItems.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="glass-card overflow-hidden hover-lift cursor-pointer group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif font-semibold text-foreground">{item.name}</h3>
                    <p className="text-primary font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-fire-orange transition-all hover:scale-105"
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section
        className="relative section-padding"
        style={{
          backgroundImage: `url(${gallerySpread})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-warm-black/80" />
        <div className="relative z-10 container mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-6">
              Food <span className="text-gradient">Gallery</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-8">
            {[heroFood, menuChai, menuSnacks, menuMomos, menuParatha, gallerySpread, aboutCafe, menuChai].map(
              (img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-2 border-cream/40 text-cream px-8 py-3 rounded-full font-semibold hover:bg-cream/10 transition-all"
          >
            View Gallery <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-12">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 150}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-chai-gold text-chai-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{review.text}"
                  </p>
                  <p className="mt-4 font-semibold text-foreground">— {review.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
