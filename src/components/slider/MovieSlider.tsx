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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADB0lEQVR4nO2az2+MQRjHPytBOSKODlgrElU0JcGVasrRPyC0dxJXN4lq04ZqnB3EWXBAD6LdiF/phUQVS4WErUstK8srkzybNJvu2ndm3pnZ7PtJvsmb7GZmvk/ed+aZZwZSUlJSUlKSZjswCEwAD4A5YAH4LVLPb+S3q8AAkKPF6QJGgHkg0tRHYBjYRYuQAY4BeQPT9TQN9EsfQdIDPEnAeK0eA90ExBrgMvDHgfmqVF9jQIdv8zlgxqHxWr0Asr7M7wO+eTRflVpBDro2fxQoBWC+qh9Aryvz+4HFAEzXquTiTcgB3wMwW0/FJOeEDuB5ACb/pxlZmaxzJQBzzWrUtvluoBKAsTh5gkrMrJBxlOHZVt5W2nw8ADO6Usu1MfkAjOhqytT8bksD+Quc8zSPdJoEYMTCAJTpk9Kej+xxyCQA8xZS1L4l7S14CEDBpIwVGUiZPVDT5hcPAVDaqhOAQYMOPwA7lmmz4CkAp3UCMKHZ2UtgU502Zz0FQGWxsZnUrNuta9DmLeCTzA0uA3BfJwDvYnZyG1gbo/1VwEZgm6Sth4ET8rqqJfOCvIU3gLuSj7wCPgM/Y45NleFjU4zRwXVgJW6JE4CvOh2Um2xcFSdX4J44Afil00G53QNQbPdP4G0Ck6Ca+NYDm+Xo7JDs2KqT3xngPHAJuAbcBO4AD6UEPieV6LKLSXAyZifVU5sNDdqMPOleKIlQ1EqJ0EACqbCvAJzSLYFHljdDUStthpDzeZvbYR/m32PAsOWCiI8AXDQJQJfFkthZTwHYiSHTngZuQ4+wQH8ARnRl5cQ4IwlO1G4l8aXsbbGjsYqU9K0yFoCxZqXK+dZZDTwLwJy343Hk8kGcbbJrqZ3iFhxcjloMwGytSsuk3onR66Gy20hqLEdwTI9UWnybX27T5Yys53tDT118881cnhp1nCdUZKlTK1Mw7HF0mWIqiSTHJn0yyCQ2Ns5ug9qgU6q7BcNixpCNLa1vslKXG5eDyllJqMoi9fxaqrfj8l/tMlZKSkpKSgpN8Q+nS3Kp19w7twAAAABJRU5ErkJggg=="/>
            </button>

            <div className="flex space-x-4 overflow-hidden">
                {visibleMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

            <button className="slider-button-2" onClick={nextSlide}><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nO2aT2yMQRiHn0ZCuSFxcEStSFTRlARXVlOOTq7V3hxIXN2IatOm2EjcxVlwqDqIdtP4l54kKJaKA8ulysqyMsm7SbNp9Ztv5puZTedJfskmu5lvfu/uzrzvOwORSCQSiWTNDqAfKADjwAzwDfgtUq/fyHvXgT4gR5PTAQwBs0AtpT4Cg8BumoQW4DhQNDC9lCaBHnlGkHQBTzIw3qgpoJOAWAuMAn8cmK9LPWsEaPVtPgdMOzTeqBdAmy/z+4GvHs3XpXaQQ67NHwPmAzBf1w8g78r8AWAuANONmnfxS8gB3wMwu5TKWa4JrcDzAEwup2nZmaxzNQBzSTVs23wnUA3AmE6eoBIzK7Q4yvBsq2grbT4RgJm0Utu1McUAjKTVhKn5PZ4mfsZibdFuEoAhTwFQnJJmielYAyYBmPUYAEW3pLkmY5VM2lg1zwFAtrMvhuNtSxOA/kACoNgJfDAY73SaABQCCoBis0HvQWWx2jwMLACK9cDjFOONpQnAO82HVKRBMiOdmkfAPeA2cAO4AlwAzspP8qQkKoelg7wF2AisXmZe64C7mnNTc9KmbOlby4JVwE2NualFVJtKwAFA8vxLCef2K80DKis9AOWV/hd4qxmAn8Bn4KUUUPeBW7KdXgTOL1j8jkiCsx3YlGDh87IIjms+xFQq5f0E3PnPnDbIEZmTbbDgOAB1vQolEerzFIBSBqlwb9oWeM2D1DoSRDGEnM/7OOqyWQ6/x4BBDwFQhm02RC6bBKDDQwBU+/0c8NfSeLswZNJDEGxJVY7G9ARgJK3ytnLuqQDMOG+JL2Rfkx2NVaWlb5WRAIwllWrnW2cN8CwAc96Ox5HLB7plskupltxWHFyOmgvA7GJXZA7iiLyFFNWm1FyO4pguC0WKrdrB2Te/2Jrg897QUxf/+SSXp4Yd5wlV2erUzhQMex1dppjIIsmxSbdMMovCxtltUBu0y3FYybCZMWCjpPVNm/TlrgEPgNeSUFVEZWmGjslnek3aWJFIJBKJkIh/HityOejNCucAAAAASUVORK5CYII="/>
            </button>
        </div>
    );
};

export default MovieSlider;
