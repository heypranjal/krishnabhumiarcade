import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/lib/animations";

const milestones = [
  {
    id: 1,
    title: "Foundation & Basement Completed",
    description: "Deep foundation work and basement structural framework successfully completed with reinforced concrete.",
    date: "January 2024",
    status: "completed",
    progress: 100,
    icon: "⛏",
    photos: [
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Structural Framework Rising",
    description: "Main structural columns and beams construction in progress across all floors with premium grade materials.",
    date: "March 2024",
    status: "completed",
    progress: 100,
    icon: "🧱",
    photos: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1625806786037-2af608423424?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Glass Façade Installation",
    description: "Premium imported glass panels being installed to create the stunning modern exterior with energy-efficient features.",
    date: "June 2024",
    status: "in-progress",
    progress: 65,
    icon: "🪟",
    photos: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Lift & Escalator Systems",
    description: "Installation of high-speed elevators and premium escalators from leading German manufacturers.",
    date: "August 2024",
    status: "in-progress",
    progress: 45,
    icon: "🛗",
    photos: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Landscaping & Exterior Finishing",
    description: "Creating beautiful green spaces and premium exterior finishes with traditional Vrindavan-inspired design elements.",
    date: "October 2024",
    status: "delayed",
    progress: 20,
    icon: "🌿",
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Interior Retail Fit-outs",
    description: "Premium interior finishing for retail spaces with modern amenities and traditional spiritual aesthetics.",
    date: "December 2024",
    status: "pending",
    progress: 0,
    icon: "🛍",
    photos: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Grand Opening Preparation",
    description: "Final touches, quality inspections, and grand opening preparations for Krishna Bhumi Arcade's inauguration.",
    date: "February 2025",
    status: "pending",
    progress: 0,
    icon: "🎉",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-emerald-500";
    case "in-progress":
      return "bg-amber-500";
    case "delayed":
      return "bg-rose-500";
    default:
      return "bg-slate-400";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "delayed":
      return "Delayed";
    default:
      return "Pending";
  }
};

const ConstructionTimelinePage = () => {
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
            Construction Timeline
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Track the progress of Krishna Bhumi Arcade with real-time milestone updates
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500/30 via-amber-500/50 to-amber-500/30 origin-top"
            />

            {/* Milestones */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={staggerContainer}
              className="space-y-16"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl p-8 border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/40 transition-all duration-300"
                    >
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                        index % 2 === 0 ? "float-right" : "float-left"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${
                          milestone.status === "completed" ? "rgba(16, 185, 129, 0.2)" :
                          milestone.status === "in-progress" ? "rgba(245, 158, 11, 0.2)" :
                          milestone.status === "delayed" ? "rgba(244, 63, 94, 0.2)" :
                          "rgba(148, 163, 184, 0.2)"
                        } 0%, transparent 100%)`,
                      }}>
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(milestone.status)}`} />
                        <span className="text-xs font-semibold tracking-wider text-white/90">
                          {getStatusText(milestone.status)}
                        </span>
                      </div>

                      <div className="clear-both" />

                      {/* Icon */}
                      <div className={`text-5xl mb-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        <span className="inline-block filter drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                          {milestone.icon}
                        </span>
                      </div>

                      {/* Title & Date */}
                      <h3 className="text-2xl font-bold text-secondary mb-2">{milestone.title}</h3>
                      <p className="text-primary font-medium mb-4 text-sm tracking-wide">{milestone.date}</p>

                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed mb-6">{milestone.description}</p>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground font-medium">Progress</span>
                          <span className="text-sm text-primary font-bold">{milestone.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                            style={{ width: `${milestone.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Photos */}
                      <div className="grid grid-cols-3 gap-3">
                        {milestone.photos.map((photo, photoIndex) => (
                          <motion.div
                            key={photoIndex}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-xl overflow-hidden aspect-square"
                          >
                            <img
                              src={photo}
                              alt={`${milestone.title} - Photo ${photoIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon Badge */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-4 border-primary shadow-xl flex items-center justify-center">
                        <span className="text-2xl">
                          {milestone.icon}
                        </span>
                      </div>
                      {/* Pulse Ring */}
                      {milestone.status === "in-progress" && (
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      )}
                    </motion.div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Overall Progress Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="mt-24 rounded-2xl p-12 border border-white/20 backdrop-blur-xl bg-white/30 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">Overall Project Progress</h2>
              <p className="text-foreground/80 text-lg">Krishna Bhumi Arcade Construction Status</p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-foreground/80 font-medium">Total Completion</span>
                  <span className="text-3xl text-primary font-bold">55%</span>
                </div>
                <div className="h-6 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-emerald-500 mb-2">3</div>
                  <div className="text-muted-foreground text-sm">Completed</div>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-amber-500 mb-2">2</div>
                  <div className="text-muted-foreground text-sm">In Progress</div>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-slate-400 mb-2">2</div>
                  <div className="text-muted-foreground text-sm">Upcoming</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConstructionTimelinePage;
