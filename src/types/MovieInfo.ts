export type Movie = {
    id: number;
    backdrop_path: string;
    original_title: string;
    original_language: string;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    video: boolean;
    release_date: string;
    genres: Genre[];
}

type Genre = {
    id: number;
    name: string;
}