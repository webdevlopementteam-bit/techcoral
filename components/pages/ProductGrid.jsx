import Image from "next/image";
import Link from "next/link";

// Product listing: bordered cards with the image on top and a navy label button.
export default function ProductGrid({ items }) {
  return (
    <section className="px-[20px] py-[60px] md:px-[70px] lg:px-[70px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[20px] min-[500px]:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-[10px] border border-line bg-white p-[15px] transition-shadow hover:shadow-[0_0_10px_rgba(0,0,0,0.12)]"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 500px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
            <span className="mt-[25px] flex min-h-[40px] items-center justify-center rounded-[5px] bg-brand px-[10px] py-[5px] text-center text-[18px] leading-[1.1] font-bold text-white transition-colors xl:text-[20px] group-hover:bg-gold">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
