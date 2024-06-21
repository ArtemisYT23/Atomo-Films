import axios from 'axios'

export class Api {
  protected http

  constructor(baseUrl: string, token?: string) {
    const headers = this.getHeaders({ token })
    this.http = axios.create({
      baseURL: baseUrl,
      headers,
    })
  }

  private getHeaders(params: { token?: string }): object {
    const headers = {
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer ' + params.token,
    }

    if (params?.token) {
      headers['Authorization'] = `Bearer ${params.token}`
    }

    return headers
  }
}
