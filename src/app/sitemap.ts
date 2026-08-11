import type { MetadataRoute } from "next";
import { newsItems } from "@/content/news";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/news", "/gallery", "/contact", "/privacy"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const newsRoutes = newsItems.map((item) => `/news/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes].map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(),
  }));
}
