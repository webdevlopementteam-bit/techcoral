import Image from "next/image";

export default function ClientGrid({ logos }) {
  return (
    <section className="px-[20px] py-[100px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-[15px] md:grid-cols-3 lg:grid-cols-4">
        {logos.map((src) => (
          <div key={src} className="flex h-[210px] items-center justify-center rounded-[5px] bg-white p-[20px]">
            <div className="relative h-full w-full">
              <Image src={src} alt="" fill sizes="(min-width: 1024px) 270px, 45vw" className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
