'use client';
import React, {FC} from 'react';
import {IMovie} from '@/models/IMovie';
import './movie-list.css';

interface IProps {
    movie: IMovie;
}

const MovieCardComponent: FC<IProps> = ({ movie }) => {

    return (
        <div>
            <div>
            <h2>{movie.title}</h2>
            </div>
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <span>Release: {movie.release_date}</span>
                <p>Genre: {movie.genre_ids}</p>
                <p>Quality: FHD(1080p)</p>
            <p>Overview: {movie.overview}</p>
            </div>
            <div>


            </div>
        </div>
    );
};

export default MovieCardComponent;
