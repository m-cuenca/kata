import { FilmPayload } from '../../../core/payloads/FilmPayload'

export interface IFilmService {

  getFilm: (id: string) => Promise<any>

  getFilmStarWars: (id: string) => Promise<any>

  createFilm: (payload: FilmPayload) => Promise<any>

}
