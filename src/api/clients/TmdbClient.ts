import { Api } from '@/api/clients/Api'

export class TmdbClient extends Api {
    public async getMovies() {
      const URL = 'discover/movie'
      const { data } = await this.http.get(URL)
      return data
    }

    public async searchMovies(query: string) {
      const URL = `search/movie?query=${query}`
      const { data } = await this.http.get(URL)
      return data
    }

    public async getMovieById(id: string) {
      const URL = `movie/${id}`
      const { data } = await this.http.get(URL)
      return data
    }

    public async getVideos(id: string) {
      const URL = `movie/${id}/videos`
      const { data } = await this.http.get(URL)
      return data
    }
}