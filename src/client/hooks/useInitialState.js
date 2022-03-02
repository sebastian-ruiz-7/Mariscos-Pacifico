//Import dependencies
import React from 'react'
//Import hooks
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
        pulpos:false,
        otros:false
    });

    const [tableNumber,setTableNumber] = React.useState(false);

    const [order,setOrder] = React.useState({});

    const [modal,openModal] = React.useState(false);
    const [modalAlert,openModalAlert] = React.useState(false);

    const [editingOrder,setEditingOrder]=React.useState(false)

    const [lastCoctelSizeSelected,setLastCoctelSizeSelected]=React.useState(undefined)

    return{
        toggleCategory,setToggleCategory,tableNumber,setTableNumber,order,setOrder,modal,openModal,lastCoctelSizeSelected,setLastCoctelSizeSelected,editingOrder,setEditingOrder,modalAlert,openModalAlert
    }
}

export {useInitialState}
