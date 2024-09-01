import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_ORIGIN,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_ORIGIN}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_ORIGIN}/activity`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_ORIGIN}/people`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_ORIGIN}/recruit`,
      lastModified: new Date(),
    },
  ];
}
