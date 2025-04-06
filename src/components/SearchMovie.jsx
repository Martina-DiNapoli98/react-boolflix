import { useState } from "react"
import { useMovieContext } from "../Contexts/MovieContext"

export default function SearchMovie() {

    const { setMovies } = useMovieContext()
    const [title, setTitle] = useState('')


    function handleFormSearch(e) {
        e.preventDefault()

        fetchMovies('')
    };

    function fetchMovies() {
        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
        const movie_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`
        const series_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}`

        fetch(movie_url)
            .then((res) => res.json())
            .then((data) => {
                const movies = data.results.map(item => ({
                    id: item.id,
                    title: item.title,
                    original_title: item.original_title,
                    vote_average: item.vote_average,
                    original_language: item.original_language,
                    poster_path: item.poster_path
                }));


                fetch(series_url)
                    .then((res) => res.json())
                    .then((data) => {
                        const series = data.results.map(item => ({
                            id: item.id,
                            title: item.name,
                            original_title: item.original_name,
                            vote_average: item.vote_average,
                            original_language: item.original_language,
                            poster_path: item.poster_path
                        }));


                        setMovies([...movies, ...series]);
                    });
            });
    }


    return (
        <>
            <input
                className="form-control me-sm-2"
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={handleFormSearch}>
                Search
            </button>
        </>
    )
}


