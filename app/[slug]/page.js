import { notFound } from "next/navigation";
import About from "@/components/About";
import ClientGrid from "@/components/pages/ClientGrid";
import ContactPage from "@/components/pages/ContactPage";
import EmptyPage from "@/components/pages/EmptyPage";
import HubPage from "@/components/pages/HubPage";
import PageBanner from "@/components/pages/PageBanner";
import ProductDetail from "@/components/pages/ProductDetail";
import ProductGrid from "@/components/pages/ProductGrid";
import VisionMission from "@/components/pages/VisionMission";
import { ABOUT_PAGE, CLIENT_GRID, CONTACT_PAGE, PRODUCT_GRID, getAllSlugs, getPage } from "@/lib/pages";

// Only the WordPress slugs exist; anything else is a 404 (required for static export).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? { title: page.title, alternates: { canonical: `/${slug}/` } } : {};
}

function PageBody({ page }) {
  switch (page.type) {
    case "about":
      return (
        <>
          <About paragraphs={ABOUT_PAGE.paras} showButton={false} className="bg-[#f3f3f3] md:pb-[50px]" />
          <VisionMission
            items={[
              { title: "Vision", ...ABOUT_PAGE.vision },
              { title: "Mission", ...ABOUT_PAGE.mission },
            ]}
          />
        </>
      );
    case "product":
      return <ProductGrid items={PRODUCT_GRID} />;
    case "client":
      return <ClientGrid logos={CLIENT_GRID} />;
    case "contact":
      return <ContactPage image={CONTACT_PAGE.image} />;
    case "hub":
      return <HubPage title={page.title} items={page.children} />;
    default:
      return page.product ? <ProductDetail product={page.product} /> : <EmptyPage title={page.title} />;
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageBanner title={page.bannerTitle} crumb={page.title} image={page.banner} />
      <PageBody page={page} />
    </>
  );
}
