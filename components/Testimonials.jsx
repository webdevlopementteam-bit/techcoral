import { ChevronLeft, ChevronRight } from "./icons";
import SectionHeading from "./SectionHeading";
import TestimonialCarousel from "./TestimonialCarousel";

const navClass =
  "absolute top-1/2 z-10 hidden -translate-y-1/2 lg:flex items-center justify-center rounded-[50px_0_50px_50px] bg-brand p-[15px] text-white transition-colors hover:bg-[#07273a]";

export default function Testimonials() {
  return (
    <section className="bg-[#fffef15c] px-[15px] py-[50px] lg:px-[30px] lg:py-[80px] xl:px-[50px] xl:py-[50px]">
      <div className="mx-auto max-w-[600px] pb-[30px]">
        <SectionHeading>WHAT CLIENT SAY?</SectionHeading>
      </div>

      <div className="relative mx-auto max-w-[1140px] px-[10px]">
        <TestimonialCarousel />

        <button type="button" aria-label="Previous review" className={`review-prev ${navClass} left-0 lg:-left-[60px] xl:-left-[80px]`}>
          <ChevronLeft className="size-[24px] lg:size-[20px]" />
        </button>
        <button type="button" aria-label="Next review" className={`review-next ${navClass} right-0 lg:-right-[60px] xl:-right-[80px]`}>
          <ChevronRight className="size-[24px] lg:size-[20px]" />
        </button>
      </div>
    </section>
  );
}
