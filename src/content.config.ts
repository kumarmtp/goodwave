import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			shortTitle: z.string(),
			order: z.number(),
			client: z.string(),
			sector: z.string(),
			location: z.string().optional(),
			summary: z.string(),
			overview: z.string(),
			scope: z.array(z.string()).min(1),
			// Period and value are reproduced as stated in the portfolio (labelled "estimated" there).
			period: z.string(),
			estimatedValue: z.number().int().positive(),
			keyMetric: z.object({ value: z.string(), label: z.string() }),
			developmentFacts: z.array(z.string()).default([]),
			capabilities: z.array(
				z.enum(['structural-steel', 'railings-barriers', 'temporary-works', 'site-coordination']),
			),
			images: z
				.array(z.object({ src: image(), alt: z.string(), caption: z.string() }))
				.min(1),
			sourcePages: z.string(),
		}),
});

export const collections = { projects };
