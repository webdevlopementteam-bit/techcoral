import Link from "next/link";
import { ChevronCircleRight } from "../icons";

// Service category pages are empty on WordPress; here they list their sub-services.
export default function HubPage({ title, items }) {
  return (
    <section className="px-[20px] py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <h2 className="text-center text-[30px] leading-[1.5] font-bold text-ink uppercase">{title}</h2>
        <div className="mx-auto mt-[20px] mb-[40px] w-[120px] border-t-[2.5px] border-gold" />
        <ul className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-full items-center gap-[12px] rounded-[10px] border-l-4 border-gold bg-white p-[25px] text-[18px] font-bold text-brand shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-colors hover:bg-brand hover:text-white"
              >
                <ChevronCircleRight className="size-[20px] shrink-0 text-gold" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
