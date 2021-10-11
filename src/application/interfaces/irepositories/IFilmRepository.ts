import { Film } from '../../../core/entities/Film';
import { ServiceStatus } from '../../../core/enumerations/ServiceStatus';
import { FilmPayload } from '../../../core/payloads/FilmPayload'

export interface IFilmRepository {

  getFilm: (id: string) => Promise<[ServiceStatus, string, Film]>

  createFilm: (payload: FilmPayload) => Promise<[ServiceStatus, string]>

}
