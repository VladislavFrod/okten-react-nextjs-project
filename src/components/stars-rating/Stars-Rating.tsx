import React, {FC} from 'react';
import StarRatings from 'react-star-ratings';
import './stars-rating.css';

interface IMovieRatingProps {
    voteAverage: number;
}

const StarsRating: FC<IMovieRatingProps> = ({ voteAverage }) => {
    return (
        <div className="movie-rating-container">
            <StarRatings
                rating={voteAverage / 2}
                numberOfStars={5}
                starDimension="15px"
                starSpacing="0"
                starRatedColor="blue"
                starEmptyColor="grey"
            />
        </div>
    );
};

export default StarsRating;
