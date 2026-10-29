"use client";

import { CONTACT } from "@/lib/site";

const inputClass =
  "w-full rounded-[2px] border border-[#ccc] bg-white px-[10px] py-[6px] text-[16px] text-[#333] outline-none focus:border-brand";

function Label({ children }) {
  return (
    <label className="mb-[10px] block text-[16px] font-bold text-[#262626]">
      {children} <span className="text-[#d63637]">*</span>
    </label>
  );
}

// No backend on this site, so the message opens in the visitor's mail app, addressed to Techcoral.
export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = `${f.get("first")} ${f.get("last")}`.trim();
    const body = `Name: ${name}\nMobile: ${f.get("mobile")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-[30px] space-y-[20px]">
      <div>
        <Label>Name</Label>
        <div className="grid grid-cols-2 gap-[20px]">
          <div>
            <input name="first" required autoComplete="given-name" className={inputClass} />
            <span className="mt-[4px] block text-[13px] text-[#555]">First</span>
          </div>
          <div>
            <input name="last" required autoComplete="family-name" className={inputClass} />
            <span className="mt-[4px] block text-[13px] text-[#555]">Last</span>
          </div>
        </div>
      </div>
      <div className="md:w-[60%]">
        <Label>Mobile</Label>
        <input name="mobile" type="tel" required autoComplete="tel" className={inputClass} />
      </div>
      <div>
        <Label>Email</Label>
        <input name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label className="mb-[10px] block text-[16px] font-bold text-[#262626]">Message</label>
        <textarea name="message" rows={5} className={inputClass} />
      </div>
      <button
        type="submit"
        className="rounded-[3px] bg-[#066aab] px-[15px] py-[8px] text-[16px] text-white transition-colors hover:bg-brand"
      >
        Submit
      </button>
    </form>
  );
}
