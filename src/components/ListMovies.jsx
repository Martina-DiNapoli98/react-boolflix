import { useMovieContext } from "../Contexts/MovieContext";
import LangMap from "../data/LangMap";

export default function ListMovies() {
    const { movies } = useMovieContext();

    return (
        <ul className="list">
            {movies.map((movie) => {
                const lang = movie.original_language;
                const countryCode = LangMap[lang];

                const fullStars = Math.ceil(movie.vote_average / 2);
                const emptyStars = 5 - fullStars;
                const fullStarsElements = [];
                const emptyStarsElements = [];

                for (let i = 0; i < fullStars; i++) {
                    fullStarsElements.push(
                        <i key={`full-${i}`} className="fa fa-star" style={{ color: 'gold' }}></i>
                    );
                }

                for (let i = 0; i < emptyStars; i++) {
                    emptyStarsElements.push(
                        <i key={`empty-${i}`} className="fa fa-star" style={{ color: 'gray' }}></i>
                    );
                }

                return (
                    <li key={`Movie-${movie.id}`}>
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                                    : "https://via.placeholder.com/150x225?text=No+Image"
                            }
                            alt={movie.title || movie.name}
                            style={{ width: "150px", borderRadius: "10px" }}
                        />
                        <p><strong>Titolo:</strong> {movie.title || movie.name}</p>
                        <p><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
                        <p>
                            <strong>Lingua:</strong>{" "}
                            {countryCode ? (
                                <img
                                    src={`https://flagcdn.com/w40/${countryCode}.png`}
                                    alt={lang}
                                    width="25"
                                    style={{ verticalAlign: "middle" }}
                                />
                            ) : (
                                <span>{lang}</span>
                            )}
                        </p>
                        <p>
                            <strong>Voto:</strong>{" "}
                            {fullStarsElements}
                            {emptyStarsElements}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
}

