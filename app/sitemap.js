import { getAllSlugs } from "@/lib/pages";

// Required for `output: "export"`: the sitemap is written to out/sitemap.xml at build time.
export const dynamic = "force-static";

const BASE_URL = "https://www.techcoral.co.in";

export default function sitemap() {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1 },
    ...getAllSlugs().map((slug) => ({ url: `${BASE_URL}/${slug}/`, changeFrequency: "daily", priority: 0.8 })),
  ];
}
