import Image from "next/image";
import Link from "next/link";
import { Home } from "../icons";

// Elementor page-title section: cover image, 30% ink overlay, heading + breadcrumbs.
export default function PageBanner({ title, crumb, image }) {
  return (
    <section className="relative flex min-h-[220px] items-center overflow-hidden md:min-h-[350px]">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink opacity-30" />
      <div className="relative mx-auto w-full max-w-[1140px] px-[10px] text-center md:text-left">
        <h1 className="text-[30px] leading-[1.5] font-bold text-white md:text-[50px]">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-[10px]">
          <ol className="flex items-center justify-center gap-[10px] text-[16px] text-white md:justify-start">
            <li className="flex items-center gap-[8px]">
              <Home className="size-[14px]" />
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">»</li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
