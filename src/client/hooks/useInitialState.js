import React from 'react'

const useInitialState = () => {
    const [toggleCategory,setToggleCategory]=React.useState({
        cocteles:false,
        tostadas:false,
        tacos:false,
        filetes:false,
        bebidas:false,
        camarones:false,
        ordenes:false,
        botanas:false,
        sopas:false,
        postres:false,
        pescados:false,
        pulpos:false
    });

    return{
        toggleCategory,setToggleCategory
    }
}

export {useInitialState}
