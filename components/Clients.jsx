import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/site";
import SectionHeading from "./SectionHeading";

function LogoRow({ hidden }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {CLIENT_LOGOS.map((src) => (
        <div
          key={src}
          className="ml-[15px] flex h-[180px] w-[200px] shrink-0 items-center justify-center rounded-[10px] bg-white p-[5px]"
        >
          <Image src={src} alt="" width={190} height={170} className="h-full w-full object-contain" />
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="p-[20px]">
      <SectionHeading dividerWidth="10%">OUR CLIENTS</SectionHeading>
      {/* ~100px/s, matching the Element Pack marquee speed; pauses on hover */}
      <div className="group/marquee mt-[20px] overflow-hidden">
        <div className="animate-marquee flex w-max" style={{ "--marquee-duration": `${CLIENT_LOGOS.length * 2.15}s` }}>
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
