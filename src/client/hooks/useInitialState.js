//Import dependencies
import React from 'react'
//Import hooks
import { menu } from '@hooks/useGetMenu';
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


    const [order,setOrder] = React.useState(menu);

    const [modal,openModal] = React.useState(false);

    //const [coctelesItem,setCoctelesItem] = React.useState({})


    return{
        toggleCategory,setToggleCategory,tableNumber,setTableNumber,order,setOrder,modal,openModal,
    }
}

export {useInitialState}
