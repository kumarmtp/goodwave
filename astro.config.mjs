// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
// Hosted on GitHub Pages as a project site, so every internal link is prefixed
// with `base` via src/utils/url.ts. For a custom domain, set `site` to it and
// remove `base`.
export default defineConfig({
	site: 'https://kumarmtp.github.io',
	base: '/goodwave',
	trailingSlash: 'ignore',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Poppins',
			cssVariable: '--font-heading',
			weights: [600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Open Sans',
			cssVariable: '--font-body',
			weights: [400, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
