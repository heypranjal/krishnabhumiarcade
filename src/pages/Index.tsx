import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import WhyKBArcade from "@/components/WhyKBArcade";
import RetailCategories from "@/components/RetailCategories";
import Amenities from "@/components/Amenities";
import UnparalleledLocation from "@/components/UnparalleledLocation";
import LocationAdvantage from "@/components/LocationAdvantage";
import Developer from "@/components/Developer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <WhyKBArcade />
      <RetailCategories />
      <Amenities />
      <UnparalleledLocation />
      <LocationAdvantage />
      <Developer />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
