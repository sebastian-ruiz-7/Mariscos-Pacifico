//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
//Import containers
import { SalesContainer } from '@containers/SalesContainer/SalesContainer';
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';

export const Sales = () => {
  return (
      <>
        
        <div className='category-container'>
              <img onClick={()=>location.href='/ajustes'} className='category-container__img' src={useGetImageName('previous')} alt="" />
              <p className='category-container__p'>Ver ventas</p>
              <div></div>
        </div>


        <SalesContainer />

        <div className='EvitarOverflow'></div>

        <NavigationMenu activeNavItem='ajustes' />
      </>
  )
}
