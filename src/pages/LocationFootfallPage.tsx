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
    description: "Witnessing millions of visitors annually",
    customImage: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763820336/strategic_location_fhgony.png"
  },
  {
    icon: Users,
    title: "High Footfall",
    subtitle: "Proximity to renowned temples like Prem Mandir, Banke Bihari Mandir, and ISKCON Temple",
    description: "Ensures a steady flow of devotees and tourists",
    customImage: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763820756/footfall_fk1zpj.png"
  },
  {
    icon: Store,
    title: "Tailored Spaces",
    subtitle: "Curated retail areas designed to suit local shop owners and branded retailers",
    description: "Perfect blend of traditional and modern commerce",
    customImage: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763823238/tailored_space_cd3hkk.png"
  },
  {
    icon: Building2,
    title: "Boost to Sales",
    subtitle: "The concept of divinity and cultural commerce",
    description: "Ensures your business aligns perfectly with visitor expectations",
    customImage: "https://res.cloudinary.com/dadfpmrat/image/upload/v1763823352/boost_to_sales_m8gc7f.png"
  }
];

const shopCategories = [
  {
    title: "Puja Samagri Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418674/Puja_Samagri_Shops_ekpjk3.png",
    description: "At Krishna Bhumi Arcade, every shopkeeper gets the advantage of being at the heart of Shree Vrindavan Dham's spiritual and cultural economy. With a perfect blend of demand-driven footfall—from domestic pilgrims to international and domestic travelers—whether you're looking for authentic Bhog samagri or discounted offerings in a modern, air-conditioned retail space, your store is positioned to serve both.",
    bgColor: "#fff7ed"
  },
  {
    title: "Idols & Religious Paintings Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418656/idols_shops_hikajg.png",
    description: "Shops at Krishna Bhumi Arcade aren't just retail spaces—they're business gateways to Shree Vrindavan Dham's thriving spiritual economy. By investing here, shopkeepers tap into a steady stream of devotees, tourists, and global pilgrims seeking authentic Hindu religious arts, crafts, and puja essentials.",
    bgColor: "#fffbeb"
  },
  {
    title: "Poshak & Shringar Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418660/Poshak_Shringar_Shops_y4eiu9.png",
    description: "Deity-ready poshaks & shringar, inspired by Hindu traditions across different states and regions of India. Krishna Bhumi Arcade will house specialized boutiques and brands which will cater to the cultural needs of international and domestic pilgrims alike.",
    bgColor: "#fdf2f8"
  },
  {
    title: "Ethnic Apparels Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418653/Ethnic_Apparels_Shops_rdfroz.png",
    description: "Ethnic apparel shops at Krishna Bhumi Arcade promise shopkeepers a thriving business opportunity in the heart of Shree Vrindavan Dham's devotional and cultural hub. With constant demand for sarees, kurtas, lehengas, and festive wear during pujas, festivals, and spiritual occasions.",
    bgColor: "#eff6ff"
  },
  {
    title: "Artisan Crafted Jewelry Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418651/Artisan_Crafted_Jewelry_Shops_aiev8r.png",
    description: "Jewellery shops at Krishna Bhumi Arcade offer shopkeepers a unique opportunity to serve both spiritual and lifestyle needs in Shree Vrindavan Dham. From traditional deity shringar to jewellery for devotees, every piece carries deep cultural meaning.",
    bgColor: "#fefce8"
  },
  {
    title: "Itra / Fragrances",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418657/Itra_and_fragrance_shops_vtsxiw.png",
    description: "Itra and fragrance shops at Krishna Bhumi Arcade give shopkeepers the chance to tap into Shree Vrindavan Dham's age-old tradition of sacred scents. With devotees and global pilgrims constantly seeking pure itras, artisanal perfumes, and exotic oils.",
    bgColor: "#faf5ff"
  },
  {
    title: "Incense Paradise",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418657/Incense_Paradise_mxpglv.png",
    description: "For shopkeepers, incense shops at Krishna Bhumi Arcade guarantee a business rooted in devotion and daily need. With high demand for incense sticks, dhoop, camphor, and puja fragrances from devotees and pilgrims.",
    bgColor: "#f0fdf4"
  },
  {
    title: "Prasadam Centres",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418660/Prasadam_Centres_sfjr9q.png",
    description: "Prasadam is more than food—it's a blessing, and that makes it a high-demand retail opportunity. At Krishna Bhumi Arcade, shopkeepers can tap into the devotional buying habits of pilgrims, devotees, and tourists who constantly seek the divine prasadam.",
    bgColor: "#fff7ed"
  },
  {
    title: "Food Court",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418655/food_court_vq2m4t.png",
    description: "A vibrant food court at Krishna Bhumi Arcade gives shopkeepers the chance to serve Shree Vrindavan Dham's culinary heritage to thousands of devotees and tourists daily. From chaats to sweets like peda and jalebi.",
    bgColor: "#fef2f2"
  },
  {
    title: "Authentic Snacks Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418651/authentic_snacks_shops_nvk0m1.png",
    description: "Snack shops at Krishna Bhumi Arcade offer a golden opportunity for shopkeepers to sell timeless Bhuj delicacies. From crispy savouries to traditional sweets, the demand for packaged and fresh snacks as gifts and takeaways ensures a strong revenue stream.",
    bgColor: "#fefce8"
  },
  {
    title: "Music Stores",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418660/music_instruments_shop_fvntfc.png",
    description: "Music stores at Krishna Bhumi Arcade offer shopkeepers a niche yet highly relevant business. Pilgrims and tourists consistently seek devotional tracks, bhajans, flutes, tablas, and cultural music that connect them to Krishna's leela.",
    bgColor: "#eef2ff"
  },
  {
    title: "Divine Bookshops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418660/music_instruments_shop_fvntfc.png",
    description: "Bookshops at Krishna Bhumi Arcade offer shopkeepers a unique niche—selling sacred texts, philosophical works, and devotional literature. With pilgrims, scholars, and cultural tourists flocking to Shree Vrindavan for spiritual knowledge.",
    bgColor: "#f0fdfa"
  },
  {
    title: "Wellness and Healthy Lifestyle Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418665/Wellness_and_Healthy_Lifestyle_Shops_ncwpsh.png",
    description: "Health and spirituality go hand in hand, making wellness shops here a future-ready investment. By blending Ayurvedic remedies, organic products, and spiritual wellness items, shopkeepers tap into a fast-growing market.",
    bgColor: "#f0fdf4"
  },
  {
    title: "Flowers & Ethnic Decor Shops",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418654/flower_shop_jdxqhl.png",
    description: "With every puja, festival, and cultural event requiring flowers and ethnic décor, these shops offer shopkeepers a high-demand, evergreen business. From floral arrangements to traditional decorative items.",
    bgColor: "#fdf2f8"
  },
  {
    title: "Tour & Travel Centre / Concierge Services",
    image: "https://res.cloudinary.com/drsb05yxo/image/upload/v1764418666/tour_kbzwxy.png",
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
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-secondary/80 backdrop-blur-md">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://i.ibb.co/1fmNP2zs/grid-1.webp)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <Link to="/" className="absolute top-4 sm:top-6 md:top-8 left-4 md:left-8 z-20">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/20 text-sm sm:text-base"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </Link>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight">
            Location & Footfall
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 px-2">
            Discover the strategic advantage of Krishna Bhumi Arcade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="mb-12 sm:mb-16 rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl"
          >
            <div className="p-6 sm:p-8 md:p-12">
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
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
            className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/40 transition-all duration-300"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        {stat.customImage ? (
                          <img
                            src={stat.customImage}
                            alt={stat.title}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full"
                          />
                        ) : (
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                          </div>
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                          {stat.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-foreground/80 mb-2">
                          {stat.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">

          {/* Market Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4 font-serif px-4">
              Market Opportunity
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2, margin: "50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="mb-12 sm:mb-16 md:mb-20 rounded-xl sm:rounded-2xl border border-amber-400/30 backdrop-blur-xl bg-gradient-to-br from-amber-600/90 to-orange-600/90 shadow-2xl"
          >
            <div className="p-6 sm:p-8 md:p-12 text-white text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white/95 px-2"
              >
                Indian Spiritual Market Size*
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3"
              >
                $58.56 BILLION
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-white/95"
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
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInDown}
            className="text-center mb-12 sm:mb-14 md:mb-16 scroll-mt-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4 font-serif px-4 leading-tight">
              Retail Opportunities at Krishna Bhumi Arcade
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-foreground/80 max-w-4xl mx-auto px-4">
              Discover diverse retail categories designed to serve millions of devotees and visitors
            </p>
          </motion.div>

          {/* Shop Categories */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {shopCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-white/30 backdrop-blur-2xl shadow-2xl"
                style={{
                  backgroundColor: `${category.bgColor}70`,
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)'
                }}
              >
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 order-1 md:order-1"
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      </motion.div>
                      <div className="order-2 md:order-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6 font-serif leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6 font-serif leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 order-1 md:order-2"
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sources */}
          <div className="text-center mt-12 sm:mt-14 md:mt-16 px-4">
            <p className="text-xs sm:text-sm text-muted-foreground italic break-words">
              *Sources:<br />
              <span className="text-[10px] sm:text-xs">https://www.imarc.com/india-religious-spiritual-market</span><br />
              <span className="text-[10px] sm:text-xs">https://www.expertmarketresearch.com/reports/indian-religious-and-spiritual-market</span><br />
              <span className="text-[10px] sm:text-xs">https://www.reportlinker.com/p06767633/india-spiritual-market-trends-growth-insights</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationFootfallPage;
