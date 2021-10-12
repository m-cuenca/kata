import { Film } from '../../../../core/entities/Film';
import { ServiceStatus } from '../../../../core/enumerations/ServiceStatus';

export interface IFilmStarWarsService {

  getFilm: (id: string) => Promise<[ServiceStatus, string, Film]>

}
