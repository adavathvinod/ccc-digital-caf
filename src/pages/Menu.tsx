import ScrollReveal from "@/components/ScrollReveal";
import { menuData } from "@/data/menuData";

import menuBunToast from "@/assets/menu-bun-toast.jpg";
import menuFruitBowl from "@/assets/menu-fruit-bowl.jpg";
import menuMomos from "@/assets/menu-momos.jpg";
import menuSnacks from "@/assets/menu-snacks.jpg";
import menuChaat from "@/assets/menu-chaat.jpg";
import menuBreakfast from "@/assets/menu-breakfast.jpg";
import menuKachori from "@/assets/menu-kachori.jpg";
import menuParatha from "@/assets/menu-paratha.jpg";
import menuDakshin from "@/assets/menu-dakshin.jpg";
import menuChai from "@/assets/menu-chai.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import heroFood from "@/assets/hero-food.jpg";

const imageMap: Record<string, string> = {
  "menu-bun-toast": menuBunToast,
  "menu-fruit-bowl": menuFruitBowl,
  "menu-momos": menuMomos,
  "menu-snacks": menuSnacks,
  "menu-chaat": menuChaat,
  "menu-breakfast": menuBreakfast,
  "menu-kachori": menuKachori,
  "menu-paratha": menuParatha,
  "menu-dakshin": menuDakshin,
  "menu-chai": menuChai,
  "menu-desserts": menuDesserts,
};

const MenuPage = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroFood})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-warm-black/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-3">
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="text-chai-gold italic text-lg">Taste the tradition</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-16">
            {menuData.map((category, catIdx) => (
              <ScrollReveal key={category.category} delay={catIdx * 50}>
                <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
                  {/* Category Image */}
                  <div className="glass-card overflow-hidden">
                    <div className="aspect-square">
                      <img
                        src={imageMap[category.image] || heroFood}
                        alt={category.category}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <span className="text-2xl mr-2">{category.emoji}</span>
                      <h2 className="font-serif text-xl font-bold text-foreground inline">
                        {category.category}
                      </h2>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="glass-card p-4 flex items-center justify-between hover-lift"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {item.name}
                        </span>
                        <span className="text-primary font-bold text-sm shrink-0 ml-3">
                          {item.price ? `₹${item.price}` : "Ask"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Order CTA */}
          <ScrollReveal>
            <div className="mt-16 text-center glass-card p-8 bg-primary/5">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Order?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Order via WhatsApp or call us directly!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/919999999999?text=Hi%20CCC!%20I%20want%20to%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-green text-accent-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+919999999999"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Call to Order
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
