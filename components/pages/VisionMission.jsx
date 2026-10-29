"use client";

import { useState } from "react";
import Image from "next/image";

export default function VisionMission({ items }) {
  const [active, setActive] = useState(0);

  return (
    <section className="px-[15px] py-[50px] md:px-[70px]">
      <div className="mx-auto max-w-[1300px] bg-white">
        <div role="tablist" className="grid grid-cols-2 gap-[2px]">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`py-[40px] text-[20px] font-medium tracking-wide text-white uppercase transition-colors ${
                active === i ? "bg-brand" : "bg-[#2a87c1] hover:bg-[#2479ad]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        {/* Both panels stay in the HTML (inactive one hidden) so crawlers see the mission text too */}
        {items.map((item, i) => (
          <div
            key={item.title}
            role="tabpanel"
            hidden={active !== i}
            className="flex flex-col items-center gap-[30px] py-[40px] md:flex-row"
          >
            <p className="text-[18px] leading-[1.8] text-black md:w-1/2 md:pr-[20px] lg:text-[20px]">{item.text}</p>
            <div className="md:w-1/2 md:px-[20px]">
              <Image
                src={item.image}
                alt={item.title}
                width={612}
                height={340}
                sizes="(min-width: 768px) 45vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
