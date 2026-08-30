import type { MetadataRoute } from 'next';
import { publicRoutes } from '@/data/discoverability';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
