import { useState, useEffect } from 'react'
import { useHttpClient } from '@/hooks'
import { Movie } from '@/types/MovieInfo'
import { Trailer } from '@/types/TrailerInfo'

const useMovies = () => {
  const { api } = useHttpClient()
  const [movies, setMovies] = useState<Movie[]>([])
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null)
  const [trailer, setTrailer] = useState<Trailer[] | null>(null)


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

  const fetchMovieById = async (id: string) => {
    try {
      const responseMovies = await api.client.getMovieById(id)
      setDetailMovie(responseMovies);
    } catch (error) {
      console.log(error)
    }
  };

  const fetchTrailers = async (id: string) => {
    try {
      const responseMovies = await api.client.getVideos(id)
      setTrailer(responseMovies.results);
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    fetchMovies()
  }, [])

  return {
    movies,
    detailMovie,
    trailer,
    fetchMovies,
    fetchSearch,
    fetchMovieById,
    fetchTrailers
  }
}

export default useMovies
