//Import dependencies
import React from 'react'
//Import styles
import './AjustesContainer.css'

export const AjustesContainer = () => {
  return (
    <>

        <button onClick={()=>location.href='/sales'} className='settings-button'>
            Ver ventas
        </button>

        <button onClick={()=>location.href='/cambiar-precios'} className='settings-button'>
            Cambiar precios
        </button>

        <button className='settings-button' onClick={()=>{
            localStorage.removeItem('sessionJWT')
            location.href='/'
            }}>
            Cerrar Sesión
        </button>
    </>
  )
}
