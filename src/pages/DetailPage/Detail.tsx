import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMovies } from '@/hooks'
import noimage from '@/assets/images/no-image.jpg'
import { HiChevronLeft } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'


const Detail: React.FC = () => {
  const { id } = useParams()
  const { detailMovie, trailer, fetchMovieById, fetchTrailers } = useMovies()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetchMovieById(id)
      fetchTrailers(id)
    }
  }, [])

  const getDurationMovie = (time: number) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}min`;
  }

  return (
    <>
      <button
        onClick={() => navigate('/')}
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

      <div className="w-full">
        <p className="text-white text-2xl md:text-3xl pt-3 px-3 md:px-10 font-bold text-left text-[18px]">
          Sipnosis
        </p>
        <h2 className="text-white text-justify pt-3 px-3 md:px-10 font-Roboto text-[18px]">
          {detailMovie?.overview}
        </h2>

        <h2 className="text-white text-justify pt-6 px-3 md:px-10 font-Roboto text-[18px]">
        <strong>Release Date :</strong> {detailMovie?.release_date}
        </h2>

        <h2 className="text-white text-justify pt-6 px-3 md:px-10 font-Roboto text-[18px]">
        <strong>duration :</strong> {getDurationMovie(Number(detailMovie?.runtime))}
        </h2>

        <h2 className="text-white text-justify pt-6 px-3 md:px-10 font-Roboto text-[18px]">
          <strong>Qualification :</strong> {detailMovie?.vote_average.toFixed(1)} ⭐
        </h2>

        <h2 className="text-white text-justify font-semibold pt-6 px-3 md:px-10 font-Roboto text-[18px]">
          Genres:
        </h2>
      </div>

      <div className="flex justify-left md:px-10 flex-wrap">
        {detailMovie?.genres.map((tag, index) => (
            <div
              key={index}
              className="text-white font-semibold bg-gray-800 rounded-full px-4 py-1 mr-2 mt-2"
            >
              {tag.name}
            </div>
        ))}
      </div>

      <p className="text-white text-2xl md:text-3xl pt-6 px-3 md:px-10 font-bold text-left text-[18px]">
        Trailer
      </p>
      <div className="w-full flex flex-col justify-center items-center">
        <iframe
          allowFullScreen
          style={{
            display: 'flex',
            marginTop: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            height: '80vh',
          }}
          src={`https://www.youtube.com/embed/${trailer?.key}`}
        ></iframe>
      </div>

      {detailMovie && (
        <>
          <p className="text-white text-2xl md:text-3xl pt-6 px-3 md:px-10 font-bold text-left text-[18px]">
            Watch movie
          </p>
          <div className="flex justify-center items-center mt-8 gap-5 flex-wrap">
            <div className="flex border-2 border-green-600 bg-green-600/40 mb-10 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white cursor-pointer">
              <FaPlay />
              Watch Movie
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Detail
