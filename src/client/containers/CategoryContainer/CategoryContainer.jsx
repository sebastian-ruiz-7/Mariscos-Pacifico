//Import dependencies
import React from 'react'
//Import components
import { CategoryCard } from '@components/CategoryCard/CategoryCard'
import { Cocteles, Tostadas, Tacos, Filetes, Bebidas, Camarones, Ordenes, Botanas, Sopas, Postres, Pescados, Pulpos} from '@containers/ItemOrderContainer/ItemOrderContainer';
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@containers/CategoryContainer/CategoryContainer.css'
const CategoryContainer = () => {

    const {toggleCategory,setToggleCategory}=React.useContext(AppContext);

    const toggleCategoryHandler=(categoryName)=>{
        if (categoryName==='cocteles') {
            //setToggleCategory(prev.cocteles=>!prev.cocteles)
            toggleCategory.cocteles=!toggleCategory.cocteles;
        } else if (categoryName==='tostadas') {
            toggleCategory.tostadas=!toggleCategory.tostadas;
        } else if (categoryName==='tacos') {
            toggleCategory.tacos=!toggleCategory.tacos;
        } else if (categoryName==='filetes') {
            toggleCategory.filetes=!toggleCategory.filetes;
        } else if (categoryName==='bebidas') {
            toggleCategory.bebidas=!toggleCategory.bebidas;
        } else if (categoryName==='camarones') {
            toggleCategory.camarones=!toggleCategory.camarones;
        } else if (categoryName==='ordenes') {
            toggleCategory.ordenes=!toggleCategory.ordenes;
        } else if (categoryName==='botanas') {
            toggleCategory.botanas=!toggleCategory.botanas;
        } else if (categoryName==='sopas') {
            toggleCategory.sopas=!toggleCategory.sopas;
        } else if (categoryName==='postres') {
            toggleCategory.postres=!toggleCategory.postres;
        } else if (categoryName==='pescados') {
            toggleCategory.pescados=!toggleCategory.pescados;
        } else if (categoryName==='pulpos') {
            toggleCategory.pulpos=!toggleCategory.pulpos;
        }
        //setToggleCategory(toggleCategory);
        console.log(toggleCategory);
    }

    const [flag,setFlag]=React.useState(false);

    const prueba=()=>{
        setFlag(prev=>!prev)
    }

    return (
        <main>

            <div onClick={()=>{setFlag(!flag)}}>
                {flag ? <h1>Soy verdadero</h1> : <h1>Soy falso</h1>}
            </div>


            <div onClick={()=>{toggleCategoryHandler('cocteles')}} >
                {/* <CategoryCard description='Cocteles' imageName='coctel' /> */}
                


                {toggleCategory.cocteles ? <Cocteles /> : <CategoryCard description='Cocteles' imageName='coctel' />}
            </div>

            <div onClick={()=>{toggleCategoryHandler('tostadas')}} >
                <CategoryCard description='Tostadas'    imageName='tostadas'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('tacos')}} >
                <CategoryCard description='Tacos'       imageName='taco'/>    
            </div>

            <div onClick={()=>{toggleCategoryHandler('filetes')}} >
                <CategoryCard description='Filete'      imageName='filete'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('bebidas')}} >
                <CategoryCard description='Bebidas'     imageName='bebidas'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('camarones')}} >
                <CategoryCard description='Camarones'   imageName='camaron'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('ordenes')}} >
                <CategoryCard description='Órdenes'     imageName='ordenes'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('botanas')}} >
                <CategoryCard description='Botanas'     imageName='botanas'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('sopas')}} >
                <CategoryCard description='Sopas'       imageName='sopas'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('postres')}} >
                <CategoryCard description='Postres'     imageName='postres'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('pescados')}} >
                <CategoryCard description='Pescados'    imageName='pescado'/>
            </div>

            <div onClick={()=>{toggleCategoryHandler('pulpos')}} >
                <CategoryCard description='Pulpo'       imageName='pulpo'/>
            </div>

            <div className='EvitarOverflow'></div>
        </main>
    )
}

export {CategoryContainer}
