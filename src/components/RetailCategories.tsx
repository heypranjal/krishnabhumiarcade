import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scroll, Image, Shirt, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInDown, scaleIn, staggerContainer } from "@/lib/animations";

const categories = [
  { icon: Scroll, title: "Puja Samagri Shops", description: "Complete spiritual essentials", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418662/puja_samgri_a0ifxz_lqbkty.png" },
  { icon: Image, title: "Idols & Paintings", description: "Divine artistry and craftsmanship", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418658/idols_luv8ky_klbimg.png" },
  { icon: Shirt, title: "Ethnic Apparel", description: "Traditional wear and fabrics", customImage: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418655/ethnic_pmar9h_zuydj1.png" }
];

const RetailCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
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
              Retail Categories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of spiritual, cultural, and lifestyle offerings
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                      <CardContent className="p-8 text-center space-y-4">
                        <motion.div
                          className="inline-flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          {category.customImage ? (
                            <img
                              src={category.customImage}
                              alt={category.title}
                              className="h-16 w-16 object-contain rounded-full"
                            />
                          ) : (
                            <Icon className={`h-8 w-8 transition-colors duration-300 ${
                              hoveredIndex === index ? 'text-primary-foreground' : 'text-primary'
                            }`} />
                          )}
                        </motion.div>
                        <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-base text-muted-foreground">
                          {category.description}
                        </p>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Read More Button */}
          <motion.div
            variants={scaleIn}
            className="text-center"
          >
            <Link to="/location-footfall#retail-opportunities">
              <Button
                size="lg"
                className="divine-gradient text-primary-foreground hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Explore All Categories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailCategories;
