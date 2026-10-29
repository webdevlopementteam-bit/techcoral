import Image from "next/image";
import { CONTACT, SOCIALS } from "@/lib/site";
import { EnvelopeOpen, Facebook, MapMarkerAlt, PhoneAlt, Youtube } from "../icons";
import ContactForm from "./ContactForm";

const INFO = [
  { title: "Phone", text: CONTACT.phones.join(", "), Icon: PhoneAlt, href: `tel:${CONTACT.phones[0].replace(/\s/g, "")}` },
  { title: "Email", text: CONTACT.email, Icon: EnvelopeOpen, href: `mailto:${CONTACT.email}` },
  { title: "Address", text: CONTACT.address, Icon: MapMarkerAlt },
];

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&t=m&z=10&output=embed&iwloc=near`;

export default function ContactPage({ image }) {
  return (
    <>
      <section className="px-[20px] py-[50px]">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-[40px] md:flex-row md:items-start">
          <div className="md:w-1/2 md:px-[10px]">
            <h4 className="text-[25px] leading-[1.5] font-normal text-gold">Contact Us</h4>
            <h3 className="mt-[10px] text-[30px] leading-[1.4] font-medium text-ink">We&apos;re Here to Help Contact Us</h3>
            <p className="mt-[20px] text-[16px] text-[#232323]">
              Whether it’s inquiries or feedback, we value your input. Contact us today to explore how we can serve you
              better.
            </p>
            <div className="mt-[30px] space-y-[20px]">
              {INFO.map(({ title, text, Icon, href }) => (
                <div key={title} className="flex items-start gap-[15px] rounded-[5px] bg-white p-[15px] shadow-[0_0_10px_rgba(0,0,0,0.04)]">
                  <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[5px] bg-[#ff9a00] text-white">
                    <Icon className="size-[22px]" />
                  </span>
                  <div>
                    <h3 className="text-[22px] leading-[1.4] font-bold text-black">{title}</h3>
                    {href ? (
                      <a href={href} className="text-[16px] text-[#232323]">
                        {text}
                      </a>
                    ) : (
                      <p className="text-[16px] text-[#232323]">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <h4 className="mt-[30px] text-[25px] leading-[1.5] font-medium text-ink">Get In Touch</h4>
            <div className="mt-[15px] flex gap-[10px]">
              {[
                [SOCIALS.facebook, Facebook, "Facebook"],
                [SOCIALS.youtube, Youtube, "YouTube"],
              ].map(([href, Icon, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-[50px] items-center justify-center rounded-[5px] bg-[#ff9a00] text-white transition-colors hover:bg-brand"
                >
                  <Icon className="size-[24px]" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:px-[10px]">
            <Image
              src={image}
              alt="Contact Techcoral Solutions"
              width={1000}
              height={1240}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-[10px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-[20px] py-[70px]">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-[40px] md:flex-row md:items-start">
          <div className="md:w-1/2 md:px-[10px]">
            <h4 className="text-[25px] leading-[1.5] font-normal text-gold uppercase">Get In Touch</h4>
            <h2 className="text-[40px] leading-[1.4] font-medium text-ink">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div className="md:w-1/2 md:px-[10px]">
            <iframe
              src={MAP_SRC}
              title={CONTACT.address}
              loading="lazy"
              className="h-[510px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
