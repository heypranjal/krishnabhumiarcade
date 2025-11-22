import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const landmarks = [
  "Prem Mandir - 2.5 km",
  "ISKCON Temple - 3 km",
  "Banke Bihari Temple - 4 km",
  "Chandrodaya Mandir - 5 km",
  "Yamuna Expressway - 15 km",
  "Jewar Airport - 60 km"
];

const LocationAdvantage = () => {
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
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
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
              Location Advantage
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Strategically positioned at the gateway of divine experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div variants={fadeInLeft}>
              <Card className="overflow-hidden shadow-2xl h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-96 w-full bg-muted relative"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.6776895!2d77.6759!3d27.5808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzUxLjAiTiA3N8KwNDAnMzMuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Krishna Bhumi Arcade Location"
                  />
                </motion.div>
              </Card>
            </motion.div>

            {/* Location Details */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              {/* Address */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">Prime Location</h3>
                        <p className="text-muted-foreground">
                          Main Chhatikara-Vrindavan Road, Mathura, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Connectivity */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                          <Navigation className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">Excellent Connectivity</h3>
                        <p className="text-muted-foreground">
                          Connected via Yamuna Expressway and NH-19, providing seamless access from Delhi, Agra, and beyond
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Nearby Landmarks */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                          <Landmark className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-secondary mb-4">Nearby Landmarks</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {landmarks.map((landmark, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span>{landmark}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
