//Import dependencies
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

//Import internal dependencies
import { Login } from '@pages/Login'
import { Home } from '@pages/Home'
//Import styles
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element= {<Login />}/>
                <Route exact path='/home' element= {<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export {App}