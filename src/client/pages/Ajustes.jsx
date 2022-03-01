//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { AjustesContainer } from '@containers/AjustesContainer/AjustesContainer'

const Ajustes = () => {

    React.useEffect(()=>{
        if (!localStorage.getItem('sessionJWT')) {
          location.href='/'
        }
      },[])

    return (
        <>

            <AjustesContainer />

            <div className='EvitarOverflow'></div>
            
            <NavigationMenu activeNavItem='ajustes'/>
        </>
    )
}

export {Ajustes}