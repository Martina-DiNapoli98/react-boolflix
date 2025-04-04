import { useMovieContext } from "../Contexts/MovieContext";
import LangMap from "../data/LangMap";

export default function ListMovies() {
    const { movies } = useMovieContext();

    return (
        <ul className="list">
            {movies.map((movie) => {
                const lang = movie.original_language;
                const countryCode = LangMap[lang];
                return (
                    <li key={`Movie-${movie.id}`}>
                        <p><strong>Titolo:</strong> {movie.title}</p>
                        <p><strong>Titolo originale:</strong> {movie.original_title}</p>
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
                        <p><strong>Voto:</strong> {movie.vote_average}</p>
                    </li>
                );
            })}
        </ul>
    );
}

