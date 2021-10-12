import { inject, injectable } from 'tsyringe'

import { IFilmRepository } from '../interfaces/irepositories/IFilmRepository'
import { IFilmService } from '../interfaces/iservices/IFilmService'
import { FilmPayload } from '../../core/payloads/FilmPayload'
import { APIGatewayProxyResult } from 'aws-lambda'
import { MessageResult } from '../../core/results/MessageResult'
import { ServiceStatus } from '../../core/enumerations/ServiceStatus'
import { FilmResultMapper } from '../../core/results/FilmResult'
import { FilmStarWarsService } from '../../infrastructure/services/star_wars/films/FilmStarWarsService'

@injectable()
export class FilmService implements IFilmService {
  constructor (
    @inject('IFilmRepository') private readonly filmRepository: IFilmRepository,
    @inject('FilmResultMapper') private readonly filmResultMapper: FilmResultMapper,
    @inject('IFilmStarWarsService') private readonly filmStarWarsService: FilmStarWarsService) {
  }

  getFilm = async (id: string) => {

    const [status, message, entity] = await this.filmRepository.getFilm(id)

    if (status !== ServiceStatus.Ok) {
      return {
        statusCode: status,
        body: JSON.stringify(MessageResult.Of(message)),
      }
    }

    // Map array of entities
    // const arrayEntities: Array<Film> = [entity];
    // const entities: Array<FilmResult> = this.filmResultMapper.transform(arrayEntities);

    return {
      statusCode: status,
      body: JSON.stringify({
        entity: this.filmResultMapper.transform(entity)
      }),
    }
  }

  getFilmStarWars = async (id: string) => {

    const [status, message, entity] = await this.filmStarWarsService.getFilm(id)

    if (status !== ServiceStatus.Ok) {
      return {
        statusCode: status,
        body: JSON.stringify(MessageResult.Of(message)),
      }
    }

    return {
      statusCode: status,
      body: JSON.stringify({
        entity: this.filmResultMapper.transform(entity)
      }),
    }
  }

  createFilm = async (payload: FilmPayload) => {
    const [status, message] = await this.filmRepository.createFilm(payload);

    return {
      statusCode: status,
      body: JSON.stringify(MessageResult.Of(message)),
    }
  }
}
