//Import dependencies
import React from 'react'
//Import Hooks
import { useNavMenuLogic } from '@hooks/useNavMenuLogic';
//Import styles
import '@components/NavigationItem/NavigationItem.css';

const NavigationItem = ({name,image,active}) => {
    
    const navHandeling=()=>{
        useNavMenuLogic(name)
    }
    

    return (
        <li onClick={navHandeling} className={`nav-menu__item ${active && 'nav-menu__item--active'} `}>
                <img src={image} alt="" />
                <span>{name}</span>
        </li>
    )
}

export {NavigationItem}
