import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
// z -> zod schema.
// This kind of collections is very useful to enhance static content.
const books = defineCollection({
    loader: glob({
        base: "./src/content",
        pattern: "books/*.md",
    }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string().url()
        })
    })
})

export const collections = { books }