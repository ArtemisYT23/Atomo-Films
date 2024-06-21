import { useState, useEffect } from 'react'
import { useHttpClient } from '@/hooks'
import { Movie } from '@/types/MovieInfo'

const useMovies = () => {
  const { api } = useHttpClient()
  const [movies, setMovies] = useState<Movie[]>([])

  const fetchMovies = async () => {
    try {
      const responseMovies = await api.client.getMovies()
      setMovies(responseMovies.results)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchSearch = async (query: string) => {
    try {
      const responseMovies = await api.client.searchMovies(query)
      setMovies(responseMovies.results)
    } catch (error) {
      console.log(error)
    }
  
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return {
    movies,
    fetchMovies,
    fetchSearch
  }
}

export default useMovies
