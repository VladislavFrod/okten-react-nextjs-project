'use client'
import React, {FC, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import MovieCard from "@/components/slider/MovieCard";
import './movie-slider-component.css'

interface MovieSliderProps {
    movies: IMovie[];
}

const MovieSlider: FC<MovieSliderProps> = ({ movies }) => {
    const [startIndex, setStartIndex] = useState(0);
    const moviesToShow = 8;

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
            <button className="slider-button-1" onClick={prevSlide}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVR4nO2aX0hTURzHf4hJ9dBjb0EvBekm4r0ro0KwKEkftMiCDJEoSkrSxyj2YgPtxYKC3BUUtxmb0bTUuYe23VU+FJXeUUphpQOjoIf8k5l44qy7nNvMu7tz7r3l/cIXRNzZ+X7O+f027zkAunTp0qVLly5dunSlLF/V+/U9Z4Zqes8NDfRfGJ4cuCTMeetCSK49FwXEsfxfbWX5aSsTGOHYgKPV5K9wZoeyQA31nh2u9lwQPqcTON491S9XBZDowLtWU7BcseDIjDL6a4a52In7Lr9BQ23jaNQ9iQRbGHnr5QGwHxyUAUDcGQzfZAaUQR1A37mh9uiE/VdHUHjwK1pcWESxEmwTKYd3HX0mO3zMbmikGv5hzatTA3XCIp7w08a36PvX+WXBUwWAax5v+3RWPsEMX0YlvNMcyvJcFD5FVz4+/JfXUyjkCCPflRHEmQiFkee3VBpj33nhdHTl8LaPan56AXlqV+/eipoJHiMOoL9G6Is2vNia11z43w3RRhyAp1b4gAHgbh+77UlN2lXqRGPWk2jGVxAx/tlV4pIJIDBCHEB/rfATAxjtnlxqdvYwkfDdx9rRj8f5CL3YscxzQUYWBCsT+EYcgFesf/w5H1Wk4ZEI/yQxfNRjLZWyxqUGwFuPIUyg4Y6JtLu9+2hHZJVXCo8969+pMQB1S6YdHnvm0W7JY97KH0BNuV3IYuzUNoDuVba9nBJoznuArhnsf6xZAN0phMeNUUoTxCsfG16zANwSt30k/JP8CCwp4+Jtr3kAbkrhsXHNaxqAm2J47PjwmgLgphxe0wBcpc6k3/BIhtc0gDHrSerhNQ1g1r+LenhNA5jxFUgC0FPR9n8CGGupXNsl4Cpxre0myLE8un/EhuaCrGQIcspB0wA4BSCoAsAj4RhLKQiqAOiRcYxFC4IqAOwyDzNo/DusOABXmsdYpB+IKALAQ/gYS2o5SHkmqAgAjkBoORCkPBP8ZwFwhB6LKwVgiioEmQcjVtafEL7BYJ8lD4AJjNICgI2DLjsaa6lEzsNdq77udr43yQ5wfCQPgOXtNAHI9fXcewkALMa794gDaDX5K9QOG+8beQ+T1r/F6KgiDsCZHcrCF5LUDo1rHm/7ZCsvOmzOdtK5OdZqCpaTChJ7jLVCEFm25HQeB5qyMnxTuuHjj7GIhc+92wy0ZQaUgW9jpbPypIM3GGyLFmPnTVBSHMOX4QtJqQJIdoyVpscbDB3KXZSM1R3m+Tp8IQnfyeFY/o2UL0sEan6hwWAftRgcXddy7CfMhebMZZPSpUuXLhWUCQCbAGAzAGwBgO0AYAQAEwDsBYB9AFAIAEUAcAAADgFAMQCUii4Wf7df/JtC8TV7xTGM4phbxPfA76Vq89sIAFsBgBUnXKqSi8Q5bBXnpIhyAaBExdAruUTcKdRlXOsAtFoCG0BjTdAgNrA9cU0QNzqpTRC/Fo+Bx9pGown+As/Srp+quBZFAAAAAElFTkSuQmCC"/>
            </button>

            <div className="flex space-x-4 overflow-hidden">
                {visibleMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

            <button className="slider-button-2" onClick={nextSlide}><img
                src="data:image/png;base64,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"/>
            </button>
        </div>
    );
};

export default MovieSlider;
