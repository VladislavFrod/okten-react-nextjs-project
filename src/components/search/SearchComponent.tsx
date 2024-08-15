'use client'
import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import {usePathname} from "next/navigation";
import {searchMovies} from "@/services/api-services";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";
import './search-component.css';

const SearchComponent: FC = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const pathname = usePathname();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            const results = await searchMovies(query);
            setMovies(results);
        }
    };

    useEffect(() => {
        setMovies([]);
    }, [pathname]);

    return (
        <div className="search-container">
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." onBlur={() => setMovies([])} className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
            {movies.length > 0 && (
                <ul className="search-results">
                    {movies.map(movie => (
                        <li key={movie.id}>
                            {movie.title}
                            <PosterPreviewComponent movie={movie}/>
                        </li>))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;
