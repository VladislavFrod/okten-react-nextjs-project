'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";

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
                <PosterPreviewComponent movie={movie}/>
                <span>Release: {movie.release_date}</span>
                <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p>Quality: FHD(1080p)</p>
                <p>Overview: {movie.overview}</p>
            </div>
            <div>

            </div>
        </div>
    )
}


export default MovieInfoComponent;