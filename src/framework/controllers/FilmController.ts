import { inject, injectable } from 'tsyringe'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { FilmPayload, FilmSchema } from "../../core/payloads/FilmPayload"
import { IFilmService } from '../../application/interfaces/iservices/IFilmService'

@injectable()
export class FilmController {

    constructor(
        @inject("IFilmService") private filmService: IFilmService) {
    }

    createFilm = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        const payload: FilmPayload = FilmSchema.parse(JSON.parse(event.body!));

        const response: APIGatewayProxyResult = await this.filmService.createFilm(payload);

        return response;
    }

    getFilm = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        const id: string = String(event.pathParameters?.id);

        const response: APIGatewayProxyResult = await this.filmService.getFilm(id);

        return response;
    }

    getFilmStarWars = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        const id: string = String(event.pathParameters?.id);

        const response: APIGatewayProxyResult = await this.filmService.getFilmStarWars(id);

        return response;
    }

}