import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
    const [details, setDetails] = useState([])
    const { state: item } = useLocation()
    console.log(item.id);

    const API_KEY = "27d05fb6cb3bce22b091f27ecff900a2"
    const ID = item.id
    const url = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`
    const urlVideo = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_KEY}`
    const random = Math.floor((Math.random() * 18))

    const getDetail = async () => {

        try {

            const detail = await axios(url)
            const { data } = detail
            console.log(data)
            setDetails(data)


        } catch (error) {
            console.log(error);
        }
    }
    const getVideo = async () => {

        try {

            const video = await axios(urlVideo)
            const { data } = video
            console.log(data.results)
            console.log(data.results[random].key);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDetail()
        getVideo()
    }, [])

    return (
        <>
            <h1 className='text-gray-900 text-4xl font-bold text-center'>{details?.original_title}</h1>
            <div className="flex justify-center w-[100px] h-96 m-5" >
                <iframe src={`https://www.youtube.com/embed?v=${data?.results[random]?.key}`} frameborder="0"></iframe>
            </div>
            <div className="flex justify-center">
                <div className="flex md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-[28rem] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://image.tmdb.org/t/p/w1280${details?.poster_path}`} alt="" />
                    <div className="flex flex-col justify-start h-[28rem]">
                        <h5 className="text-gray-900 text-xl font-medium border-2 h-12">Overview</h5>
                        <p className="text-gray-700 text-base border-2 h-80">
                            {details?.overview}
                        </p>
                        <p className="text-gray-600 text-xs border-2">Release Date: {details?.release_date}</p>
                        <p className="text-gray-600 text-xs border-2">Rate: {details?.vote_average?.toFixed(1)}</p>
                        <p className="text-gray-600 text-xs border-2">Total Vote: {details?.vote_count}</p>
                        <p className="text-gray-600 text-xs border-2">Go Back</p>
                    </div>
                </div>
            </div>
        </>

    );
}
export default MovieDetail