import {baseUrl} from "@/constants/urls";
import {options} from "@/constants/apiConfig";
import {IMovie} from "@/models/IMovie";

export const getAllMovies = async (page: number = 1):Promise<IMovie[]> => {

        const response = await fetch(
            `${baseUrl}/discover/movie?&language=en-US&page=${page}`,
            options
        );
        return await response.json();
};
