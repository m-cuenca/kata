import { APIGatewayProxyResult } from 'aws-lambda';
import { FilmPayload } from '../../../core/payloads/FilmPayload'

export interface IFilmService {

  getFilm: (id: string) => Promise<any>

  createFilm: (payload: FilmPayload) => Promise<any>

}
