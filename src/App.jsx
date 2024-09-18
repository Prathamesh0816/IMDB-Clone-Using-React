import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import MovieList from './components/movieList/MovieList'

function App() {
 return(
  <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movies />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error Page</h1>} />

      </Routes>
    </Router>
  </div>
 )
}

export default App
