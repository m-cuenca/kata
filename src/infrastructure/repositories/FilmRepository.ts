import { inject, injectable } from 'tsyringe'

import { IFilmRepository } from '../../application/interfaces/irepositories/IFilmRepository'
import { FilmPayload } from '../../core/payloads/FilmPayload'
import { ServiceStatus } from '../../core/enumerations/ServiceStatus'
import { IConnectionOther } from '../../application/interfaces/iothers/IConnectionOther'
import { Film } from '../../core/entities/Film'

@injectable()
export class FilmRepository implements IFilmRepository {
  private FILM_TABLE: string;

  constructor (
    @inject('IConnectionOther') private readonly connectionOther: IConnectionOther) {
      const { FILM_TABLE } = process.env;

      this.FILM_TABLE = FILM_TABLE ?? '';
  }

  getFilm = async (id: string): Promise<[ServiceStatus, string, Film]> => {
      let entity: Film = {
        title: '',
        director: '',
        episode_id: 0,
        opening_crawl: '',
        producer: '',
        release_date: ''
    };

    try {

      const response: any = await this.connectionOther.get(this.FILM_TABLE, id)

      if (response.is_error) {
        return [ServiceStatus.FailedValidation, response.message, entity]
      }

      entity = response.entity;

    } catch (error: any) {
      return [ServiceStatus.InternalError, error.message, entity]
    }

    return [ServiceStatus.Ok, '', entity]
  }

  createFilm = async (payload: FilmPayload): Promise<[ServiceStatus, string]> => {
    try {
      await this.connectionOther.put(this.FILM_TABLE, payload)
    } catch (error: any) {
      return [ServiceStatus.InternalError, error.message]
    }

    return [ServiceStatus.Ok, 'Film registrado con éxito.']
  }
}
