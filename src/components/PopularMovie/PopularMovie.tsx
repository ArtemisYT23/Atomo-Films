import { Movie } from '@/types/MovieInfo'
import { MdPlayCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface Props {
  movie: Movie
}

const PopularMovie = (props: Props) => {
  return (
    <div className="h-[360px] md:h-[360px] relative flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="h-full object-center rounded-md"
          width="100%"
          src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path}
          alt="banner"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[50%] flex flex-col gap-3 items-start md:mx-[55px] md:items-start md:text-left text-center">
        <p className="text-white text-4xl md:text-4xl font-bold text-left text-[18px]">
          {props.movie.title}
        </p>
        <Link to={`/moviedetail/${props.movie.id}`}>
        <button  className="bg-slate-200 mt-2 px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
          <MdPlayCircleOutline size={22} />
          Play
        </button>
        </Link>
      </div>
    </div>
  )
}

export default PopularMovie
