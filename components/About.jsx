import Image from "next/image";
import Link from "next/link";
import { ABOUT_POINTS, ABOUT_TEXT } from "@/lib/site";
import { CheckCircle } from "./icons";
import SectionHeading from "./SectionHeading";

export default function About({ paragraphs = [ABOUT_TEXT], showButton = true, className = "" }) {
  return (
    <section id="about" className={`scroll-mt-0 px-0 pt-0 pb-0 md:px-[30px] md:pt-[70px] md:pb-[30px] ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-[40%] md:shrink-0 md:p-[10px]">
          <Image
            src="/images/about.webp"
            alt=""
            width={2500}
            height={2500}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="p-[20px] md:w-[60%] md:p-[10px]">
          <SectionHeading align="left">ABOUT US</SectionHeading>

          {paragraphs.map((text) => (
            <p key={text} className="mt-[20px] text-center text-[16px] leading-[1.65] text-[#232323] md:text-left">
              {text}
            </p>
          ))}

          <div className="mt-[20px] flex flex-col md:flex-row">
            {ABOUT_POINTS.map((column, i) => (
              <div key={i} className={i === 0 ? "md:w-[60%] md:p-[10px]" : "pt-[10px] md:w-[40%] md:p-[10px]"}>
                {column.map((point, j) => (
                  <div key={point} className={`flex items-start gap-[15px] ${j > 0 ? "mt-[20px]" : ""}`}>
                    <CheckCircle className="mt-[2px] size-[25px] shrink-0 text-check" />
                    <h3 className="text-[17px] leading-[1.5] font-bold text-ink">{point}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {showButton && (
            <div className="pt-[20px] text-center md:text-left">
              <Link
                href="/about/"
                className="inline-block rounded-[3px] bg-brand px-[24px] py-[12px] text-[15px] leading-none text-white transition-colors duration-300 hover:bg-gold focus:bg-gold"
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
