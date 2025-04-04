import { useMovieContext } from "../Contexts/MovieContext"

export default function ListMovies() {
    const { movies } = useMovieContext()
    return (
        <>
            <ul className="list">
                {
                    movies.map((movie) => (
                        <li key={`Movie-${movie.id}`}>
                            <h6>{movie.title}</h6>
                            <h6>{movie.original_title}</h6>
                            <h6>{movie.original_language}</h6>
                            <h6>{movie.vote_average}</h6>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}


