import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import noimage from '@/assets/images/no-image.jpg'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { Movie } from '@/types/MovieInfo'

interface MovieCardProps {
    movie: Movie;
  }

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem(String(movie.id))) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [movie.id]);

    const BookmarkMovie = () => {
            setIsBookmarked(!isBookmarked)
            if (isBookmarked) {
                localStorage.removeItem(String(movie.id))
            } else {
                localStorage.setItem(String(movie.id), JSON.stringify(movie));
            }
        }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            layout
            className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden">
            
            {/* bookmark buttons */}
            <button className="absolute bg-black text-white p-2 z-20 right-0 m-3 rounded-full text-xl" onClick={BookmarkMovie}> {isBookmarked ? <AiFillStar className="text-yellow-400"/> : <AiOutlineStar />}</button>

            
            <div className='absolute bottom-0 w-full flex justify-between items-end p-3 z-20'>
                <h1 className='text-white text-xl font-semibold  break-normal break-words'>{movie.title}</h1>

                {(movie.vote_average||0) > 7 ? <h1 className='font-bold text-green-500 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1> : (movie.vote_average||0) > 5.5 ? <h1 className='font-bold text-orange-400 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1> : <h1 className='font-bold text-red-600 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1>}
            </div>

            <Link to={`/moviedetail/${movie.id}`} className='h-full w-full shadow absolute z-10'></Link>

            <div>
                {movie.poster_path === null ? <img className='img object-cover' src={noimage} /> :
                    <img className='img object-cover' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />}
            </div>
        </motion.div>
    )
}

export default MovieCard;