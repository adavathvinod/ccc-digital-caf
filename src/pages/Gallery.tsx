import ScrollReveal from "@/components/ScrollReveal";

import heroFood from "@/assets/hero-food.jpg";
import menuChai from "@/assets/menu-chai.jpg";
import menuSnacks from "@/assets/menu-snacks.jpg";
import menuMomos from "@/assets/menu-momos.jpg";
import menuParatha from "@/assets/menu-paratha.jpg";
import menuChaat from "@/assets/menu-chaat.jpg";
import menuDakshin from "@/assets/menu-dakshin.jpg";
import menuKachori from "@/assets/menu-kachori.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import menuBunToast from "@/assets/menu-bun-toast.jpg";
import menuFruitBowl from "@/assets/menu-fruit-bowl.jpg";
import menuBreakfast from "@/assets/menu-breakfast.jpg";
import aboutCafe from "@/assets/about-cafe.jpg";
import gallerySpread from "@/assets/gallery-spread.jpg";

const galleryImages = [
  { src: heroFood, alt: "Chai and Snacks" },
  { src: menuChai, alt: "Masala Chai" },
  { src: menuSnacks, alt: "Snacks Platter" },
  { src: menuMomos, alt: "Himachali Momos" },
  { src: menuParatha, alt: "Punjabi Paratha" },
  { src: menuChaat, alt: "Street Chaat" },
  { src: menuDakshin, alt: "South Indian Tiffin" },
  { src: menuKachori, alt: "Kachori" },
  { src: menuDesserts, alt: "Desserts" },
  { src: menuBunToast, alt: "Bun Maska" },
  { src: menuFruitBowl, alt: "Fruit Bowl" },
  { src: menuBreakfast, alt: "Breakfast Bowl" },
  { src: aboutCafe, alt: "CCC Café Interior" },
  { src: gallerySpread, alt: "Food Spread" },
];

const Gallery = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${gallerySpread})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-warm-black/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-3">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-chai-gold italic text-lg">Feast for the Eyes</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="break-inside-avoid overflow-hidden rounded-xl glass-card">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
