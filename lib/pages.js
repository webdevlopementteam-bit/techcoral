import data from "./data/pages.json";
import { MOBILE_MENU } from "./site";

export const { products: PRODUCTS, productGrid: PRODUCT_GRID, clients: CLIENT_GRID, about: ABOUT_PAGE, contact: CONTACT_PAGE } = data;

const DEFAULT_BANNER = "/images/pages/home-1-slide-1.webp";

// Banner headings that differ from the WordPress page title.
const BANNER_TITLES = {
  about: "About Us",
  contact: "Contact Us",
  client: "Clients",
  product: "PRODUCT",
  "project-study": "PROJECT STUDY",
  delivery: "Deliver Projects",
};

const SPECIAL = new Set(["about", "product", "client", "contact"]);

function slugOf(href) {
  return href.replace(/^\/|\/$/g, "");
}

// Walk the service menu so hub pages (Service, Fabrication Works, …) can list their children.
function findMenuNode(slug, items = MOBILE_MENU) {
  for (const item of items) {
    if (slugOf(item.href) === slug) return item;
    const found = item.children && findMenuNode(slug, item.children);
    if (found) return found;
  }
  return null;
}

export function getAllSlugs() {
  return Object.keys(data.titles).filter((slug) => slug !== "home");
}

export function getPage(slug) {
  const wpTitle = data.titles[slug];
  if (!wpTitle) return null;

  const product = PRODUCTS.find((p) => p.slug === slug);
  const menuNode = findMenuNode(slug);
  const children = (menuNode?.children ?? []).filter((c) => !c.href.startsWith("http"));

  let type = "empty";
  if (SPECIAL.has(slug)) type = slug;
  else if (product) type = "detail";
  else if (children.length) type = "hub";

  return {
    slug,
    type,
    title: wpTitle,
    bannerTitle: BANNER_TITLES[slug] ?? wpTitle,
    banner: data.banners[slug] ?? DEFAULT_BANNER,
    product,
    children,
  };
}
