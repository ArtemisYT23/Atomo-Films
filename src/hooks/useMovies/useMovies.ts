import { useState, useEffect } from 'react'
import { useHttpClient } from '@/hooks'
import { Movie } from '@/types/MovieInfo'
import { Trailer } from '@/types/TrailerInfo'
import MovieAdapter from "@/adapters/movieAdapter"
import TrailerAdapter from "@/adapters/trailerAdapter"

const useMovies = () => {
  const { api } = useHttpClient()
  const [movies, setMovies] = useState<Movie[]>([])
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null)
  const [trailer, setTrailer] = useState<Trailer | null>(null)


  const fetchMovies = async () => {
    try {
      const responseMovies = await api.client.getMovies()
      const dataMovies = responseMovies.results.map((movie: Movie) => MovieAdapter.adapt(movie))
      setMovies(dataMovies)
    } catch (error) {
      setMovies([])
    }
  }

  const fetchSearch = async (query: string) => {
    try {
      const responseMovies = await api.client.searchMovies(query)
      const dataMovies = responseMovies.results.map((movie: Movie) => MovieAdapter.adapt(movie))
      setMovies(dataMovies)
    } catch (error) {
      setMovies([])
    }
  }

  const fetchMovieById = async (id: string) => {
    try {
      const responseMovies = await api.client.getMovieById(id)
      setDetailMovie(responseMovies);
    } catch (error) {
      setDetailMovie(null)
    }
  };

  const fetchTrailers = async (id: string) => {
    try {
      const responseTrailers = await api.client.getVideos(id)
      const dataTrailer = responseTrailers.results.map((trailer: Trailer) => TrailerAdapter.adapt(trailer))
      const firstTrailer = dataTrailer.find((video: Trailer) => video.type === 'Trailer')
      firstTrailer ? setTrailer(firstTrailer) : setTrailer(null)
    } catch (error) {
      setTrailer(null)
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
