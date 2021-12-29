//Import dependencies
import React from 'react'
//Import components
import { NavigationItem } from '@components/NavigationItem/NavigationItem';
//Import assets
import pendientes from '@assets/pendientes.png';
import mesa from '@assets/mesas.png';
import añadir from '@assets/add.png';
import ajustes from '@assets/ajustes.png';
//Import styles
import '@containers/NavigationMenu/NavigationMenu.css';

const NavigationMenu = ({activeNavItem}) => {

    return (
        <nav className='navigation-menu-container'>
            <ul className='nav-menu__list'>

                <NavigationItem name='Pendientes' image={pendientes} active={activeNavItem==='pendientes' ? true : false}/>

                <NavigationItem name='Mesas abiertas' image={mesa} active={activeNavItem==='mesas abiertas' ? true : false} />

                <NavigationItem name='Abrir mesa' image={añadir} active={activeNavItem==='abrir mesa' ? true : false}/>

                <NavigationItem name='Ajustes' image={ajustes} active={activeNavItem==='ajustes' ? true : false}/>
                
            </ul>
        </nav>    
    )
}

export {NavigationMenu}
