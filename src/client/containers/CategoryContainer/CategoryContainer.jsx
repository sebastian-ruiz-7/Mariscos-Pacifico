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

    const toggleCocteles = ()=>{
        setToggleCategory(prev=>({...prev,cocteles:!prev.cocteles}));
    }

    const toggleTostadas = ()=>{
        setToggleCategory(prev=>({...prev,tostadas:!prev.tostadas}))
    }

    const toggleTacos = ()=>{
        setToggleCategory(prev=>({...prev,tacos:!prev.tacos}))
    }

    const toggleFiletes = ()=>{
        setToggleCategory(prev=>({...prev,filetes:!prev.filetes}))
    }

    const toggleBebidas = ()=>{
        setToggleCategory(prev=>({...prev,bebidas:!prev.bebidas}))
    }

    const toggleCamarones = ()=>{
        setToggleCategory(prev=>({...prev,camarones:!prev.camarones}))
    }

    const toggleOrdenes = ()=>{
        setToggleCategory(prev=>({...prev,ordenes:!prev.ordenes}))
    }

    const toggleBotanas = ()=>{
        setToggleCategory(prev=>({...prev,botanas:!prev.botanas}))
    }

    const toggleSopas = ()=>{
        setToggleCategory(prev=>({...prev,sopas:!prev.sopas}))
    }

    const togglePostres = ()=>{
        setToggleCategory(prev=>({...prev,postres:!prev.postres}))
    }

    const togglePescados = ()=>{
        setToggleCategory(prev=>({...prev,pescados:!prev.pescados}))
    }

    const togglePulpos = ()=>{
        setToggleCategory(prev=>({...prev,pulpos:!prev.pulpos}))
    }

    return (
        <main>

            {toggleCategory.cocteles  ? <Cocteles onClick={toggleCocteles}/>     : <CategoryCard description='Cocteles' imageName='coctel' onClick={toggleCocteles}/>}
            
            {toggleCategory.tostadas  ? <Tostadas onClick={toggleTostadas}/>     : <CategoryCard description='Tostadas' imageName='tostadas' onClick={toggleTostadas}/>}

            {toggleCategory.tacos     ? <Tacos onClick={toggleTacos}/>           : <CategoryCard description='Tacos' imageName='taco' onClick={toggleTacos}/>}

            {toggleCategory.filetes   ? <Filetes onClick={toggleFiletes}/>       : <CategoryCard description='Filetes' imageName='filete' onClick={toggleFiletes}/>}

            {toggleCategory.bebidas   ? <Bebidas onClick={toggleBebidas}/>       : <CategoryCard description='Bebidas' imageName='bebidas' onClick={toggleBebidas}/>}

            {toggleCategory.camarones ? <Camarones onClick={toggleCamarones}/>   : <CategoryCard description='Camarones' imageName='camaron' onClick={toggleCamarones}/>}

            {toggleCategory.ordenes   ? <Ordenes onClick={toggleOrdenes}/>       : <CategoryCard description='Órdenes' imageName='ordenes' onClick={toggleOrdenes}/>}

            {toggleCategory.botanas   ? <Botanas onClick={toggleBotanas}/>       : <CategoryCard description='Botanas' imageName='botanas' onClick={toggleBotanas}/>}

            {toggleCategory.sopas     ? <Sopas onClick={toggleSopas}/>           : <CategoryCard description='Sopas' imageName='sopas' onClick={toggleSopas}/>}

            {toggleCategory.postres   ? <Postres onClick={togglePostres}/>       : <CategoryCard description='Postres' imageName='postres' onClick={togglePostres}/>}

            {toggleCategory.pescados  ? <Pescados onClick={togglePescados}/>     : <CategoryCard description='Pescados' imageName='pescado' onClick={togglePescados}/>}

            {toggleCategory.pulpos    ? <Pulpos onClick={togglePulpos}/>         : <CategoryCard description='Pulpos' imageName='pulpo' onClick={togglePulpos}/>}

            <div className='EvitarOverflow'></div>
        </main>
    )
}

export {CategoryContainer}
