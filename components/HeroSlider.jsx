import HeroCarousel from "./HeroCarousel";
import { AngleDoubleDown, OutlineArrow } from "./icons";

export default function HeroSlider() {
  return (
    <section className="relative">
      <div className="relative">
        <HeroCarousel />

        <button
          type="button"
          aria-label="Previous slide"
          className="hero-prev absolute top-1/2 left-[25px] z-10 hidden -translate-y-1/2 p-[10px] text-white transition-colors hover:text-gold md:block"
        >
          <OutlineArrow className="size-[22px]" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="hero-next absolute top-1/2 right-[25px] z-10 hidden -translate-y-1/2 p-[10px] text-white transition-colors hover:text-gold md:block"
        >
          <OutlineArrow direction="right" className="size-[22px]" />
        </button>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-[58px] left-1/2 z-10 flex h-[58px] w-[38px] -translate-x-1/2 items-center justify-center rounded-[20px] bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.15)] max-md:bottom-[60px] max-md:h-[52px] max-md:w-[34px]"
        >
          <AngleDoubleDown className="w-[12px]" />
        </a>
      </div>

      {/* Soft drop shadow under the slider, as on the live site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-full left-0 h-[35px] w-full bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(0,0,0,0.28),transparent)]"
      />
    </section>
  );
}
