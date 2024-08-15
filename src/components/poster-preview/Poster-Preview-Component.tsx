import React, {FC} from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import {IMovie} from "@/models/IMovie";
import './poster-preview-component.css'
interface IProps {
    movie: IMovie;
}
const PosterPreviewComponent : FC<IProps> = ({movie})=>{
    return (
        <div className={'img-container'}>
            <NavLinkComponent path={`/movies/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/></NavLinkComponent>
        </div>
    );
};

export default PosterPreviewComponent;
