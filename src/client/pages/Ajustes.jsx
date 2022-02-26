//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
//Import styles
import './Ajustes.css'

const Ajustes = () => {

    React.useEffect(()=>{
        if (!localStorage.getItem('sessionJWT')) {
          location.href='/'
        }
      },[])

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


            <div className='EvitarOverflow'></div>
            
            <NavigationMenu activeNavItem='ajustes'/>
        </>
    )
}

export {Ajustes}