import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { AuthContext } from '../context/AuthContextProvider'


const Movie = () => {
    const [movie, setMovie] = useState([])
    const API_KEY = "27d05fb6cb3bce22b091f27ecff900a2"
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);
    const getMovie = async () => {
        try {
            const movieData = await axios(url)
            const { data: { results } } = movieData
            console.log(results)
            setMovie(results)
            console.log(movie);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovie()
    }, [])


    return (
        <div>

            <MovieCard movie={movie} setMovie={setMovie} />
        </div>
    )
}

export default Movie