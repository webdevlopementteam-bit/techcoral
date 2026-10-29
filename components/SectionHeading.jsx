// Elementor heading + gold divider pair used by every home section.
export default function SectionHeading({ children, dividerWidth = "24%", align = "center", className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-center md:text-left"} ${className}`}>
      <h3 className="text-[30px] leading-[1.5] font-bold text-ink">{children}</h3>
      <div className="mt-[20px] py-[2px]">
        <span
          className={`block border-t-[2.5px] border-gold ${centered ? "mx-auto" : "mx-auto md:mx-0"}`}
          style={{ width: dividerWidth }}
        />
      </div>
    </div>
  );
}
