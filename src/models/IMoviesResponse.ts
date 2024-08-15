import {IMovie} from "@/models/IMovie";

export interface IMoviesResponse{
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}