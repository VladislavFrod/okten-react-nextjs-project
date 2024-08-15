import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";

interface IProps{
    movie: IMovie
}

const MoviesInfoComponent: FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.title}
            <PosterPreviewComponent movie={movie}/>
        </div>
    );
};

export default MoviesInfoComponent;