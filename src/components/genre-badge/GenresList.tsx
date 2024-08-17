import React, {FC} from 'react';
import GenreBadge from './GenreBadge';
import './genres-list.css';

interface IGenre {
    id: number;
    name: string;
}

interface IGenresListProps {
    genres: IGenre[];
    onGenreClick: (id: number) => void;
}

const GenresList: FC<IGenresListProps> = ({genres, onGenreClick}) => {
    return (
        <div className="genres-list">
            {genres.map(genre => (
                <GenreBadge
                    key={genre.id}
                    genreName={genre.name}
                    genreId={genre.id}
                    onClick={onGenreClick}
                />
            ))}
        </div>
    );
};

export default GenresList;
