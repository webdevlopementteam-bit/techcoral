"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { TESTIMONIALS } from "@/lib/site";
import useHydrated from "@/lib/useHydrated";
import { Star } from "./icons";

function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

export function ReviewCard({ review }) {
  return (
    <div className="h-full rounded-[50px_0_50px_50px] border border-[#a79aff33] bg-brand p-[30px] text-left transition-colors duration-300 hover:bg-[#0d3c57] md:p-[40px]">
      <h3 className="font-montserrat text-[18px] leading-[1.5] font-semibold text-white uppercase">{review.title}</h3>
      <div className="mt-[10px] font-montserrat text-[14px] leading-[1.65] text-[#efefef]">
        <p>
          <RichText text={review.text} />
        </p>
      </div>
      <div className="mt-[5px] mb-[20px] flex gap-[6px] text-gold">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-[15px]" />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const hydrated = useHydrated();

  // Server HTML: all reviews are present for crawlers; two show on desktop, one on mobile.
  if (!hydrated) {
    return (
      <div className="grid gap-[50px] p-[10px] min-[999px]:grid-cols-2">
        {TESTIMONIALS.map((review, i) => (
          <div key={review.title} className={i === 0 ? undefined : i === 1 ? "max-[998px]:hidden" : "hidden"}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      loop
      speed={500}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{ 999: { slidesPerView: 2, spaceBetween: 50 } }}
      navigation={{ prevEl: ".review-prev", nextEl: ".review-next" }}
      className="!-mx-[10px] !p-[10px]"
    >
      {TESTIMONIALS.map((review) => (
        <SwiperSlide key={review.title} className="!h-auto">
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
