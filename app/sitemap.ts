import type { MetadataRoute } from "next";
import { projects, services, site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", ...(projects.length ? ["/realisations"] : []), "/hse-qualite", "/contact", ...services.map(s => `/services/${s.slug}`)]; return routes.map(route => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : .8 })); }
