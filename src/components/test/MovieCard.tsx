import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";

interface MovieCardProps {
    movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            {movie.title}
        </div>
    );
};

export default MovieCard;
