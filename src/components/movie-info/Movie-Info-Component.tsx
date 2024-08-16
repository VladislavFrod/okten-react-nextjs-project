'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";
import './movie-info-component.css'

interface IProps {
    movie: IMovie;
}

const MovieInfoComponent: FC<IProps> = ({movie})=>{

    return(
        <div className="movie-info">
            <div>
                <PosterPreviewComponent movie={movie}/>
            </div>
            <div className={'text-movie-info'}>
                <h2>{movie.title}</h2>
                <br/>
                <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p>Release date: {movie.release_date}</p>
                <p>Original language: {movie.original_language}</p>
                <p>Quality: FHD (1080p)</p>
                <br/>
                <p>Overview: {movie.overview}</p>
            </div>
            <div>
                *****
            </div>


        </div>
    )
}


export default MovieInfoComponent;