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
      <h1 className="text-sm text-center"><a href="https://youtube.com/playlist?list=PLu71SKxNbfoDWGIwaEwhTUR40AbH8qsTo&si=0fc4XUV_BSY5LbMU" target="_blank" className="border-white border-b-2">Chai Aur Code</a> &nbsp; x &nbsp; <a href="https://www.vinaytambey.bio" target="_blank" className="border-white border-b-2">Vinay Tambey</a></h1>
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
