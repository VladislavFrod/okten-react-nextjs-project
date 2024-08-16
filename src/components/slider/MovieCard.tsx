import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import './movie-card-component.css'
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

interface MovieCardProps {
    movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <NavLinkComponent path={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/> </NavLinkComponent>
            <NavLinkComponent path={`/movies/${movie.id}`}><p>{movie.title}</p></NavLinkComponent>
        </div>

    );
};

export default MovieCard;
