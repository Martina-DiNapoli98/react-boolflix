import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

function useMovieContext() {
    return useContext(MovieContext);
}


export { MoviesProvider, useMovieContext };
