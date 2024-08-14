'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Для отримання параметрів маршруту
import { getMoviesByGenre } from '@/services/api-services';
import NavLinkComponent from '@/components/nav-link-component/NavLinkComponent';
import { IMovie, IMoviesResponse } from '@/models/IMovie'; // Переконайтесь, що імплементуєте коректно

const MoviesByGenrePage = () => {
    const { id } = useParams();
    const genreId = parseInt(id as string, 10);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data: IMoviesResponse = await getMoviesByGenre(genreId, page); // Отримання фільмів за жанром і сторінкою
                setMovies(prevMovies => [...prevMovies, ...data.results]); // Збереження фільмів у стані
            } catch (error) {
                setError("Error fetching movies");
            } finally {
                setLoading(false);
            }
        };

        if (genreId) {
            loadMovies();
        }
    }, [genreId, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

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
            <button onClick={loadMore}>Завантажити ще</button>
        </div>
    );
};

export default MoviesByGenrePage;
