import {baseUrl} from "@/constants/urls";
import {options} from "@/constants/apiConfig";
import {IMovie} from "@/models/IMovie";

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