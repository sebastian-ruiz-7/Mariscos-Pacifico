//Import dependencies
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//Import pages
import { Login } from '@pages/Login'
import { Pruebas } from '@pages/Pruebas'
import { Pendientes } from '@pages/Pendientes'
import { MesasAbiertas } from '@pages/MesasAbiertas'
import { Ajustes } from '@pages/Ajustes'
import { AbirMesa } from '@pages/AbrirMesa'
import { BillTickerMaker } from '@containers/BillTickerMaker/BillTickerMaker'
import { ChangePrice } from '../pages/ChangePrice'
import { Sales } from '../pages/Sales'
import { NotFound } from '@pages/NotFound'
//Import Context
import { AppContext } from '@context/AppContext'
//Import Hooks
import { useInitialState } from '@hooks/useInitialState'
//Import API address
import { API_address } from '../config'
import { socket } from '../config'
//Import styles
import './App.css'


const App = () => {

    React.useEffect(()=>{
        socket.on('newUser',socket=>{
            console.log(socket)
        })
    },[socket])


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
                    <Route exact path='/ticket' element= {<BillTickerMaker />}/>
                    <Route exact path='/pruebas' element= {<Pruebas />}/>
                    <Route exact path='/cambiar-precios' element= {<ChangePrice />}/>
                    <Route exact path='/sales' element= {<Sales />}/>
                    <Route path='*' element= {<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export {App}