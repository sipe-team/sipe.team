import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `$https://${process.env.VERCEL_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://${process.env.VERCEL_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/activity`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/people`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/recruit`,
      lastModified: new Date(),
    },
  ];
}
