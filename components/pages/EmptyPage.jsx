import Link from "next/link";
import { CONTACT } from "@/lib/site";

// These pages have no content on WordPress either; keep them useful with a contact prompt.
export default function EmptyPage({ title }) {
  return (
    <section className="px-[20px] py-[90px]">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[30px] leading-[1.5] font-bold text-ink">{title}</h2>
        <div className="mx-auto mt-[20px] mb-[25px] w-[120px] border-t-[2.5px] border-gold" />
        <p className="text-[17px] text-[#232323]">
          Detailed information for this section is being updated. For specifications, quotations or site requirements,
          please get in touch with our team.
        </p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-[15px]">
          <Link
            href="/contact/"
            className="rounded-[3px] bg-brand px-[24px] py-[12px] text-[15px] leading-none text-white transition-colors hover:bg-gold"
          >
            Contact Us
          </Link>
          <a
            href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
            className="rounded-[3px] border border-brand px-[24px] py-[12px] text-[15px] leading-none text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {CONTACT.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
