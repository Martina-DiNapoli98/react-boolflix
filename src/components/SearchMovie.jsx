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
        const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`

        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })
            .catch(err => {
                console.error(err)
            })
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


