import Link from "next/link";
import { PROJECT_BOXES } from "@/lib/site";
import { AngleDoubleRight } from "./icons";

export default function ProjectBoxes() {
  return (
    <section className="bg-[#f3f3f3] px-[10px] pt-[30px] pb-[10px] md:px-[15px] md:py-[80px] lg:px-[30px] lg:py-[50px]">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row">
        {PROJECT_BOXES.map((box) => (
          <div key={box.title.join(" ")} className="p-[10px] md:w-1/2">
            <div
              className="group relative h-[250px] overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat lg:h-[280px]"
              style={{ backgroundImage: `url(${box.image})` }}
            >
              <div className="absolute bottom-0 left-0 pb-[60px] pl-[40px] md:px-[50px] lg:pr-[120px] lg:pb-[70px]">
                <h3 className="font-rubik text-[24px] leading-[1.5] font-semibold text-white uppercase md:text-[22px] lg:text-[24px]">
                  {box.title[0]}
                  <br />
                  {box.title[1]}
                </h3>
                <Link
                  href={box.href}
                  className={`${box.buttonClass} mt-[15px] inline-flex items-center rounded-full px-[20px] py-[10px] font-rubik text-[12px] leading-[1.3] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black md:text-[10px] lg:text-[12px]`}
                >
                  MORE INFO
                  <AngleDoubleRight className="ml-[10px] w-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
