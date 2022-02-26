//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { ChangePriceContainer } from '@containers/ChangePriceContainer/ChangePriceContainer'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';

export const ChangePrice = () => {

  React.useEffect(()=>{
    if (!localStorage.getItem('sessionJWT')) {
      location.href='/'
    }
  },[])


  
  return (
      <>

        <div className='category-container'>
              <img onClick={()=>location.href='/ajustes'} className='category-container__img' src={useGetImageName('previous')} alt="" />
              <p className='category-container__p'>Cambiar precios</p>
              <div></div>
        </div>

        <ChangePriceContainer />
    
    
        <NavigationMenu activeNavItem='ajustes' />

        <div className='EvitarOverflow'></div>
      </>
  )
}
