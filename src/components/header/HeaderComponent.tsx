'use client'
import React, { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // usePathname для відстеження зміни маршруту
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import { searchMovies } from "@/services/api-services";
import './header-component.css';
import { IMovie } from "@/models/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";

const HeaderComponent: FC = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const pathname = usePathname(); // Отримуємо поточний маршрут

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
        <div className="menuComponent">
            <ul className='menuNavig'>
                <li>
                    <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/movies'}>Movie</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/series'}>Series</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/cartons'}>Cartoons</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/cartoon-series'}>Cartoon Series</NavLinkComponent>
                </li>
            </ul>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                    onBlur={() => setMovies([])} // Очищення результатів при втраті фокусу
                />
                <button type="submit">Search</button>
            </form>

            {movies.length > 0 && (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            {movie.title}
                            <PosterPreviewComponent movie={movie} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HeaderComponent;
