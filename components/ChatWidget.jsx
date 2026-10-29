import { CONTACT } from "@/lib/site";
import { WhatsApp } from "./icons";

// Replaces the Chaty plugin: a single WhatsApp channel with a "Contact us" call-out.
export default function ChatWidget() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed right-[25px] bottom-[25px] z-[90] flex items-center gap-[10px]"
    >
      <span className="relative rounded-[10px] bg-white px-[15px] py-[3px] text-[16px] leading-[1.65] text-[#333] shadow-[0_0_20px_rgba(0,0,0,0.15)] after:absolute after:top-1/2 after:-right-[6px] after:-translate-y-1/2 after:border-y-[6px] after:border-l-[7px] after:border-y-transparent after:border-l-white">
        Contact us
      </span>
      <WhatsApp className="size-[54px] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-transform group-hover:scale-105" />
    </a>
  );
}
