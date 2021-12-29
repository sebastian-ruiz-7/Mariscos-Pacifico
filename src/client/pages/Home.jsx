//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'


const Home = () => {
    return (
        <>
            <CategoryContainer />  
            
            <NavigationMenu />
        </>
    )
}

export {Home}