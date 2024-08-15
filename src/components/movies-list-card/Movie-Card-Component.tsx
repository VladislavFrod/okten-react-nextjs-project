'use client'
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {IMovie} from "@/models/IMovie";
import {getMovieById} from "@/services/api-services";
import MovieInfoComponent from "@/components/movie-info/Movie-Info-Component";

const MovieCardComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
                const fetchedMovie = await getMovieById(Number(id));
                setMovie(fetchedMovie);
        };

        fetchMovie();
    }, [id]);

    return (
        <div>
            {movie ? (
                <MovieInfoComponent key={movie.id} movie={movie} />
            ) : (
                <div>No movie details available</div>
            )}
        </div>
    );
};

export default MovieCardComponent