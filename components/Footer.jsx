import Link from "next/link";
import { CONTACT, FOOTER_PRODUCTS, FOOTER_QUICK_LINKS, SOCIALS } from "@/lib/site";
import { ChevronCircleRight, EnvelopeOpen, Facebook, MapMarkerAlt, PhoneAlt, Youtube } from "./icons";

function FooterHeading({ children }) {
  return (
    <>
      <h4 className="text-[25px] leading-[1.5] font-bold text-white">{children}</h4>
      <div className="mt-[20px] mb-[20px] py-[2px]">
        <span className="block w-[27%] border-t-2 border-gold" />
      </div>
    </>
  );
}

function LinkList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="flex items-center gap-[9px] text-[20px] leading-[1.65] text-white">
            <ChevronCircleRight className="size-[17px] shrink-0 text-gold" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const ABOUT_SNIPPET =
  "Techcoral solutions is a New Delhi based company serving the needs of numerous buyers with premium quality products. Since the inception in 2010, we are offering a comprehensive product array packedwith unmatched quality featured at great market price.";

export default function Footer() {
  return (
    <footer>
      <div className="bg-navy py-[50px]">
        <div className="flex flex-wrap px-[10px]">
          <div className="w-full px-[30px] pb-[30px] md:w-1/2 lg:w-[30%] lg:pb-0">
            <FooterHeading>About Us</FooterHeading>
            <p className="text-[16px] leading-[1.65] text-white">{ABOUT_SNIPPET}</p>
            <div className="mt-[20px] flex gap-[5px]">
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="p-[0.2em] text-gold">
                <span className="sr-only">Facebook</span>
                <Facebook className="size-[28px]" />
              </a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="p-[0.2em] text-gold">
                <span className="sr-only">Youtube</span>
                <Youtube className="size-[28px]" />
              </a>
            </div>
          </div>

          <div className="w-full px-[30px] pb-[30px] md:w-1/2 lg:w-[15%] lg:pb-0">
            <FooterHeading>Quick Links</FooterHeading>
            <LinkList items={FOOTER_QUICK_LINKS} />
          </div>

          <div className="w-full px-[30px] pb-[30px] md:w-1/2 lg:w-[25%] lg:pb-0">
            <FooterHeading>Product</FooterHeading>
            <LinkList items={FOOTER_PRODUCTS} />
          </div>

          <div className="w-full px-[30px] md:w-1/2 lg:w-[30%]">
            <FooterHeading>Contact</FooterHeading>
            <ul className="flex flex-col gap-[18px] bg-navy-light p-[20px] text-[20px] leading-[1.65] text-white shadow-[0_-3px_0_0_#e0a81b]">
              <li className="flex items-center gap-[10px]">
                <PhoneAlt className="size-[20px] shrink-0 text-gold" />
                <span>
                  {CONTACT.phones[0]}
                  <br />
                  {CONTACT.phones[1]}
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <EnvelopeOpen className="size-[20px] shrink-0 text-gold" />
                <span>{CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-[10px]">
                <MapMarkerAlt className="size-[20px] shrink-0 text-gold" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy-dark px-[10px] py-[10px] text-center text-[16px] leading-[1.65] text-white">
        <p>Copyright © 2025 TechCoral Solutions All Right Reserved | Powered by Bharat Bizmart</p>
      </div>
    </footer>
  );
}
