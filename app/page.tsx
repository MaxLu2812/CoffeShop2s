import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import MenuPreview from "@/components/sections/menu-preview";
import Testimonials from "@/components/sections/testimonials";
import GalleryPreview from "@/components/sections/gallery-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MenuPreview />
      <Testimonials />
      <GalleryPreview />
    </>
  );
}
