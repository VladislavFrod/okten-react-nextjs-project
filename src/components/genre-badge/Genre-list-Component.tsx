'use client';

import React, {useEffect, useState} from 'react';
import {getGenres} from '@/services/api-services';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

type Genre = {
    id: number;
    name: string;
};

const GenresPage = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGenres = async () => {
            try {
                const data = await getGenres(); // Отримання жанрів
                setGenres(data.genres); // Збереження жанрів у стані
            } catch (error) {
                setError("Error fetching genres");
            } finally {
                setLoading(false);
            }
        };

        loadGenres();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Genres</h1>
        <ul>
        {genres.map((genre) => (
                <li key={genre.id}>
                <NavLinkComponent path={`/genres/${genre.id}`}>
        {genre.name}
        </NavLinkComponent>
        </li>
    ))}
    </ul>
    </div>
);
};

export default GenresPage;
