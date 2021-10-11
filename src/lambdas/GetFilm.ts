
import "reflect-metadata"
import { diContainer } from '../framework/utils/DIRegister';
import { Handler, APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { FilmController } from '../framework/controllers/FilmController'

export const handler: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const filmController: FilmController = diContainer.resolve("FilmController")
  return await filmController.getFilm(event)
}
