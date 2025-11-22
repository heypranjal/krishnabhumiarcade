import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Store, Building2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import AnimatedLocationMap from "@/components/AnimatedLocationMap";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/lib/animations";

const stats = [
  {
    icon: MapPin,
    title: "Strategic Location",
    subtitle: "Chhatikara Road serves as the gateway to Shree Vrindavan Dham",
    description: "Witnessing millions of visitors annually"
  },
  {
    icon: Users,
    title: "High Footfall",
    subtitle: "Proximity to renowned temples like Prem Mandir, Banke Bihari Mandir, and ISKCON Temple",
    description: "Ensures a steady flow of devotees and tourists"
  },
  {
    icon: Store,
    title: "Tailored Spaces",
    subtitle: "Curated retail areas designed to suit local shop owners and branded retailers",
    description: "Perfect blend of traditional and modern commerce"
  },
  {
    icon: Building2,
    title: "Boost to Sales",
    subtitle: "The concept of divinity and cultural commerce",
    description: "Ensures your business aligns perfectly with visitor expectations"
  }
];

const shopCategories = [
  {
    title: "Puja Samagri Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763817598/Screenshot_2025-11-22_at_6.49.39_PM_xy8yjf.png",
    description: "At Krishna Bhumi Arcade, every shopkeeper gets the advantage of being at the heart of Shree Vrindavan Dham's spiritual and cultural economy. With a perfect blend of demand-driven footfall—from domestic pilgrims to international and domestic travelers—whether you're looking for authentic Bhog samagri or discounted offerings in a modern, air-conditioned retail space, your store is positioned to serve both.",
    bgColor: "#fff7ed"
  },
  {
    title: "Idols & Religious Paintings Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763817962/Screenshot_2025-11-22_at_6.55.50_PM_ux9i68.png",
    description: "Shops at Krishna Bhumi Arcade aren't just retail spaces—they're business gateways to Shree Vrindavan Dham's thriving spiritual economy. By investing here, shopkeepers tap into a steady stream of devotees, tourists, and global pilgrims seeking authentic Hindu religious arts, crafts, and puja essentials.",
    bgColor: "#fffbeb"
  },
  {
    title: "Poshak & Shringar Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818086/Screenshot_2025-11-22_at_6.57.53_PM_biicdq.png",
    description: "Deity-ready poshaks & shringar, inspired by Hindu traditions across different states and regions of India. Krishna Bhumi Arcade will house specialized boutiques and brands which will cater to the cultural needs of international and domestic pilgrims alike.",
    bgColor: "#fdf2f8"
  },
  {
    title: "Ethnic Apparels Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818172/Screenshot_2025-11-22_at_6.59.18_PM_oq1vco.png",
    description: "Ethnic apparel shops at Krishna Bhumi Arcade promise shopkeepers a thriving business opportunity in the heart of Shree Vrindavan Dham's devotional and cultural hub. With constant demand for sarees, kurtas, lehengas, and festive wear during pujas, festivals, and spiritual occasions.",
    bgColor: "#eff6ff"
  },
  {
    title: "Artisan Crafted Jewelry Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818240/Screenshot_2025-11-22_at_7.00.24_PM_skczzy.png",
    description: "Jewellery shops at Krishna Bhumi Arcade offer shopkeepers a unique opportunity to serve both spiritual and lifestyle needs in Shree Vrindavan Dham. From traditional deity shringar to jewellery for devotees, every piece carries deep cultural meaning.",
    bgColor: "#fefce8"
  },
  {
    title: "Itra / Fragrances",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818307/Screenshot_2025-11-22_at_7.01.32_PM_i7jkro.png",
    description: "Itra and fragrance shops at Krishna Bhumi Arcade give shopkeepers the chance to tap into Shree Vrindavan Dham's age-old tradition of sacred scents. With devotees and global pilgrims constantly seeking pure itras, artisanal perfumes, and exotic oils.",
    bgColor: "#faf5ff"
  },
  {
    title: "Incense Paradise",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818378/Screenshot_2025-11-22_at_7.02.47_PM_lvw4ci.png",
    description: "For shopkeepers, incense shops at Krishna Bhumi Arcade guarantee a business rooted in devotion and daily need. With high demand for incense sticks, dhoop, camphor, and puja fragrances from devotees and pilgrims.",
    bgColor: "#f0fdf4"
  },
  {
    title: "Prasadam Centres",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818467/Screenshot_2025-11-22_at_7.04.13_PM_nvplge.png",
    description: "Prasadam is more than food—it's a blessing, and that makes it a high-demand retail opportunity. At Krishna Bhumi Arcade, shopkeepers can tap into the devotional buying habits of pilgrims, devotees, and tourists who constantly seek the divine prasadam.",
    bgColor: "#fff7ed"
  },
  {
    title: "Food Court",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818534/Screenshot_2025-11-22_at_7.05.20_PM_d6rltb.png",
    description: "A vibrant food court at Krishna Bhumi Arcade gives shopkeepers the chance to serve Shree Vrindavan Dham's culinary heritage to thousands of devotees and tourists daily. From chaats to sweets like peda and jalebi.",
    bgColor: "#fef2f2"
  },
  {
    title: "Authentic Snacks Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818600/Screenshot_2025-11-22_at_7.06.23_PM_dmgcph.png",
    description: "Snack shops at Krishna Bhumi Arcade offer a golden opportunity for shopkeepers to sell timeless Bhuj delicacies. From crispy savouries to traditional sweets, the demand for packaged and fresh snacks as gifts and takeaways ensures a strong revenue stream.",
    bgColor: "#fefce8"
  },
  {
    title: "Music Stores",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818683/Screenshot_2025-11-22_at_7.07.45_PM_cjfjky.png",
    description: "Music stores at Krishna Bhumi Arcade offer shopkeepers a niche yet highly relevant business. Pilgrims and tourists consistently seek devotional tracks, bhajans, flutes, tablas, and cultural music that connect them to Krishna's leela.",
    bgColor: "#eef2ff"
  },
  {
    title: "Divine Bookshops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818717/Screenshot_2025-11-22_at_7.08.25_PM_nfvqnn.png",
    description: "Bookshops at Krishna Bhumi Arcade offer shopkeepers a unique niche—selling sacred texts, philosophical works, and devotional literature. With pilgrims, scholars, and cultural tourists flocking to Shree Vrindavan for spiritual knowledge.",
    bgColor: "#f0fdfa"
  },
  {
    title: "Wellness and Healthy Lifestyle Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763818963/Screenshot_2025-11-22_at_7.12.31_PM_prna1g.png",
    description: "Health and spirituality go hand in hand, making wellness shops here a future-ready investment. By blending Ayurvedic remedies, organic products, and spiritual wellness items, shopkeepers tap into a fast-growing market.",
    bgColor: "#f0fdf4"
  },
  {
    title: "Flowers & Ethnic Decor Shops",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763819117/Screenshot_2025-11-22_at_7.13.13_PM_fsfdoj.png",
    description: "With every puja, festival, and cultural event requiring flowers and ethnic décor, these shops offer shopkeepers a high-demand, evergreen business. From floral arrangements to traditional decorative items.",
    bgColor: "#fdf2f8"
  },
  {
    title: "Tour & Travel Centre / Concierge Services",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763819228/Screenshot_2025-11-22_at_7.16.53_PM_snanog.png",
    description: "For shopkeepers, a travel concierge at Krishna Bhumi Arcade means steady income from Shree Vrindavan Dham's growing tourist base. With millions visiting each year, services like guided tours, transport, and spiritual itineraries are in constant demand.",
    bgColor: "#eff6ff"
  }
];

