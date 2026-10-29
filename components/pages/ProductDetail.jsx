import Image from "next/image";
import { Cog } from "../icons";
import ProductTabs from "./ProductTabs";

export default function ProductDetail({ product }) {
  return (
    <>
      <section className="bg-[#fefefe] p-0 md:px-[70px] md:pt-[70px] md:pb-[50px]">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="p-[20px] md:m-[20px] md:w-[40%] md:p-[10px]">
            <h2 className="text-center text-[35px] leading-[1.5] font-bold text-ink uppercase md:text-left">
              {product.heading}
            </h2>
            {/* Line divider with a cog in the middle, 52% wide */}
            <div className="mx-auto flex w-[52%] items-center gap-[10px] py-[2px] text-ink md:mx-0">
              <span className="h-px flex-1 bg-black" />
              <Cog className="size-[16px]" />
              <span className="h-px flex-1 bg-black" />
            </div>
            <p
              className="mt-[20px] text-center text-[15px] leading-[1.65] text-muted md:text-left"
              dangerouslySetInnerHTML={{ __html: product.text }}
            />
          </div>
          {product.images.map((img) => (
            <div key={img.src} className="flex justify-center p-[20px] md:m-[20px] md:w-[30%] md:p-[10px]">
              <Image
                src={img.src}
                alt={product.title}
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="h-auto w-full max-w-full object-contain md:h-[350px] md:w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {product.tabs.length > 0 && (
        <section className="bg-[#fefefe] py-[20px] md:px-[30px] md:py-[80px] lg:px-[70px] lg:pt-0 lg:pb-[70px]">
          <div className="md:p-[10px]">
            <ProductTabs tabs={product.tabs} />
          </div>
        </section>
      )}
    </>
  );
}
