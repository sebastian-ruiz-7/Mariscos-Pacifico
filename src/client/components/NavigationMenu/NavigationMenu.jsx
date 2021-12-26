//Import dependencies
import React from 'react'
//Import assets
import pendientes from '@assets/pendientes.png';
import mesa from '@assets/mesas.png';
import añadir from '@assets/add.png';
import ajustes from '@assets/ajustes.png';
//Import styles
import '@components/NavigationMenu/NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <ul className='nav-menu__list'>

            <li className='nav-menu__item'>
                <img src={pendientes} alt="" />
                <span>Pendientes</span>
            </li>

            <li className='nav-menu__item'>
                <img src={mesa} alt="" />
                <span>Mesas abiertas</span>
            </li>

            <li className='nav-menu__item'>
                <img src={añadir} alt="" />
                <span>Abrir mesa</span>
            </li>

            <li className='nav-menu__item'>
                <img src={ajustes} alt="" />
                <span>Ajustes</span>
            </li>

        </ul>
    )
}

export {NavigationMenu}
