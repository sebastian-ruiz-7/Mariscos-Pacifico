//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'


const MesasAbiertas = () => {
    return (
        <>
            <CategoryContainer />  
            
            <NavigationMenu activeNavItem='mesas abiertas'/>
        </>
    )
}

export {MesasAbiertas}