"use client";

import Script from "next/script";

// Same GTranslate widget and language list the WordPress site uses.
const SETTINGS = {
  default_language: "en",
  languages: ["ar", "zh-CN", "nl", "en", "fr", "de", "hi", "pt", "pa", "ru", "es"],
  url_structure: "none",
  flag_style: "2d",
  flag_size: 24,
  wrapper_selector: ".gtranslate_wrapper",
  alt_flags: [],
  horizontal_position: "inline",
  flags_location: "https://cdn.gtranslate.net/flags/",
};

export default function LanguageSwitcher() {
  return (
    <>
      <div className="gtranslate_wrapper text-[15px] leading-[1.3] text-gold [&_a]:text-gold" />
      <Script id="gtranslate-settings" strategy="afterInteractive">
        {`window.gtranslateSettings = ${JSON.stringify(SETTINGS)};`}
      </Script>
      <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js" strategy="afterInteractive" />
    </>
  );
}
