'use client'
import React, {FC, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import MovieCard from "@/components/slider/MovieCard";
import './movie-slider-component.css'

interface MovieSliderProps {
    movies: IMovie[];
}

const MovieSlider: FC<MovieSliderProps> = ({ movies }) => {
    const [startIndex, setStartIndex] = useState(0);
    const moviesToShow = 8;

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? movies.length - moviesToShow : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex + moviesToShow >= movies.length ? 0 : prevIndex + 1
        );
    };

    const visibleMovies = movies.slice(startIndex, startIndex + moviesToShow);

    return (
        <div className="relative">
            <button className="slider-button-1" onClick={prevSlide}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2c20/bVgDG8w8wwuiIQxlJg5tbuYz9gxMv7aRVYiNtcxlap2aM3EighLKunfqIYpF6ZdKYWImZkvgSArQVfZzO5KRu0z3UJ/gkHuP7Sd9Lnuzvd86xfSIdhwMAAAAAAAAAAAAAAHAxCaweDkykldt8Rlb5lKz4UvIt/Te7r+tC4CmcOPmMIvAZhbxNWiG+lCIG87Vhu6/vApSvClezKuGzHQIgoU/lZ9vlG4GEPpZ/VS8/p5JWIKHP5edUwZ9TiR5I6Hv5muBfUUkrkNA/poovhvx5tRzIa8S/YuQMEtJKGa+oFsoPvIklCSk50pth8j9kpnDiDBY0IVB4V37AsgRZtfu+zlX5wYJG9LCSMJGR63bf27lYdoKr2nZwtUFaYSkhLS/YfX//+fJDa9p2yCifpYQMHsLmy86qJoTWGqQVhhL4LPaHTMsPrXWUz1ACn0P5FOU3hPD9QxK+/y8BliUo2Bk1LX+9IYTX9fKNMJKQQ/mm5YfXG8I1vXwjrCTkVIx80/KLDeFa8ZDoAthKUJ/iDxmT8ieLzXb5RphJUFE+TfmTG00yWWwSlhICKN98zZ/aeFO+EUYSAgUNI5+m/KkHTaKHpYQAyqcY+ZvvymcpIbiGkf/h8p/o5R8J05tHZGrzfQFWJQRR/oe5nHg2FsrL2vRPR0QX0AsJIcbbFjR/6kx0JqVH1v/oaWe5nSt6fuxMnXiXOvJDOx4jST01Mp6svhpPVgveZC3gsIIrKnqD2eppq3wjkEBoJLRE3Ksdj35X+/Ts5eeqpzMPj8hMpwBIILQzoT0bahlr5RuBBHKm5ehe9WVX5XOLZU8wVzv97OdjMvNQDyT4LD4Tuit/pV2+EUiQLT+YqcsP6eU/OiatQAJh9XZkWv7Itzuu0Er19eyjY6IHEhSmr6imAvhk5dns4xMy+7gtABIUpt8JpgKmN7S/2wIgge/BxxqVgM9/MQRAAs9YgqkA/9L+r7oASFB7sm1B9RAO52uvIUHtyd6Rg/o1NF89hQSVuQQqAZCg9mwXlVoAJKg9keDoFtdd0Rsu1LAcZa1L8C7VX3QtABJUhjOhnj6TAEhQLUu4siw3+WR1zGGFse/Fy3yyok4/OMR3QpZOgi9Vf+lbrqctl28w+MUT5+DcVmlwbouwzkdzW+LA9RLOhDCVMC86h26USx9/+ZQwz40yJFDNhHnReemrndKlm78R1hm+uSMOXP8dM8FcguT85Ovd0sg3fxD22RVHI5BAJWEksldyRfYI8yzsQQLdciQ5R279WXLdfk56EBEzgQLPvOTk7jwvcdF9wjquKCRQ4bkrOblYpcTFKoR1XNF9cTSCY8uoJLiiFQES7JYQkwQuLhHWccUqmAmQcI5mgjsmCe64RFiHw0ygY/zOX0PuWGW7JxLilfLw4i4OdbVVQkzCiVnUy1FCEtyJA8I08QOcmGWnBC4u4cSsbpcjLiGVGQpY6OoCADsJXELCQ9iu5YiLH+CDzC4JHMq3TwKH8u2TwKF8+yRwKN8+CRzK7x/Di7sDXEKKuBOSrEd/z8d+DwAAAAAAAAAAAAAAwGGVfwBzpH+45RVgKgAAAABJRU5ErkJggg=="/>
            </button>

            <div className="flex space-x-4 overflow-hidden">
                {visibleMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

            <button className="slider-button-2" onClick={nextSlide}><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVR4nO2cX2/aVhyG8wGSQdcmmEiEFsyALE3afcF1N1W1VUoT2IIzqZVK2/AvQNo0XddNu4ywEjKl1bp1SZwpYGPAyVopu5p0pgNY2S4CNvwab9n7SK+MuLDQ8x7OObYRQ0MAAAAAAAAAAAAAAAAwCJMZfTiQUmNiStWCaVUVM2qMvzfQSYE1/AXFHUxrspjWmJg5STCrbUXylYsWTwMo5YtZjYWyNX5ECU7JD3Ui5lCCY/JDuXY+QglOyjeDb4Jz8pc7ydWwJvRLuNgYCaS1zb7lL+ssnNf5642rq79f6PuD/F8JpNT4oPLNoIQ+ENNqjUJ+KwV+xHRkCzGjalTyI52Ei3WsCVbhtxco5UeK9U50rAlWF2Exo23Syq+zKM8KSrCEv3DkFjM1mVZ+O5EVTEfWS8jWZEr5f8tWJP8WN/CslBDK1mRK+ZOPeRosutJACZZLyNVkLp5KfitPGiz6GCXYKEGXKeXzfMyDEqyXEF7WS6TyeVZbR0xHtkqglN/J1JMmSrBaQqSgl0jlrzbZ1NNWUIIVZngJRb1ELL+Vq2vNrcgLbFEtl0As3wxKsFzCil4ilt/OM5RguwRC+Wz6mUFbwvjdis+XrOQmkgfv/MkK8yerzP+gnctmHp7kyiMe9SRLKguYSbUTbEVjwfRJRKKHKeRbTZvyW/nGYNF8tT5+96VvYPkT9ytGWzzkT1mUbyaSPTj2fb4R7LsAPvIhv2lr5JuZ4XlusEhugBIw7TQHkm+m7xIw7TQHlj/z/JBd+/aQRfOVPwJ3yiGbBWDBnSKQbyZasFkCdjtNMvnXXrQzaacEbDWbpPKvdxJdPjgevfdK6FmA8/t8/dzJv/4dzxETH+7+aK0AyGfU8nmm1/Q/excA+ex9yP/k+yM2/dRGAZh2DFL5PGJyx8IUBPmMeuTzTOYrx2Nfb3t6FoCRb9DLL1atb0Ox2zGck/+PArDVZGcun3P5UfUd5Bskc75vro+bcVeW1AIusgxn5Le+AZlKOLCkHuIK1zh7+SbBpYovkKpmAqnq2/P+GHGa6iJrrcGC93frXmljYiD55xnXpz+4XTfWZddn64w6H9xYL4/cLOFn7Kfhmt1yX7i1KX94q8zoswn5veRfur0tX7r9klHn4hfb5ZGbP2Hkn4ZrVnGPzr2Wx+Z+ZuS587o8HoP8rvLH5t/IntgbRp9fIL+n/PivsufLHUae+A7kd8M/q7g9CzuysLDLqONZ2IX8bvjvcfl7spDYY9TxJLh8/OXZqUC+0/ITiixICqOOR9rDyO8G5Dss35tQZK+kMOoIGPndGY2/GvYm9jbeh3x+3omvfsO/aHVDSCgxyHcQ7+K+5l3cZ5QRpH0suE4VAPk2ESRlnqwAScGcb5fRuD7MxUG+09tQab+Eaec/WIKABde5EiDfwRIEjHznShAg37kSBMg/2y2qICnzgqRUW1lU5vh7Z/gRAAAAAAAAAAAAAAAAQ/8i/gLZc3+B9tjFfwAAAABJRU5ErkJggg=="/>
            </button>
        </div>
    );
};

export default MovieSlider;
