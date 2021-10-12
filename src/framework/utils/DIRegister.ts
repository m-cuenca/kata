import 'reflect-metadata'

import { container } from 'tsyringe'
import { AWSUtil } from './AWSUtil'
import { CacheManager } from './CacheManager'
import { ConfigManager } from './ConfigManager'
import { Connection } from '../../infrastructure/data_access/Connection'
import { FilmController } from '../controllers/FilmController'
import { FilmService } from '../../application/services/FilmService'
import { FilmRepository } from '../../infrastructure/repositories/FilmRepository'
import { FilmResultMapper } from '../../core/results/FilmResult'
import { FilmStarWarsService } from '../../infrastructure/services/star_wars/films/FilmStarWarsService'

// singletons
container.registerSingleton("ICacheManager", CacheManager)
container.registerSingleton("IConfigManager", ConfigManager)
container.registerSingleton("IAWSUtil", AWSUtil)
container.registerSingleton("IConnectionOther", Connection)

// mappers
container.register("FilmResultMapper", FilmResultMapper)

// services
container.register("IFilmService", FilmService)

// repositories
container.register("IFilmRepository", FilmRepository)

// controllers
container.register("FilmController", FilmController)

// servicios externos
container.register("IFilmStarWarsService", FilmStarWarsService)

export const diContainer = container