import { VIDEOS } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function VideoGallery() {
  return (
    <section className="bg-white p-0 md:p-[20px]">
      <div className="pt-[20px] md:pt-0">
        <SectionHeading dividerWidth="10%">VIDEO GALLERY</SectionHeading>
      </div>
      <div className="flex flex-col p-0 md:flex-row md:px-[50px] md:pt-[20px] md:pb-[50px]">
        {VIDEOS.map((id) => (
          <div
            key={id}
            className="m-[10px] bg-white p-[10px] transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.23)] md:flex-1"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0`}
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
