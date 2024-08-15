import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";

interface MovieCardProps {
    movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <PosterPreviewComponent movie={movie}/>
            {movie.title}
        </div>
    );
};

export default MovieCard;
