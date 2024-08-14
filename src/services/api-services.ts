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

export const getAllMovies = async (page: number = 1): Promise<IMovie[]> => {
        const response = await fetch(
            `${baseUrl}/discover/movie?&language=en-US&page=${page}`,
            options
        );
        const data: IMoviesResponse = await response.json();
        return data.results; // Повертаємо лише масив фільмів
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
        const date: IGenres = await response.json();
        return date
}