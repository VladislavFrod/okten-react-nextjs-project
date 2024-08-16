'use client';

import React, {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {getMoviesByGenre} from '@/services/api-services';
import NavLinkComponent from '@/components/nav-link-component/NavLinkComponent';
import {IMovie} from '@/models/IMovie';
import {IMoviesResponse} from "@/models/IMoviesResponse";
import MoviesInfoComponent from "@/components/movie-info/Movies-Info-Component";
import './movies-genre-component.css';

const MoviesGenreComponent = () => {
    const { id } = useParams();
    const genreId = parseInt(id as string, 10);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMovies = async () => {
                const data: IMoviesResponse = await getMoviesByGenre(genreId, page);
                setMovies(prevMovies => [...prevMovies, ...data.results]);
        };
        if (genreId) {
            loadMovies();
        }
    }, [genreId, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                            <MoviesInfoComponent movie={movie}/>
                    </li>
                ))}
            </ul>
            <button onClick={loadMore} className={'load-button'}>Load More</button>
        </div>
    );
};

export default MoviesGenreComponent;
