'use client'

import {useEffect, useState} from "react";
import {getAllMovies} from "@/services/api-services";
import {IMovie, IMoviesResponse} from "@/models/IMovie";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMoviesResponse | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            const data:IMovie[] = await getAllMovies(1); // передаємо номер сторінки, за потреби
            setMovies(data);
        };

        getMovies();
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            {movies ? (
                <ul>
                    {movies.results.map((movie: IMovie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MoviesPage;