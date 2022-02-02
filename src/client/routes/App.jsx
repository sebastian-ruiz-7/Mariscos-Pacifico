//Import dependencies
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//Import pages
import { Login } from '@pages/Login'
import { Home } from '@pages/Home.jsx'
import { Pruebas } from '@pages/Pruebas'
import { Pendientes } from '@pages/Pendientes'
import { MesasAbiertas } from '@pages/MesasAbiertas'
import { Ajustes } from '@pages/Ajustes'
import { AbirMesa } from '@pages/AbrirMesa'
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
                    <Route exact path='/login' element= {<Login />}/>
                    {/* <Route exact path='/home' element= {<Home />}/> */}
                    <Route exact path='/abrir-mesa' element= {<AbirMesa />}/>
                    <Route exact path='/pendientes' element= {<Pendientes />}/>
                    <Route exact path='/mesas-abiertas' element= {<MesasAbiertas />}/>
                    <Route exact path='/ajustes' element= {<Ajustes />}/>
                    <Route exact path='/pruebas' element= {<Pruebas />}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export {App}