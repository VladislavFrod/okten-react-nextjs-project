import {baseUrl} from "@/constants/urls";
import {options} from "@/constants/apiConfig";
import {IMovie} from "@/models/IMovie";
import {IGenres} from "@/models/IGenres";

interface IMoviesResponse {
        results: IMovie[];
        page: number;
        total_pages: number;
        total_results: number;
}

export const getAllMovies = async (page: number = 1): Promise<IMoviesResponse> => {
        const response = await fetch(
            `${baseUrl}/discover/movie?&language=en-US&page=${page}`,
            options
        );
        return await response.json(); // Повертаємо весь об'єкт IMoviesResponse
};

export const getMovieById = async (id: number): Promise<IMovie> => {
        const response = await fetch(`${baseUrl}/movie/${id}?language=en-US`, options);
        if (!response.ok) {
                throw new Error("Failed to fetch movie details");
        }
        return await response.json();
};


export const getGenres = async (): Promise<IGenres> => {
        const response = await fetch(`${baseUrl}/genre/movie/list?language=en-US`, options);
        return await response.json()
}


export const getMoviesByGenre = async (genreId: number, page: number = 1): Promise<IMoviesResponse> => {
        const response = await fetch(
            `${baseUrl}/genre/${genreId}/movies?&language=en-US&page=${page}`,
            options
        );
        return await response.json();
};

interface IMovieSearchResponse {
        results: IMovie[];
        page: number;
        total_pages: number;
        total_results: number;
}

export const searchMovies = async (query: string): Promise<IMovie[]> => {
        const response = await fetch(
            `${baseUrl}/search/movie?query=${query}&language=en-US`,
            options
        );
        const data: IMovieSearchResponse = await response.json();
        return data.results;
};