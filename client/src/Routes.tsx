import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/user/Login'
import Reset from './components/user/Reset'
import Recovery from './components/user/Recovery'
import Regester from './components/user/Regester'
import WrongRoute from './components/WrongRoute'
import PrivateRoute from './components/user/PrivateRoute'

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyCart = React.lazy(() => import("./pages/Cart"));
const LazyProducts = React.lazy(() => import("./pages/Products"));

export const AllRoutes: React.FC<{}> = () => {
    return (
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <LazyHome></LazyHome>
                    </PrivateRoute>
                }></Route>
                <Route path='/products' element={
                    <PrivateRoute>
                        <LazyProducts></LazyProducts>
                    </PrivateRoute>
                }></Route>
                <Route path='/cart' element={
                    <PrivateRoute>
                        <LazyCart></LazyCart>
                    </PrivateRoute>
                }></Route>
                <Route path='/Home' element={
                    <PrivateRoute>
                        <LazyHome></LazyHome>
                    </PrivateRoute>
                }></Route>
                <Route path='/signin' element={<Login></Login>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<Regester></Regester>}></Route>
                <Route path='/register' element={<Regester></Regester>}></Route>
                <Route path='/reset' element={<Reset></Reset>}></Route>
                <Route path='/recovery' element={<Recovery></Recovery>}></Route>
                <Route path='/*' element={<WrongRoute></WrongRoute>}></Route>
            </Routes>
    )
}