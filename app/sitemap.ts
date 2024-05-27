import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL;
  const curDate = new Date().toISOString();

  const routes = ["", "/projects", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: curDate,
  }));

  return [...routes];
}
