import { TmdbClient } from '@/api/clients/TmdbClient'

export enum ENGINES {
    TMDBCLIENT = 'tmdbClient',
  }
const $tokenApi = import.meta.env.VITE_TMDB_BEARER_TOKEN_API
const apiConfig = {
    tmdbClient: {
        baseUrl: `https://api.themoviedb.org/3/`,
        token: $tokenApi,
      },
}

export const isTmdbApi = new TmdbClient(
    apiConfig[ENGINES.TMDBCLIENT]['baseUrl'],
    apiConfig[ENGINES.TMDBCLIENT]['token']
  )