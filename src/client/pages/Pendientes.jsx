//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'


const Pendientes = () => {
    return (
        <>
            <CategoryContainer />  
            
            <NavigationMenu activeNavItem='pendientes'/>
        </>
    )
}

export {Pendientes}