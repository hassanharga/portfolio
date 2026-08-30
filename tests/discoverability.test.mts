import assert from 'node:assert/strict';
import test from 'node:test';

import { projects } from '../data/content.ts';
import { getProjectBySlug, getProjectTags, publicRoutes } from '../data/discoverability.ts';

test('project discovery uses unique URL-safe slugs', () => {
  const slugs = projects.map((project) => project.slug);

  assert.equal(new Set(slugs).size, projects.length);
  assert.ok(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)));
});

test('project lookup resolves known work and rejects unknown slugs', () => {
  assert.equal(getProjectBySlug('go-social-api')?.title, 'GO-Social-API');
  assert.equal(getProjectBySlug('unknown-project'), undefined);
});

test('project contributions are factual non-empty copy without percentage or currency metrics', () => {
  assert.ok(projects.every((project) => project.contribution.trim().length > 0));
  assert.ok(
    projects.every(
      (project) => !/(?:\b\d+(?:\.\d+)?%|[$€£]\s?\d+)/.test(project.contribution),
    ),
  );
});

test('project tags are trimmed and unique', () => {
  const project = getProjectBySlug('twint-super-deals');

  assert.ok(project);
  const tags = getProjectTags(project);
  assert.ok(tags.every((tag) => tag === tag.trim()));
  assert.equal(new Set(tags.map((tag) => tag.toLowerCase())).size, tags.length);
});

test('public routes cover profile, resume, and every project', () => {
  assert.ok(publicRoutes.includes('/about'));
  assert.ok(publicRoutes.includes('/resume'));
  assert.equal(publicRoutes.length, projects.length + 3);
  assert.ok(projects.every((project) => publicRoutes.includes(`/work/${project.slug}`)));
});
