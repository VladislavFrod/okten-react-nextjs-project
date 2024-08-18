'use client';

import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'next/navigation';
import {getMoviesByGenre} from '@/services/api-services';
import {IMovie} from '@/models/IMovie';
import {IMoviesResponse} from "@/models/IMoviesResponse";
import MoviesInfoComponent from "@/components/movie-info/Movies-Info-Component";
import './movies-genre-component.css';
import PaginationComponent from "@/components/pagination/PaginationComponent";

const MoviesGenreComponent = () => {
    const {id} = useParams();
    const genreId = parseInt(id as string, 10);
    const [movies, setMovies] = useState<IMovie[]>([]);
    // const [page, setPage] = useState(1);
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [nextPage, setNextPage] = useState<{ page: number } | null>(null);
    const [prevPage, setPrevPage] = useState<{ page: number } | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const loadMovies = async () => {
            const data: IMoviesResponse = await getMoviesByGenre(genreId, page);
            // setMovies(prevMovies => [...prevMovies, ...data.results]);
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setNextPage(page < data.total_pages ? {page: page + 1} : null);
            setPrevPage(page > 1 ? {page: page - 1} : null);
        };
        if (genreId) {
            loadMovies();
        }
    }, [genreId, page]);

    // const loadMore = () => {
    //     setPage(prevPage => prevPage + 1);
    // };

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <MoviesInfoComponent movie={movie}/>
                    </li>
                ))}
            </ul>
            {/*<button onClick={loadMore} className={'load-button'}>Load More</button>*/}
            <PaginationComponent next={nextPage} prev={prevPage} totalPages={totalPages} currentPage={page}/>
        </div>
    );
};

export default MoviesGenreComponent;
