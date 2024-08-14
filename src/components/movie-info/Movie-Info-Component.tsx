'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

interface IProps {
    movie: IMovie;
}

const MovieInfoComponent: FC<IProps> = ({movie})=>{

    return(
        <div>
            <div>
                <h2>{movie.title}</h2>
            </div>
            <div>
               <NavLinkComponent path={`/movies/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/></NavLinkComponent>
                <span>Release: {movie.release_date}</span>
                <p>Genre: {movie.genre_ids}</p>
                <p>Quality: FHD(1080p)</p>
                <p>Overview: {movie.overview}</p>
            </div>
            <div>

            </div>
        </div>
    )
}


export default MovieInfoComponent;