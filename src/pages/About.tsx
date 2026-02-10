import ScrollReveal from "@/components/ScrollReveal";
import aboutCafe from "@/assets/about-cafe.jpg";
import heroFood from "@/assets/hero-food.jpg";

const About = () => {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] min-h-[350px] flex items-center justify-center"
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
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-chai-gold italic text-lg">Our Story & Passion</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src={heroFood}
                alt="CCC Food"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  The <span className="text-gradient">CCC</span> Story
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chai Chakhna Company is a modern Indian café serving authentic chai,
                  snacks, and fusion street food. We specialize in comfort food,
                  hygienic preparation, and memorable flavors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Born from a love for the simple pleasures of chai and chakhna, CCC
                  brings together the best of Indian street food culture under one roof.
                  From the bustling streets of Mumbai to the aromatic kitchens of
                  Hyderabad, every dish tells a story.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to quality ingredients, hygienic preparation, and
                  authentic flavors has made us a favorite among food lovers. Whether
                  it's our kadak chai or our signature momos, every bite is crafted
                  with love.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
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
        <div className="relative z-10 container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream text-center mb-12">
              Why Choose <span className="text-gradient">CCC</span>?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🍵",
                title: "Authentic Flavors",
                desc: "Every dish is crafted from traditional recipes with a modern twist.",
              },
              {
                emoji: "✨",
                title: "100% Hygienic",
                desc: "We follow the highest standards of cleanliness and food safety.",
              },
              {
                emoji: "❤️",
                title: "Made with Love",
                desc: "Fresh ingredients, prepared daily, served with a smile.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 150}>
                <div className="glass-card p-8 text-center bg-warm-black/40 border-cream/10">
                  <span className="text-4xl mb-4 block">{v.emoji}</span>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                    {v.title}
                  </h3>
                  <p className="text-cream/70 text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
