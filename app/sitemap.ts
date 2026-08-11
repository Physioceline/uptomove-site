import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.uptomove.fr";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/formations/sedentaires`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/formations/manutention`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/calculateur`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/clients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
