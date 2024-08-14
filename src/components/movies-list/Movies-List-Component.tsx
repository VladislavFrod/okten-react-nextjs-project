'use client'

import React, {useEffect, useState} from 'react';
import {IMovie, IMoviesResponse} from "@/models/IMovie";
import {getAllMovies} from "@/services/api-services";
import MovieInfoComponent from "@/components/movie-info/Movie-Info-Component";

import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";

const MoviesListPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [nextPage, setNextPage] = useState<{ page: number } | null>(null);
    const [prevPage, setPrevPage] = useState<{ page: number } | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response: IMoviesResponse = await getAllMovies(page);
                setMovies(response.results);

                setTotalPages(response.total_pages);
                setNextPage(page < response.total_pages ? { page: page + 1 } : null);
                setPrevPage(page > 1 ? { page: page - 1 } : null);

            } catch (error) {
                setError("error when receiving movies");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page]);

    if (loading) return <div>Loaded...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {movies.length > 0 ? (
                <>
                    {movies.map((movie) => (
                        <MovieInfoComponent key={movie.id} movie={movie} />
                    ))}

                    <PaginationComponent
                        next={nextPage}
                        prev={prevPage}
                        totalPages={totalPages}
                        currentPage={page}  // Передача поточної сторінки
                    />
                </>
            ) : (
                <div>Немає фільмів для відображення</div>
            )}
        </div>
    );
};

export default MoviesListPage;
