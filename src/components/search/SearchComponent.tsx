'use client'
import React, {FC, useEffect, useState, useRef} from 'react';
import {IMovie} from "@/models/IMovie";
import {usePathname} from "next/navigation";
import {searchMovies} from "@/services/api-services";
import PosterPreviewComponent from "@/components/poster-preview/Poster-Preview-Component";
import './search-component.css';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

const SearchComponent: FC = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const pathname = usePathname();
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            const results = await searchMovies(query);
            setMovies(results);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setMovies([])
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setMovies([]);
    }, [pathname]);

    return (
        <div ref={searchContainerRef} className="search-container">
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                       placeholder="Search movies..." className="search-input"/>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDklEQVR4nO1YW0gUYRSet4oub0G9BvUY9FSvhXYD2bJGDdM5Z2bSUCzsQlZ0gyiJqOx+UysqDXooclej+1NlpVJC0UUjH6KifKjdbVfhxBnX2X9mN/Pyz6awBw7M/jvMfN+c75zzn19R0pa2tA3L8vPzpyDiKkQ8h4jNAPAVAKIx/8priHhW07Q8XdcnK6PFCgoKZiFiNQAEEZEG43wvAJwHgJn/DbiqqhMA4CAA9AwWeBIiHJ0DmqaNTyl4AJgJAK8SQK2rIKOyjoyaFjLqO8i82W05X1trlXXWPUnIPC4qKpqeEvC6rs+JaToOYMMuMmpbyfSHBuXGpXbSN+91R6OrsLBwdiq+fBy8YZJx9DaZDcFBg7e9IUjG0SbrGSIJTdOmeQKedQoAbTb44lIyLrQNHbjbL7SRXlwqRuM555d0Apyw4pfnFycDtO1BmM60ROj66x4KvO9zvua17Q/DySV18SWhsUaMxB7ppVKsNpZsXCDK74bo8qso3enoGdCvtEep/E4SElWNIoGfUqXEdb7/4frG3Qmar7gfpsD7PvC33kbp8NPftOlemNYGQpbzNa/xf3yP/12UKh64otEQJH3DLpHESWkdVmxSbumUNIWp8UPf161ujVi//6Z3/q+6LWLdy4SLAq4o1LaIufBLSseObQ9idX5rAigGcellhI49i5DpApTUAyE6/jxCV9sTCZj+kKNPAECuDALnbPlU1o286vzD9f1XRAJnZBBotpO3psVzAkbNC0eHHjEBAPhmE7j20XMCZn2nSOCLjAhE7ATmvY3XBG52ixL6LZnAD+8J3Pgul4BDQvWd3udAfYd0CcWTuNb7JDZlJzGPgTaBFJdRRDw9YgI8w9p9oGyL9wTWORqZOmICJSUlk7itx2XU6p3+a51bCX63IsN4ALejUL6DTP8wBph/uWszh4hnpYAXJrFofDvdJF86VQERPJfuGdIIxEgccIySEqWUZKDZr3gxUnJZs6VUXPrXqWxoum91jJQA8K6srGycdAIxEtMQ8ZMjElWNwxvq/cE+2eiG+4ilFxELFa+Mjz749MDx0vXbyDjfPKRqo5fvHOjQq9dTEog4FQAeuV/MfYIbEW+JxYMtk69rXlj/8T1JTujeiEUCrTXs9al5cod70VinfHog9ohhOFebfbFnZfeTAEDK9Kk0b5GPlq7IOaJ4aZwXPIAPkcgvnrbcpRIAsjUNogx+7iKf5SkhwcZdk2dY3r8AwBPeSca+MPsXXgOAU4iYM1CHXbI8Zw+D7idgkVi8jJZk5x5Sxopl+FYeTyBhRSL3sDJWLCNNYpRYRjoSo8QyfepJd2IvyFrxSRlLliHIaX5W9mdVlTTwpNIWLlNPLMha2ZWZuXri/8aStrQpo9D+AKMobrmj90reAAAAAElFTkSuQmCC"
                    alt="Search" className="search-icon" onClick={handleSearch}/>
            </form>
            {movies.length > 0 && (
                <ul className="search-results">
                    {movies.map(movie => (
                        <NavLinkComponent key={movie.id} path={`/movies/${movie.id}`}>
                            <li>
                                <h2>{movie.title}</h2>
                                <PosterPreviewComponent movie={movie}/>
                            </li>
                        </NavLinkComponent>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;
