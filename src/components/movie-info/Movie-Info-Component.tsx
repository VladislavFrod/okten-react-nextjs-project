'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";
import './movie-info-component.css';
import StarsRating from "@/components/stars-rating/Stars-Rating";
import GenresList from "@/components/genre-badge/GenresList";
import {useRouter} from "next/navigation";
import VideoComponent from "@/components/video/VideoComponent";

interface IProps {
    movie: IMovie;
}

const MovieInfoComponent: FC<IProps> = ({movie}) => {

    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/genres/${id}`);
    };
    const videoType = "Trailer";

    return (
        <div className='movie-container'>
            <div className="movie-info">
                <div>
                    <PosterPreviewComponent movie={movie}/>
                </div>
                <div className='text-movie-info'>
                    <h2>{movie.title}</h2>
                    <br/>
                    <GenresList genres={movie.genres} onGenreClick={handleClick}/>
                    <p>Release date: {movie.release_date}</p>
                    <p>Original language: {movie.original_language}</p>
                    <p>Production countries: {movie.production_countries.map(country => country.name).join(', ')}</p>
                    <p>Quality: FHD (1080p)</p>
                    <br/>
                    <p>Overview:{movie.tagline} {movie.overview}</p>

                </div>
                <div>
                    <StarsRating voteAverage={movie.vote_average}/>
                </div>
            </div>
            <div>
                <VideoComponent movieId={movie.id} videoType={videoType}/>
            </div>
        </div>
    );
}

export default MovieInfoComponent;