const LocationFootfallPage = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(https://i.ibb.co/fd7M4W4Y/bg-image-2.png)`,
        imageRendering: 'high-quality'
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-secondary/80 backdrop-blur-md">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://i.ibb.co/1fmNP2zs/grid-1.webp)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <Link to="/" className="absolute top-8 left-4 md:left-8 z-20">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Location & Footfall
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Discover the strategic advantage of Krishna Bhumi Arcade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="mb-16 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl"
          >
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                Located at the heart of <span className="font-bold text-primary">Shree Vrindavan Dham</span>, on the bustling
                Main Chhatikara-Vrindavan Road, <span className="font-bold text-secondary">Krishna Bhumi Arcade</span> isn't
                just a commercial development—it's a <span className="font-semibold text-accent">spiritual and cultural
                experience</span>. Aimed at creating an immersive environment for
                devotees, visitors, and shop owners alike, it is set to transform
                the retail landscape of Shree Vrindavan Dham.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/40 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                      >
                        <Icon className="h-7 w-7 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {stat.title}
                        </h3>
                        <p className="text-base font-medium text-foreground/80 mb-2">
                          {stat.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Animated Location Map Section */}
      <AnimatedLocationMap />

      {/* Main Content */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">

          {/* Market Size */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
              Market Opportunity
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scaleIn}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="mb-20 rounded-2xl border border-amber-400/30 backdrop-blur-xl bg-gradient-to-br from-amber-600/90 to-orange-600/90 shadow-2xl"
          >
            <div className="p-12 text-white text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-4 text-white/95"
              >
                Indian Spiritual Market Size*
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-6xl font-extrabold mb-3"
              >
                $58.56 BILLION
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-white/95"
              >
                Products | Tech | Tourism
              </motion.p>
            </div>
          </motion.div>

          {/* Retail Opportunities */}
          <motion.div
            id="retail-opportunities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="text-center mb-16 scroll-mt-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
              Retail Opportunities at Krishna Bhumi Arcade
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Discover diverse retail categories designed to serve millions of devotees and visitors
            </p>
          </motion.div>

          {/* Shop Categories */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {shopCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 md:p-12 border border-white/30 backdrop-blur-2xl shadow-2xl"
                style={{
                  backgroundColor: `${category.bgColor}70`,
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)'
                }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20"
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-80 object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-serif">
                          {category.title}
                        </h3>
                        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-serif">
                          {category.title}
                        </h3>
                        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20"
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-80 object-cover"
                        />
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sources */}
          <div className="text-center mt-16">
            <p className="text-xs text-muted-foreground italic">
              *Sources:<br />
              https://www.imarc.com/india-religious-spiritual-market<br />
              https://www.expertmarketresearch.com/reports/indian-religious-and-spiritual-market<br />
              https://www.reportlinker.com/p06767633/india-spiritual-market-trends-growth-insights
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationFootfallPage;
