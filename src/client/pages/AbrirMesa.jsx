//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'


const AbirMesa = () => {
    return (
        <>
            <CategoryContainer />  
            
            <NavigationMenu activeNavItem='abrir mesa'/>
        </>
    )
}

export {AbirMesa}