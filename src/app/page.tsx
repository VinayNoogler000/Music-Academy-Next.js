import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomingWebninars from "@/components/UpcomingWebninars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Chai Aur Code</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebninars />
      <Instructors />
      <Footer />
    </main>
  );
}
