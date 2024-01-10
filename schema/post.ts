import { z } from 'zod';

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required.' })
    .max(150, { message: 'Title is too long.' })
    .trim(),

  description: z
    .string()
    .min(1, { message: 'Description is required.' })
    .max(255, { message: 'Description is too long.' })
    .trim(),

  image: z.string().min(1, { message: 'Image is required.' }),

  category: z
    .string()
    .min(1, { message: 'Category is required.' })
    .max(100, { message: 'Category is too long.' })
    .trim(),

  author: z
    .string()
    .min(1, { message: 'Author is required.' })
    .max(50, { message: 'Author is too long.' })
    .trim(),
});
