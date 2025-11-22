import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, scaleIn, fadeInUp, staggerContainer } from "@/lib/animations";

const About = () => {

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Background Elemets */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.div
            variants={fadeInDown}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              A Destination of Divine Commerce
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={fadeInLeft}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                Located at the heart of <span className="font-semibold text-primary">Shree Vrindavan Dham</span>, Krishna Bhumi Arcade is not just a commercial development—it's a spiritual and cultural experience merged with modern business excellence.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Where millions of devotees converge annually, your business finds its divine purpose. This isn't merely retail space—it's a sacred opportunity to serve those seeking spiritual fulfillment while building lasting prosperity.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As <span className="font-semibold text-accent">Vrindavan's 1st IGBC Gold Rated Retail Green Building</span>, we harmonize sustainability with tradition, creating a space where commerce respects culture and nature.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <Card className="overflow-hidden shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.ibb.co/1fmNP2zs/grid-1.webp"
                  alt="Luxurious interior of Krishna Bhumi Arcade"
                  className="w-full h-full object-cover"
                />
              </Card>
            </motion.div>
          </div>

          {/* Image Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.ibb.co/5WsTMv70/kba-homepage-image-2.webp"
                  alt="Grand entrance with ornate pillars"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-lg text-center text-secondary">Grand Entrance</h3>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.ibb.co/n8tcvXgs/premium-spaces.webp"
                  alt="Premium retail spaces"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-lg text-center text-secondary">Premium Spaces</h3>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 sacred-gradient flex items-center justify-center">
                <div className="p-8 text-center">
                  <h3 className="font-bold text-2xl text-secondary mb-2">Strategic Location</h3>
                  <p className="text-muted-foreground">Main Chhatikara-Vrindavan Road</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
