//Import dependencies
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

//Import internal dependencies
import { Login } from '@pages/Login'

import './App.css'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element= {<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export {App}