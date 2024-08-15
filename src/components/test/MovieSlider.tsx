'use client'
import React, {FC, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import MovieCard from "@/components/test/MovieCard";

interface MovieSliderProps {
    movies: IMovie[];
}

const MovieSlider: FC<MovieSliderProps> = ({ movies }) => {
    const [startIndex, setStartIndex] = useState(0);
    const moviesToShow = 8; // Кількість фільмів, які відображаються одночасно

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? movies.length - moviesToShow : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex + moviesToShow >= movies.length ? 0 : prevIndex + 1
        );
    };

    const visibleMovies = movies.slice(startIndex, startIndex + moviesToShow);

    return (
        <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
                <img src="/path-to-left-arrow-icon.png" alt="Prev" />
            </button>

            <div className="flex space-x-4 overflow-hidden">
                {visibleMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={nextSlide}>
                <img src="/path-to-right-arrow-icon.png" alt="Next" />
            </button>
        </div>
    );
};

export default MovieSlider;
