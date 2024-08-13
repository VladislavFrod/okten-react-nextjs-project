'use client'

import React, { useEffect, useState } from 'react';
import { IMovie } from "@/models/IMovie";
import { getAllMovies } from "@/services/api-services";
import MovieListComponent from "@/components/movies-list/Movie-List-Component";

const MoviesListPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getAllMovies(page);
                setMovies(prevMovies => [...prevMovies, ...response]); // Використовуємо response.results
            } catch (error) {
                setError("error when receiving movies");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    if (loading) return <div>Loaded...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {movies.length > 0 ? (
                <>
                    {movies.map((movie) => (
                        <MovieListComponent key={movie.id} movie={movie} />
                    ))}
                    <button onClick={loadMore}>Завантажити більше</button>
                </>
            ) : (
                <div>Немає фільмів для відображення</div>
            )}
        </div>
    );
};

export default MoviesListPage;
