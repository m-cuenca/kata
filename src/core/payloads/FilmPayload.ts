import * as z from 'zod'

export const FilmSchema = z.object({
  title: z.string().nonempty().min(1).max(100),
  director: z.string().nonempty().max(100),
  episode_id: z.number().positive(),
  opening_crawl: z.string().nonempty(),
  producer: z.string().nonempty().max(100),
  release_date: z.string()
})

export type FilmPayload = z.infer<typeof FilmSchema>
