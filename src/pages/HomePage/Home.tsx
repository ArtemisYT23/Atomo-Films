import React, { useEffect } from 'react'
import { MovieCard } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'
import { useMovies } from '@/hooks'
import { useParams } from 'react-router-dom'

const Home: React.FC = () => {
  const { movies, fetchSearch, fetchMovies } = useMovies()
  const { query } = useParams()

  useEffect(() => {
    if(query) {
      fetchSearch(query)
    } else {
      fetchMovies()
    }
  }, [query])

  return (
    <div className="w-full flex flex-col">
      <motion.div layout className="flex flex-wrap relative justify-evenly md:justify-around">
        <AnimatePresence>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Home
