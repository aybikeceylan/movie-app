import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Navbar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {


    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path="details" element={<PrivateRouter />}>
                        <Route path='' element={<MovieDetail />} />
                    </Route>
                    <Route path="*" element={<Main />} />
                </Routes>

            </BrowserRouter>

        </div >
    )
}

export default AppRouter