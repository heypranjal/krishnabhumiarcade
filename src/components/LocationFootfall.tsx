import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Users, Store, Building2 } from "lucide-react";
import { fadeInDown, fadeInUp, fadeInLeft, scaleIn, staggerContainer } from "@/lib/animations";

const stats = [
  {
    icon: MapPin,
    title: "Strategic Location",
    subtitle: "Chhatikara Road serves as the gateway to Shree Vrindavan Dham",
    description: "Witnessing millions of visitors annually",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "High Footfall",
    subtitle: "Proximity to renowned temples like Prem Mandir, Banke Bihari Mandir, and ISKCON Temple",
    description: "Ensures a steady flow of devotees and tourists",
    color: "text-accent"
  },
  {
    icon: Store,
    title: "Tailored Spaces",
    subtitle: "Curated retail areas designed to suit local shop owners and branded retailers",
    description: "Perfect blend of traditional and modern commerce",
    color: "text-green-600"
  },
  {
    icon: Building2,
    title: "Boost to Sales",
    subtitle: "The concept of divinity and cultural commerce",
    description: "Ensures your business aligns perfectly with visitor expectations",
    color: "text-secondary"
  }
];

const marketData = [
  {
    title: "Indian Spiritual Market Size*",
    value: "$58.56 BILLION",
    subtitle: "Products | Tech | Tourism",
    gradient: "from-amber-600 to-orange-600"
  }
];

const LocationFootfall = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
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
          {/* Main Title */}
          <motion.div
            variants={fadeInDown}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Location, Footfall & Retail Excellence
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            variants={fadeInLeft}
            className="mb-16"
          >
            <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                  Located at the heart of <span className="font-bold text-primary">Shree Vrindavan Dham</span>, on the bustling
                  Main Chhatikara-Vrindavan Road, <span className="font-bold text-secondary">Krishna Bhumi Arcade</span> isn't
                  just a commercial development—it's a <span className="font-semibold text-accent">spiritual and cultural
                  experience</span>. Aimed at creating an immersive environment for
                  devotees, visitors, and shop owners alike, it is set to transform
                  the retail landscape of Shree Vrindavan Dham.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center`}>
                          <Icon className={`h-7 w-7 ${stat.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-secondary mb-2">
                            {stat.title}
                          </h3>
                          <p className="text-base font-medium text-foreground/80 mb-2">
                            {stat.subtitle}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Market Size Card */}
          <motion.div
            variants={scaleIn}
            className="mb-16"
          >
            <Card className="overflow-hidden shadow-2xl border-2 border-primary/30">
              <CardContent className={`p-12 bg-gradient-to-br ${marketData[0].gradient} text-white`}>
                <div className="text-center">
                  <motion.h3
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold mb-4 text-white/90"
                  >
                    {marketData[0].title}
                  </motion.h3>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-extrabold mb-3"
                  >
                    {marketData[0].value}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/90"
                  >
                    {marketData[0].subtitle}
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mall Interior Image */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.ibb.co/1fmNP2zs/grid-1.webp"
                  alt="Krishna Bhumi Arcade Interior"
                  className="w-full h-80 object-cover"
                />
                <CardContent className="p-6 bg-card text-center">
                  <h3 className="font-bold text-xl text-secondary mb-2">
                    Divine Shopping Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Blending tradition with modern retail excellence
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exterior/Location Image */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.ibb.co/5WsTMv70/kba-homepage-image-2.webp"
                  alt="Krishna Bhumi Arcade Location"
                  className="w-full h-80 object-cover"
                />
                <CardContent className="p-6 bg-card text-center">
                  <h3 className="font-bold text-xl text-secondary mb-2">
                    Prime Location
                  </h3>
                  <p className="text-muted-foreground">
                    Gateway to Vrindavan's spiritual landmarks
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Sources Citation */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <p className="text-xs text-muted-foreground italic">
              *Sources:<br />
              https://www.imarc.com/india-religious-spiritual-market<br />
              https://www.expertmarketresearch.com/reports/indian-religious-and-spiritual-market<br />
              https://www.reportlinker.com/p06767633/india-spiritual-market-trends-growth-insights
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationFootfall;
