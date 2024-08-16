'use client'
import React, { useEffect, useState } from 'react';

import { IMovie } from "@/models/IMovie";
import { getAllMovies } from "@/services/api-services";
import MovieSlider from "@/components/test/MovieSlider";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getAllMovies(3);
            setMovies(response.results);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {/* Передаємо масив фільмів як пропс */}
            {movies.length > 0 && <MovieSlider movies={movies} />}
        </div>
    );
};

export default MoviesPage;
