'use client';

import React, {useEffect, useState} from 'react';
import {getGenres} from '@/services/api-services';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import './genres-sidebar-component.css'

type Genre = {
    id: number;
    name: string;
};

const GenresSidebarComponent = () => {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const loadGenres = async () => {
            const data = await getGenres();
            setGenres(data.genres);
        };

        loadGenres();
    }, []);


    return (
        <div className="genres-sidebar">
            <h1>Navigation panel</h1>
            <h1>Genre</h1>


            <ul>
                {genres.map((genre) => (

                    <li key={genre.id}>
                        <NavLinkComponent path={`/genres/${genre.id}`}>{genre.name}</NavLinkComponent>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenresSidebarComponent;
