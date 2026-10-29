import About from "@/components/About";
import Clients from "@/components/Clients";
import HeroSlider from "@/components/HeroSlider";
import ProjectBoxes from "@/components/ProjectBoxes";
import Testimonials from "@/components/Testimonials";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <ProjectBoxes />
      <Testimonials />
      <Clients />
      <VideoGallery />
    </>
  );
}
