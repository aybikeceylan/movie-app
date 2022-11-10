import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'

const MovieCard = ({ movie, setMovie }) => {
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)

    const API_KEY = "27d05fb6cb3bce22b091f27ecff900a2"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    console.log(query);
    const getSearch = async () => {
        setLoading(true)
        try {
            const searchData = await axios(url)
            const { data: { results } } = searchData
            setSearch(results)
            console.log(search)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    const handleClick = (e) => {
        if (query && currentUser) {
            setQuery(e.target.value)
            getSearch()

            setMovie(search)
            setQuery("")
        } else if (!currentUser) {
            alert("please login to see details")
        } else {
            alert("please enter a text")
        }

    }

    return (
        <div className="search ">
            <div className="bg-gray-500 p-2 flex justify-center">
                <input
                    type="text"
                    placeholder="Search a movie"
                    className="w-[25%] rounded-md indent-2 h-8 my-auto"
                    onChange={(e) => { setQuery(e.target.value) }}
                    value={query}
                    required
                />
                <button className=" w-[10%] bg-gray-800 text-white rounded-md p-2 "
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {loading ?
                    (<div
                        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>)
                    :
                    (movie?.map((item, index) => {
                        return (
                            <div className="card overflow-hidden border-red-200 border-2 w-1/5 h-[28rem] m-4 shadow-md shadow-current  bg-rose-800 relative" key={index}
                                onClick={() => {
                                    navigate(`/details`, { state: item })
                                    !currentUser && alert("please log in to see details")
                                }}>
                                <div className="">
                                    <img src={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`} alt="" />

                                </div>
                                <div className="flex justify-between h-[3rem] p-1">
                                    <div className="text-white pt-4">{item?.title}</div>
                                    {currentUser && <div className="border-2 bg-yellow-400 p-2 shadow-sm shadow-current">{item?.vote_average?.toFixed(1)}</div>}
                                </div>

                                <div className="overview absolute bg-slate-400 opacity-80 bottom-0 ">
                                    <h3>Overview</h3>
                                    <p>{item?.overview}</p>

                                </div>
                            </div>
                        )
                    }))}
            </div>
        </div>
    )
}

export default MovieCard