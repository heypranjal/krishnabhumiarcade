import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInDown, scaleIn, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Gateway to Vrindavan's most sacred landmarks and cultural destinations",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "High Footfall",
    description: "Proximity to Prem Mandir, ISKCON Temple & Banke Bihari Temple brings millions annually",
    color: "text-accent"
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Vrindavan's 1st IGBC Gold Rated Retail Green Building - eco-conscious excellence",
    color: "text-green-600"
  }
];

const WhyKBArcade = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Decorative Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
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
              Why Krishna Bhumi Arcade
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of spirituality and commerce in India's most revered destination
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 h-full">
                    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                          <Icon className={`h-8 w-8 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKBArcade;
