//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'


const Ajustes = () => {
    return (
        <>
            <CategoryContainer />  
            
            <NavigationMenu activeNavItem='ajustes'/>
        </>
    )
}

export {Ajustes}