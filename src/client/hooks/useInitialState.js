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

    const [tableNumber,setTableNumber] = React.useState(false);

    const [order,setOrder] = React.useState({
        cocteles:{
            grande:0,
            mediano:0,
        },tostadas:{
            marlin:0,
            cevichePescado:0,
            cevicheCamaron:0,
            camaron:0,
            pulpo:0
        }
    })

    return{
        toggleCategory,setToggleCategory,tableNumber,setTableNumber,order,setOrder
    }
}

export {useInitialState}
