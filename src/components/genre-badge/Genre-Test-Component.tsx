'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Для отримання параметрів маршруту
import { getMoviesByGenre } from '@/services/api-services';
import NavLinkComponent from '@/components/nav-link-component/NavLinkComponent';

type Movie = {
    id: number;
    title: string;
    backdrop_path: string;
    // інші властивості фільму
};

const MoviesByGenrePage = () => {
    const { id } = useParams(); // Отримання ID жанру з URL
    const genreId = parseInt(id as string, 10);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await getMoviesByGenre(genreId); // Отримання фільмів за жанром
                setMovies(data.results); // Збереження фільмів у стані
            } catch (error) {
                setError("Error fetching movies");
            } finally {
                setLoading(false);
            }
        };

        if (genreId) {
            loadMovies();
        }
    }, [genreId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Movies in Genre</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <NavLinkComponent path={`/movies/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                            <p>{movie.title}</p>
                        </NavLinkComponent>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesByGenrePage;
