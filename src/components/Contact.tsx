import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden scroll-mt-20">
      {/* Parallax Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
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
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
              Seize This Divine Investment Opportunity
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground">
              Connect with us to explore retail opportunities at Krishna Bhumi Arcade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {/* Contact Form */}
            <motion.div variants={fadeInLeft}>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-2"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="mt-2"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="mt-2 min-h-32"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full divine-gradient text-lg py-6"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-2">Phone</h3>
                      <a href="tel:+919696968899" className="text-muted-foreground hover:text-primary transition-colors">
                        +91-9696 968 899
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-2">Email</h3>
                      <a href="mailto:sales@krishnabhumiarcade.com" className="text-muted-foreground hover:text-primary transition-colors">
                        sales@krishnabhumiarcade.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg divine-gradient flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Main Chhatikara-Vrindavan Road<br />
                        Mathura, Uttar Pradesh, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-secondary mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.instagram.com/krishnabhumiarcade?igsh=dGdhOHkyMW92eDNn"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full divine-gradient flex items-center justify-center"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/posts/krishna-bhumi-seva-1_atratfassatcataatrate-aslatfattatpaszatjateatkatb-activity-7396575414023831552-OO96?utm_source=share&utm_medium=member_android&rcm=ACoAADkxKnkBT6m1Z_OeZhtCiUEArXS-ELUzW6Y"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full divine-gradient flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                    <motion.a
                      href="https://youtube.com/@krishnabhumiinfinity?si=L9kCM-EEmAWOhXz0"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full divine-gradient flex items-center justify-center"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
