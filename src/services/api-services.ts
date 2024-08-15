import {baseUrl} from "@/constants/urls";
import {options} from "@/constants/apiConfig";
import {IMovie} from "@/models/IMovie";
import {IGenres} from "@/models/IGenres";
import {IMoviesResponse} from "@/models/IMoviesResponse";


export const getAllMovies = async (page: number = 1): Promise<IMoviesResponse> => {
        const response = await fetch(
            `${baseUrl}/discover/movie?&language=en-US&page=${page}`, options);
        return await response.json();
};

export const getMovieById = async (id: number): Promise<IMovie> => {
        const response = await fetch(`${baseUrl}/movie/${id}?language=en-US`, options);
        return await response.json();
};

export const getGenres = async (): Promise<IGenres> => {
        const response = await fetch(`${baseUrl}/genre/movie/list?language=en-US`, options);
        return await response.json()
}

export const getMoviesByGenre = async (genreId: number, page: number = 1): Promise<IMoviesResponse> => {
        const response = await fetch(
            `${baseUrl}/genre/${genreId}/movies?&language=en-US&page=${page}`, options);
        return await response.json();
};

export const searchMovies = async (query: string): Promise<IMovie[]> => {
        const response = await fetch(
            `${baseUrl}/search/movie?query=${query}&language=en-US`, options);
        const data: IMoviesResponse = await response.json();
        return data.results;
};