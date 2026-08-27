import assert from 'node:assert/strict';
import test from 'node:test';

const { siteConfig } = await import(new URL('../data/site.ts', import.meta.url).href);

const siteUrl = 'https://hassanharga.vercel.app';

test('site configuration uses the deployed canonical URL', () => {
  assert.equal(siteConfig.url, siteUrl);
  assert.equal(new URL(siteConfig.url).protocol, 'https:');
});
