"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { HERO_SLIDES } from "@/lib/site";
import useHydrated from "@/lib/useHydrated";

export function HeroSlide({ slide, priority = false }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <Image
        src={slide.image}
        alt={slide.title.join(" ")}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#00000054]" />
      <div className="absolute top-1/2 left-[26px] w-[320px] max-w-[320px] -translate-y-1/2 pr-[15px] md:left-[47px] md:w-auto md:max-w-none md:pr-0 md:pl-[80px]">
        <h1 className="text-[22px] leading-[1.5] font-bold text-white md:text-[55px]">
          {slide.title.map((line, j) => (
            <span key={j} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-[10px] text-[10px] leading-[1.65] text-white md:mt-[20px] md:text-[18px]">
          {slide.text.map((line, j) => (
            <span key={j} className="md:block">
              {line}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const hydrated = useHydrated();

  // Server HTML: every slide is present for crawlers, only the first is visible.
  if (!hydrated) {
    return (
      <div className="relative h-[220px] md:h-[530px]">
        {HERO_SLIDES.map((slide, i) => (
          <div key={slide.image} className={i === 0 ? "absolute inset-0" : "hidden"}>
            <HeroSlide slide={slide} priority={i === 0} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, EffectCube, Navigation]}
      effect="cube"
      cubeEffect={{ shadow: false, slideShadows: false }}
      loop
      speed={1500}
      autoplay={{ delay: 4000 }}
      navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
      className="h-[220px] md:h-[530px]"
    >
      {HERO_SLIDES.map((slide, i) => (
        <SwiperSlide key={slide.image}>
          <HeroSlide slide={slide} priority={i === 0} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
