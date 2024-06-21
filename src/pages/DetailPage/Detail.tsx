import { useMovies } from '@/hooks'
import React, { useEffect } from 'react'
import noimage from '@/assets/images/no-image.jpg'
import { useParams, Link } from 'react-router-dom'
import { HiChevronLeft } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'
import slugify from 'slugify'

const Detail: React.FC = () => {
  const { id } = useParams()
  const { detailMovie, trailer, fetchMovieById, fetchTrailers } = useMovies()

  useEffect(() => {
    if (id) {
      fetchMovieById(id)
      fetchTrailers(id)
    }
  }, [])

  return (
    <>
      <button
        onClick={() => history.back()}
        className="fixed z-10 text-4xl text-black bg-white m-3 md:m-5 rounded-full"
      >
        <HiChevronLeft />
      </button>

      <div className="relative h-auto md:h-[82vh] flex justify-center">
        <div className="h-full w-full shadowbackdrop absolute"></div>
        <h1 className="text-white absolute bottom-0 p-10 text-2xl md:text-6xl font-bold text-center">
          {detailMovie?.title}
        </h1>
        {detailMovie?.backdrop_path === null ? (
          <img src={noimage} className="h-full w-full" />
        ) : (
          <img
            src={'https://image.tmdb.org/t/p/original/' + detailMovie?.backdrop_path}
            className="h-full w-full"
          />
        )}
      </div>

      <h2 className="text-white text-center pt-5 px-3 md:px-60 font-Roboto text-[18px]">
        {detailMovie?.overview}
      </h2>

      <div className="text-blue-100 font-semibold my-3 flex justify-center">
        <h2 className="bg-blue-600/30 border-2 border-blue-700 py-2 px-3 rounded-full">
          Release Date : {detailMovie?.release_date}
        </h2>
      </div>

      <div className="flex justify-center flex-wrap">
        {detailMovie?.genres.map(tag => (
          <>
            <div
              key={tag.id}
              className="text-white font-semibold bg-gray-800 rounded-full px-4 py-1 m-2"
            >
              {tag.name}
            </div>
          </>
        ))}
      </div>

      {trailer && (
        <div className="flex justify-center items-center mb-10 gap-5 flex-wrap">
          {Array.from(trailer)
            .filter(trail => trail.type === 'Trailer')
            .map((trail, index) => (
              <>
                <>
                  <a
                    key={trail.id}
                    href={'https://www.youtube.com/watch?v=' + trail.key}
                    target="_blank"
                    className="flex border-2 border-red-600 bg-red-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white"
                  >
                    <FaPlay />
                    Watch trailer{' '}
                    {Array.from(trailer).filter(trail => trail.type === 'Trailer').length > 1
                      ? index + 1
                      : ''}
                  </a>
                </>
              </>
            ))}
        </div>
      )}

      {detailMovie && (
        <div className="flex justify-center items-center mb-10 gap-5 flex-wrap">
          <Link
            to={`/player/${id}/${slugify(detailMovie?.title as string)}`}
            className="flex border-2 border-green-600 bg-green-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white"
          >
            <FaPlay />
            Watch Movie
          </Link>
        </div>
      )}
    </>
  )
}

export default Detail
