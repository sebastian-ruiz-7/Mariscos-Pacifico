//Import dependencies
import React from 'react'
//Import components
import { CategoryCard } from '@components/CategoryCard/CategoryCard'
import { Cocteles, Tostadas, Tacos, Filetes, Bebidas, Camarones, Ordenes, Botanas, Sopas, Postres, Pescados, Pulpos} from '@containers/ItemOrderContainer/ItemOrderContainer';

//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@containers/CategoryContainer/CategoryContainer.css'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';


const CategoryContainer = () => {

    const {tableNumber,order,setOrder,toggleCategory,setToggleCategory}=React.useContext(AppContext);

    const previous=useGetImageName('previous');
    

    const toggleCategoryHandler=(category)=>{
        setToggleCategory(prevState => ({...prevState,[category] : !prevState[category]}))
    }

    const goBackToSelectTable=()=>{
        location.href='/abrir-mesa'
    }

    return (
        <main>

            <div className='category-container'>
                <img onClick={goBackToSelectTable} className='category-container__img' src={previous} alt="" />
                <p className='category-container__p'>Toma el pedido de la mesa {tableNumber}</p>
                <div></div>
            </div>

            {toggleCategory.cocteles  ? <Cocteles onClick={()=>{toggleCategoryHandler('cocteles')}}/>     : <CategoryCard description='Cocteles' imageName='coctel' onClick={()=>{toggleCategoryHandler('cocteles')}}/>}
            
            {toggleCategory.tostadas  ? <Tostadas onClick={()=>{toggleCategoryHandler('tostadas')}}/>     : <CategoryCard description='Tostadas' imageName='tostadas' onClick={()=>{toggleCategoryHandler('tostadas')}}/>}

            {toggleCategory.tacos     ? <Tacos onClick={()=>{toggleCategoryHandler('tacos')}}/>           : <CategoryCard description='Tacos' imageName='taco' onClick={()=>{toggleCategoryHandler('tacos')}}/>}

            {toggleCategory.filetes   ? <Filetes onClick={()=>{toggleCategoryHandler('filetes')}}/>       : <CategoryCard description='Filetes' imageName='filete' onClick={()=>{toggleCategoryHandler('filetes')}}/>}

            {toggleCategory.bebidas   ? <Bebidas onClick={()=>{toggleCategoryHandler('bebidas')}}/>       : <CategoryCard description='Bebidas' imageName='bebidas' onClick={()=>{toggleCategoryHandler('bebidas')}}/>}

            {toggleCategory.camarones ? <Camarones onClick={()=>{toggleCategoryHandler('camarones')}}/>   : <CategoryCard description='Camarones' imageName='camaron' onClick={()=>{toggleCategoryHandler('camarones')}}/>}

            {toggleCategory.ordenes   ? <Ordenes onClick={()=>{toggleCategoryHandler('ordenes')}}/>       : <CategoryCard description='Órdenes' imageName='ordenes' onClick={()=>{toggleCategoryHandler('ordenes')}}/>}

            {toggleCategory.botanas   ? <Botanas onClick={()=>{toggleCategoryHandler('botanas')}}/>       : <CategoryCard description='Botanas' imageName='botanas' onClick={()=>{toggleCategoryHandler('botanas')}}/>}

            {toggleCategory.sopas     ? <Sopas onClick={()=>{toggleCategoryHandler('sopas')}}/>           : <CategoryCard description='Sopas' imageName='sopas' onClick={()=>{toggleCategoryHandler('sopas')}}/>}

            {toggleCategory.postres   ? <Postres onClick={()=>{toggleCategoryHandler('postres')}}/>       : <CategoryCard description='Postres' imageName='postres' onClick={()=>{toggleCategoryHandler('postres')}}/>}

            {toggleCategory.pescados  ? <Pescados onClick={()=>{toggleCategoryHandler('pescados')}}/>     : <CategoryCard description='Pescados' imageName='pescado' onClick={()=>{toggleCategoryHandler('pescados')}}/>}

            {toggleCategory.pulpos    ? <Pulpos onClick={()=>{toggleCategoryHandler('pulpos')}}/>         : <CategoryCard description='Pulpos' imageName='pulpo' onClick={()=>{toggleCategoryHandler('pulpos')}}/>}

            

        </main>
    )
}

export {CategoryContainer}
