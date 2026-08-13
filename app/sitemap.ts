import type { MetadataRoute } from "next";
import { services, site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/realisations", "/hse-qualite", "/contact", ...services.map(s => `/services/${s.slug}`)]; return routes.map(route => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : .8 })); }
