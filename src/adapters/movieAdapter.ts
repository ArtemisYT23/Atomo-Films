import { Movie } from "@/types/MovieInfo"

class MovieAdapter {
    static adapt(data: any): Movie {
        return {
            backdrop_path: data.backdrop_path,
            id: data.id,
            original_language: data.original_language,
            original_title: data.original_title,
            overview: data.overview,
            poster_path: data.poster_path,
            release_date: data.release_date,
            title: data.title,
            video: data.video,
            vote_average: data.vote_average,
            vote_count: data.vote_count,
            genres: data.genres,
            runtime: data.runtime
        };
    }
}

export default MovieAdapter