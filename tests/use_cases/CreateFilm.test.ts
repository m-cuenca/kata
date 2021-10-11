import { mock } from "jest-mock-extended";
import { APIGatewayProxyEvent } from "aws-lambda";
import * as fs from "fs";
import path from "path"
import { IFilmService } from "../../src/application/interfaces/iservices/IFilmService";
import { FilmController } from "../../src/framework/controllers/FilmController";

describe("FilmController", () => {
  describe("createFilm", () => {
    test("test valid film data", async () => {
      const rawdata = fs.readFileSync(path.resolve(__dirname, "../test_util/APIGatewayProxyEvent.json"),"utf-8");
      const apiProxyEvent: APIGatewayProxyEvent = JSON.parse(rawdata);

      const film = {
        "title": "A New Hope",
        "director": "George Lucas",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25"
      }

      apiProxyEvent.body = JSON.stringify(film);

      const filmService = mock<IFilmService>();

      filmService.createFilm.mockResolvedValue(film);

      const userController = new FilmController(filmService);

      const result = await userController.createFilm(apiProxyEvent);

      expect(result.statusCode).toEqual(200);
    })
  })
});