import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PROJECTS_DATA } from "@/data/projects";
import { EVENTS_DATA } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/about/gallery",
    "/team",
    "/projects",
    "/resources",
    "/resources/inventory",
    "/resources/courses",
    "/resources/courses/ic-design-process",
    "/resources/tools",
    "/resources/publications",
    "/events",
    "/support",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.includes("/inventory") || path.includes("/projects") ? 0.9 : 0.8,
  }));

  const projectRoutes = PROJECTS_DATA.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const eventRoutes = EVENTS_DATA.map((e) => ({
    url: `${SITE_URL}/events/${e.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...eventRoutes];
}
