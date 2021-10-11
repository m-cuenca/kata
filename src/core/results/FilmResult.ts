import { injectable } from 'tsyringe'
import { Mapper } from "../../application/helpers/Mapper";
import { Film } from "../entities/Film";

export interface FilmResult {
  titulo?: string;
  director?: string;
  episodio_id?: number;
  rastreo_apertura?: string;
  productor?: string;
  fecha_lanzamiento?: string;
}

@injectable()
export class FilmResultMapper extends Mapper<Film, FilmResult> {
    protected map(entity: Film): FilmResult {
        return {
            titulo: entity.title,
            director: entity.director,
            episodio_id: entity.episode_id,
            rastreo_apertura: entity.opening_crawl,
            productor: entity.producer,
            fecha_lanzamiento: entity.release_date
        };
    }
}