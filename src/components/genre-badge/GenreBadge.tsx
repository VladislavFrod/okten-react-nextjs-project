import React, {FC} from 'react';
import './genre-badge.css';

interface IGenreBadgeProps {
    genreName: string;
    genreId: number;
    onClick: (id: number) => void;
}

const GenreBadge:FC<IGenreBadgeProps> = ({ genreName, genreId, onClick }) => {
    return (
        <button className="genre-badge" onClick={() => onClick(genreId)}>{genreName}</button>
    );
};

export default GenreBadge;
