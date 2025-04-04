import Header from './products/Header'
import { MoviesProvider } from "./Contexts/MovieContext"
import SearchMovie from './components/SearchMovie'
import ListMovies from './components/ListMovies'

export default function App() {
  return (
    <>
      <MoviesProvider>
        <Header />
        <SearchMovie />
        <ListMovies />
      </MoviesProvider>
    </>
  )
}