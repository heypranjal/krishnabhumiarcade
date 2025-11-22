import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, staggerContainer } from "@/lib/animations";

const locationFeatures = [
  {
    image: "https://i.ibb.co/5WsTMv70/kba-homepage-image-2.webp",
    title: "Location Map",
    description: "Strategically situated within the Krishna Bhumi premises"
  },
  {
    image: "https://i.ibb.co/1fmNP2zs/grid-1.webp",
    title: "Divinity Shop",
    description: "Traditional architecture meets modern retail"
  },
  {
    image: "https://i.ibb.co/n8tcvXgs/premium-spaces.webp",
    title: "Appealing Atmosphere",
    description: "Create an inviting environment for devotees"
  },
  {
    image: "https://i.ibb.co/1fmNP2zs/grid-1.webp",
    title: "Aesthetically Designed",
    description: "Inspired by Vrindavan's spiritual heritage"
  }
];

const locationBenefits = [
  "Proximity to revered temples and holy sites",
  "Easy accessibility for pilgrims and tourists",
  "Year-round high foot traffic from devotees and visitors"
];

const UnparalleledLocation = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Unparalleled Location
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Strategically situated within the Krishna Bhumi premises and adjacent to the iconic Vrindavan Chandrodaya Mandir, Krishna Bhumi Arcade enjoys a privileged position in Vrindavan's faith corridor. Our location offers:
            </p>

            {/* Benefits List */}
            <div className="max-w-2xl mx-auto space-y-3 mb-8">
              {locationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 text-left"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-base text-foreground/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 bg-card text-center">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      • {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnparalleledLocation;
