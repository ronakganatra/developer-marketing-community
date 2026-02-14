import { z, defineCollection } from 'astro:content';

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    socialUrl: z.string(),
    companyUrl: z.string(),
    quote: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

export const collections = {
  'team': teamCollection,
};
