//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@components/NavigationMenu/NavigationMenu'
//Import styles
import '@pages/Home/Home.css'

const Home = () => {
    return (
        <>
            
            <CategoryContainer />
            
            <nav className='navigation-menu-container'>
            <NavigationMenu className='nav-menu'/>
            </nav>
        </>
    )
}

export {Home}