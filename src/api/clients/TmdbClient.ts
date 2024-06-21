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
}