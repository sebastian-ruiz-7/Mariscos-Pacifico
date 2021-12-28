//Import dependencies
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//Import internal dependencies
import { Login } from '@pages/Login'
import { Home } from '@pages/Home/Home.jsx'
import { Pruebas } from '../pages/Pruebas'
//Import Context
import { AppContext } from '@context/AppContext'
//Import Hooks
import { useInitialState } from '@hooks/useInitialState'
//Import styles
import './App.css'

const App = () => {
    const initialState=useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element= {<Login />}/>
                    <Route exact path='/home' element= {<Home />}/>
                    <Route exact path='/pruebas' element= {<Pruebas />}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export {App}