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

// Individual menu item images
import bunMalai from "@/assets/gallery/bun-malai.jpg";
import nuttellaToast from "@/assets/gallery/nutella-toast.jpg";
import samosa from "@/assets/gallery/samosa.jpg";
import vadaPav from "@/assets/gallery/vada-pav.jpg";
import dahiPapdiChaat from "@/assets/gallery/dahi-papdi-chaat.jpg";
import bhelpuri from "@/assets/gallery/bhelpuri.jpg";
import jalediRabdi from "@/assets/gallery/jalebi-rabdi.jpg";
import kulfiFalooda from "@/assets/gallery/kulfi-falooda.jpg";
import gheeDosa from "@/assets/gallery/ghee-dosa.jpg";
import fruitCustard from "@/assets/gallery/fruit-custard.jpg";
import cheeseChilliToast from "@/assets/gallery/cheese-chilli-toast.jpg";
import alooParatha from "@/assets/gallery/aloo-paratha.jpg";
import kadakChai from "@/assets/gallery/kadak-chai.jpg";
import kachoriPlate from "@/assets/gallery/kachori-plate.jpg";
import idlySambar from "@/assets/gallery/idly-sambar.jpg";
import frenchFries from "@/assets/gallery/french-fries.jpg";
import burger from "@/assets/gallery/burger.jpg";
import carrotHalwa from "@/assets/gallery/carrot-halwa.jpg";
import chocolatePeanutShake from "@/assets/gallery/chocolate-peanut-shake.jpg";
import oatsBowl from "@/assets/gallery/oats-bowl.jpg";

const galleryCategories = [
  {
    title: "🫓 Bun & Toast",
    images: [
      { src: menuBunToast, alt: "Bun & Toast Selection" },
      { src: bunMalai, alt: "Bun Malai" },
      { src: nuttellaToast, alt: "Nutella Toast" },
    ],
  },
  {
    title: "🥗 Fruit & Salad Bowls",
    images: [
      { src: menuFruitBowl, alt: "Fresh Fruit Bowl" },
      { src: fruitCustard, alt: "Mix Fruit Custard Bowl" },
    ],
  },
  {
    title: "🥟 Momos",
    images: [
      { src: menuMomos, alt: "Himachali Momos" },
    ],
  },
  {
    title: "🍟 Snacks & Bites",
    images: [
      { src: menuSnacks, alt: "Snacks Platter" },
      { src: samosa, alt: "Samosa" },
      { src: vadaPav, alt: "Mumbai Vada Pav" },
      { src: frenchFries, alt: "French Fries" },
      { src: cheeseChilliToast, alt: "Cheese Chilli Toast" },
      { src: burger, alt: "Burger" },
    ],
  },
  {
    title: "🌶 Chatpata Corner",
    images: [
      { src: menuChaat, alt: "Street Chaat" },
      { src: dahiPapdiChaat, alt: "Dahi Papdi Chaat" },
      { src: bhelpuri, alt: "Marine Drive Bhelpuri" },
    ],
  },
  {
    title: "🥣 Breakfast Bowls",
    images: [
      { src: menuBreakfast, alt: "Breakfast Bowl" },
      { src: oatsBowl, alt: "Oats Bowl" },
    ],
  },
  {
    title: "🥠 Kachori",
    images: [
      { src: menuKachori, alt: "Kachori" },
      { src: kachoriPlate, alt: "Rampuri Kachori with Curry" },
    ],
  },
  {
    title: "🫓 Murthal Punjabi Paratha",
    images: [
      { src: menuParatha, alt: "Punjabi Paratha" },
      { src: alooParatha, alt: "Punjabi Aloo Paratha" },
    ],
  },
  {
    title: "🍛 Dakshin Tiffins",
    images: [
      { src: menuDakshin, alt: "South Indian Tiffin" },
      { src: gheeDosa, alt: "Gokarna Ghee Dosa" },
      { src: idlySambar, alt: "Chennai Style Idly Sambar" },
    ],
  },
  {
    title: "☕ Chai & Coffee",
    images: [
      { src: menuChai, alt: "Masala Chai" },
      { src: kadakChai, alt: "Hyderabad Cutting Kadak Chai" },
    ],
  },
  {
    title: "🍨 Desserts & Drinks",
    images: [
      { src: menuDesserts, alt: "Desserts" },
      { src: jalediRabdi, alt: "Kesariya Jalebi Rabdi" },
      { src: kulfiFalooda, alt: "Exotic Kulfi Falooda" },
      { src: carrotHalwa, alt: "Jodhpuri Carrot Halwa" },
      { src: chocolatePeanutShake, alt: "CCC Special Chocolate Peanut Shake" },
    ],
  },
  {
    title: "📸 Café Vibes",
    images: [
      { src: heroFood, alt: "Chai and Snacks" },
      { src: aboutCafe, alt: "CCC Café Interior" },
      { src: gallerySpread, alt: "Food Spread" },
    ],
  },
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

      {/* Gallery by Category */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl space-y-16">
          {galleryCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <ScrollReveal>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-6 border-b border-primary/30 pb-3">
                  {category.title}
                </h2>
              </ScrollReveal>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                {category.images.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <div className="break-inside-avoid overflow-hidden rounded-xl glass-card group relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-cream text-sm font-medium">{img.alt}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
