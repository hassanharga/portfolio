import { projects } from './content.ts';

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectTags(project: Project) {
  const seen = new Set<string>();

  return (project.displayTags ?? project.tags)
    .map((tag) => tag.trim())
    .filter((tag) => {
      const key = tag.toLowerCase();

      if (!tag || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

export const publicRoutes = [
  '/',
  '/about',
  '/resume',
  ...projects.map((project) => `/work/${project.slug}`),
] as const;
