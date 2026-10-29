"use client";

import { useState } from "react";

// Element Pack vertical tabs: titles on the left, content panel on the right.
export default function ProductTabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    // Element Pack stacks the tabs horizontally below 960px and vertically above it.
    <div className="bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] min-[960px]:flex">
      <div role="tablist" className="flex flex-row flex-wrap min-[960px]:shrink-0 min-[960px]:flex-col">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={`px-[12px] py-[10px] text-left text-[12px] leading-[1.6] font-semibold uppercase transition-colors md:px-[25px] md:py-[15px] min-[960px]:px-[50px] min-[960px]:py-[20px] min-[960px]:leading-[40px] lg:text-[18px] ${
              active === i ? "bg-navy text-white" : "bg-[#fafafa] text-[#181818]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.title}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={active !== i}
          className="flex-1 border-t-[3px] border-navy px-[20px] py-[20px] text-[15px] leading-[1.65] md:px-[30px] md:py-[30px] md:text-[17px] font-medium text-[#232323] lg:border-t-0 lg:px-[60px] [&_li]:mb-[2px] [&_ol]:list-decimal [&_ol]:pl-[20px] [&_p]:mb-[10px] [&_ul]:list-disc [&_ul]:pl-[20px]"
          dangerouslySetInnerHTML={{ __html: tab.html }}
        />
      ))}
    </div>
  );
}
