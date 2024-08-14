export interface ICollection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    belongs_to_collection?: ICollection | null;
    budget?: number;
    total_pages: number
}
export interface IMoviesResponse {
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}