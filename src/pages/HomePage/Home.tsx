import React, { useEffect } from 'react'
import { MovieCard, Slider, PopularMovie } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'
import { useMovies } from '@/hooks'
import { useParams } from 'react-router-dom'
import { Movie } from '@/types/MovieInfo'

const Home: React.FC = () => {
  const { movies, fetchSearch, fetchMovies } = useMovies()
  const { query } = useParams()

  useEffect(() => {
    if (query) {
      fetchSearch(query)
    } else {
      fetchMovies()
    }
  }, [query])

  const CardMovies = (key: number, movie: Movie) => {
    return <MovieCard key={key} movie={movie} />
  }

  return (
    <>
      {!query && (
        <div className="w-full flex justify-center items-center p-4">
          <div className="w-[90%]">
            <Slider
              className="rounded-sm md:h-[400px]"
              autoplay={true}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {movies.map((movie, index) => (
                <PopularMovie movie={movie} key={index}></PopularMovie>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col p-4">
        <motion.div layout className="flex flex-wrap relative justify-center md:justify-around">
          <AnimatePresence>{movies.map(movie => CardMovies(movie.id, movie))}</AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Home
