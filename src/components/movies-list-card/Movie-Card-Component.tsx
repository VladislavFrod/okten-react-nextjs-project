'use client'
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {IMovie} from "@/models/IMovie";
import {getMovieById} from "@/services/api-services";
import MovieInfoComponent from "@/components/movie-info/Movie-Info-Component";

const MovieCardComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const fetchedMovie = await getMovieById(Number(id));
                setMovie(fetchedMovie);
            } catch (error) {
                setError('Error when receiving movie details');
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {movie ? (
                <MovieInfoComponent movie={movie} />
            ) : (
                <div>No movie details available</div>
            )}
        </div>
    );
};

export default MovieCardComponent