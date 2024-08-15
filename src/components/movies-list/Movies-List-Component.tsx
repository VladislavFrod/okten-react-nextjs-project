'use client';

import React, {useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import {getAllMovies} from "@/services/api-services";
import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import MoviesInfoComponent from "@/components/movie-info/Movies-Info-Component";
import {IMoviesResponse} from "@/models/IMoviesResponse";


const MoviesListPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [nextPage, setNextPage] = useState<{ page: number } | null>(null);
    const [prevPage, setPrevPage] = useState<{ page: number } | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchMovies = async () => {
            const response: IMoviesResponse = await getAllMovies(page);
            setMovies(response.results);
            setTotalPages(response.total_pages);
            setNextPage(page < response.total_pages ? {page: page + 1} : null);
            setPrevPage(page > 1 ? {page: page - 1} : null);
        };

        fetchMovies();
    }, [page]);

    return (
        <div>
            <div>
                <div>
                    {movies.map((movie) =>
                        (<MoviesInfoComponent key={movie.id} movie={movie}/>)
                    )}
                </div>
            </div>
            <PaginationComponent next={nextPage} prev={prevPage} totalPages={totalPages} currentPage={page}/>
        </div>
    );
};

export default MoviesListPage;
