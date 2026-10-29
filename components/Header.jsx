"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DESKTOP_MENU, MOBILE_MENU, SOCIALS } from "@/lib/site";
import { Close, DropdownCaret, Facebook, Hamburger, Youtube } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";

// Blocksy keeps the first items inline and moves the rest into "More".
// The third item only fits on wide screens.
const INLINE_COUNT = 3;

function Logo({ className }) {
  return (
    <Link href="/" rel="home" className="inline-flex">
      <Image
        src="/images/logo.webp"
        alt="Techcoral"
        width={466}
        height={156}
        priority
        className={className}
      />
    </Link>
  );
}

function DesktopMenu() {
  const inline = DESKTOP_MENU.slice(0, INLINE_COUNT);
  const overflow = DESKTOP_MENU.slice(INLINE_COUNT);
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname === href.replace(/\/$/, "");

  const linkClass =
    "flex h-[28px] items-center rounded-[5px] px-[16.5px] text-[16px] leading-[1.3] font-bold uppercase text-brand transition-colors duration-150 hover:bg-brand hover:text-white";

  return (
    <nav aria-label="Header menu">
      <ul className="flex items-center gap-[15px]">
        {inline.map((item, i) => (
          <li key={item.href} className={i === INLINE_COUNT - 1 ? "hidden xl:block" : undefined}>
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`${linkClass} ${isActive(item.href) ? "bg-brand text-white" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <MoreMenu linkClass={linkClass} items={[...DESKTOP_MENU.slice(INLINE_COUNT - 1, INLINE_COUNT), ...overflow]} />
      </ul>
    </nav>
  );
}

// Open state lives in React (not CSS :hover) so picking a link can close the panel
// even though the pointer is still over it after client-side navigation.
function MoreMenu({ linkClass, items }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    // Static li so the mega panel positions against the full-width header
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && close()}
      onKeyDown={(e) => e.key === "Escape" && close()}
    >
      <button
        type="button"
        // Hover already opened it for mouse users; only keyboard presses (detail 0) toggle.
        onClick={(e) => (e.detail === 0 ? setOpen((v) => !v) : setOpen(true))}
        aria-haspopup="true"
        aria-expanded={open}
        className={`${linkClass} relative gap-[10px] after:absolute after:inset-x-0 after:top-full after:h-[40px] ${open ? "bg-brand text-white" : ""}`}
      >
        More
        <DropdownCaret className={`size-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full right-0 left-0 z-50 border-t-[3px] border-gold bg-brand shadow-[0_10px_20px_rgba(41,51,61,0.1)] transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-[10px] opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-[1290px] columns-3 gap-x-[30px] px-[35px] py-[25px] xl:columns-4">
          {items.map((item, i) => (
            <li key={item.href} className={`break-inside-avoid ${i === 0 ? "xl:hidden" : ""}`}>
              <DropdownLink item={item} onSelect={close} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function DropdownLink({ item, onSelect }) {
  return (
    <Link
      href={item.href}
      onClick={(e) => {
        e.currentTarget.blur();
        onSelect();
      }}
      className="block border-b border-white/15 px-[12px] py-[9px] text-[15px] leading-[1.3] font-medium text-white transition-colors hover:rounded-[5px] hover:bg-white hover:text-black"
    >
      {item.label}
    </Link>
  );
}

function MobileMenuItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <li>
      <div className="flex items-center justify-between gap-3">
        <Link
          href={item.href}
          className={`block py-[7px] font-bold text-navy transition-colors hover:text-gold ${
            depth === 0 ? "text-[20px]" : "text-[17px]"
          }`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Collapse dropdown menu" : "Expand dropdown menu"}
            className="flex size-8 shrink-0 items-center justify-center rounded text-navy"
          >
            <DropdownCaret className={`size-[15px] transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="pl-[20px]">
          {item.children.map((child) => (
            <MobileMenuItem key={child.href} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Offcanvas({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] desk:hidden ${open ? "visible" : "invisible"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Offcanvas modal"
      inert={!open}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute top-0 right-0 flex h-full w-[75vw] min-[690px]:w-[65vw] flex-col overflow-y-auto bg-white/[0.98] px-[35px] pb-[40px] shadow-[0_0_70px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-[20px]">
          <button type="button" onClick={onClose} aria-label="Close drawer" className="p-2 text-black">
            <Close className="size-[12px]" />
          </button>
        </div>
        <div className="mb-[30px]">
          <Logo className="h-auto max-h-[60px] w-auto" />
        </div>
        <ul className="flex flex-col">
          {MOBILE_MENU.map((item) => (
            <MobileMenuItem key={item.href} item={item} />
          ))}
        </ul>
        <div className="mt-[30px] flex gap-[15px] text-navy">
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold">
            <Facebook className="size-[20px]" />
          </a>
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold">
            <Youtube className="size-[20px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#fefefe]">
      {/* Desktop */}
      <div className="hidden h-[100px] items-center px-[35px] desk:grid desk:grid-cols-[1fr_auto_1fr]">
        <div>
          <Logo className="h-auto max-h-[75px] w-auto" />
        </div>
        <DesktopMenu />
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex h-[100px] items-center justify-between px-[20px] desk:hidden">
        <Logo className="h-auto max-h-[75px] w-auto" />
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Menu"
          aria-expanded={drawerOpen}
          className="p-2 text-ink transition-colors hover:text-gold"
        >
          <Hamburger className="size-[18px]" />
        </button>
      </div>

      <Offcanvas open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
