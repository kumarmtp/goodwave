// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
// `site` is intentionally unset until the production domain is confirmed
// (no canonical URLs or absolute Open Graph images are emitted without it).
export default defineConfig({
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
