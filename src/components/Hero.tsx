import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import cccLogo from "@/assets/ccc-logo.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-black/70 via-warm-black/50 to-warm-black/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4"
        >
          <span className="text-gradient">CCC</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream/90 mb-3"
        >
          Chai Chakhna Company
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-chai-gold font-light italic mb-10"
        >
          "Where Chai Meets Chakhna"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/menu"
            className="bg-primary hover:bg-fire-orange text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            View Menu
          </Link>
          <a
            href="https://wa.me/919999999999?text=Hi%20CCC!%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-green hover:bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
          >
            Order Now
          </a>
          <Link
            to="/contact"
            className="border-2 border-cream/40 text-cream hover:bg-cream/10 px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
