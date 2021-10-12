import { injectable } from 'tsyringe'

import { Endpoints } from '../Endpoints'
import { ServiceStatus } from '../../../../core/enumerations/ServiceStatus'
import { Film } from '../../../../core/entities/Film'
import { IFilmStarWarsService } from '../../../../application/interfaces/iothers/services/IFilmStarWarsService'
import { HttpClient } from '../../HttpClient'
import { Constants } from '../../../../application/helpers/Constants'
import { AxiosResponse } from 'axios'

@injectable()
export class FilmStarWarsService implements IFilmStarWarsService {

  getFilm = async (id: string): Promise<[ServiceStatus, string, Film]> => {
    let entity: Film = {
      title: '',
      director: '',
      episode_id: 0,
      opening_crawl: '',
      producer: '',
      release_date: ''
    };

    const { sendText } = Endpoints;

    try {
      let result: AxiosResponse = await HttpClient(Constants.baseUrl)
                                        .request(sendText(id));

      entity = result.data;
    } catch(error: any) {
      return [ServiceStatus.Ok, error.message, entity]
    }

    return [ServiceStatus.Ok, '', entity]
  }
}
