import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";
import './movies-info-component.css'
import {useRouter} from "next/navigation";
import StarsRating from "@/components/stars-rating/Stars-Rating";

interface IProps{
    movie: IMovie
}

const MoviesInfoComponent: FC<IProps> = ({movie}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/movies/${movie.id}`);
    };
    return (
        <div className="movies-info">
            <div>
                <PosterPreviewComponent movie={movie}/>
                <button onClick={handleClick} className={'movies-info-button'}>Watch info</button>
            </div>
            <div className={'text-movies-info'}>
                <h2>{movie.title}</h2>
                <br/>
                <p>Release date: {movie.release_date}</p>
                <p>Original language: {movie.original_language}</p>
                <p>Quality: FHD (1080p)</p>
                <br/>
                <p>Overview: {movie.overview}</p>
            </div>
            <div>
                <StarsRating voteAverage={movie.vote_average} />
            </div>


        </div>
    );
};

export default MoviesInfoComponent;