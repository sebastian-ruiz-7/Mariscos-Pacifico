//Import dependencies
import React from 'react'
//Import styles
import '@components/ItemOrder/ItemOrder.css'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';
import negative from '@assets/negative.png';
import plus from '@assets/plus.png';
//Import Context
import { AppContext } from '@context/AppContext';

const ItemOrder = ({itemName,category,item}) => {

    const {order,setOrder,openModal,setLastCoctelSizeSelected} = React.useContext(AppContext);

    const [count,setCount] = React.useState(0);

    //Este estado solo se usara para la lógica display del formulario de los camarones pelados o con cabeza
    const [disableCamaron,setDisabledCamaron] = React.useState(false); 

    //This function has the logic to increment the count of the item selected
    const addElement=()=>{
        if (disableCamaron===true) {
            return
        }
        setCount(count+1)
        const newOrder=addNewElementToOrder()
        setOrder(newOrder)
    }

    //This function has the logic to add the correct property to the object named order
    const addNewElementToOrder=()=>{
        let newOrder={...order}
        if (!newOrder[category]) {
            newOrder[category]={}
        }
        if (itemIsShrimp()) {
            //This block of code only works for the shrimp logic
            setDisabledCamaron(true)
            if (!newOrder[category][item]) {
                newOrder[category][item]={}
            }
            newOrder[category][item]['total']=count+1
        }else if (itemIsCoctel()) {
            
            //This block of code only works for the cocteles logic
            if (!newOrder[category][item]) {
                newOrder[category][item]={}
            }
            newOrder[category][item]['total']=count+1
            setLastCoctelSizeSelected(item)
            openModal(true);
        }
        else{
            //This will works for the rest of items
            if (!newOrder[category][item]) {
                newOrder[category][item]={}
            }
            newOrder[category][item]['total']=count+1
            newOrder[category][item]['delivered']=false
            if (!newOrder[category][item]['notYetDelivered']) {
                newOrder[category][item]['notYetDelivered']=1
            }else{
                newOrder[category][item]['notYetDelivered']++
            }
        }
        return newOrder
    }

    const itemIsShrimp=()=>{
        if (category==='camarones' && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')){
            return true
        }
    }

    const itemIsCoctel=()=>{
        if (category==='cocteles') {
            return true
        }
    }

    //This function has the logic to select de type of shrimp
    const cabezaPeladoHandler=(itemSelected)=>{
        const newOrder={...order}
        if (!newOrder[category][item]['shrimpSequence']) {
            newOrder[category][item]['shrimpSequence']=[]
        }

        if (!newOrder[category][item][itemSelected]) {
            newOrder[category][item][itemSelected]={total:1}
        }else{
            newOrder[category][item][itemSelected]['total']=newOrder[category][item][itemSelected]['total']+1
        }
        newOrder[category][item][itemSelected]['delivered']=false
        if (!newOrder[category][item][itemSelected]['notYetDelivered']) {
            newOrder[category][item][itemSelected]['notYetDelivered']=1
        }else{
            newOrder[category][item][itemSelected]['notYetDelivered']++
        }
        newOrder[category][item]['shrimpSequence'].push(itemSelected)
        setDisabledCamaron(false)
        setOrder(newOrder)
    }

    //This function has the logic to decrement the count of the item selected
    const removeElement=()=>{
        if (count===0) {
            return
        }
        setCount(count-1)
        const newOrder=removeElementfromOrder()
        setOrder(newOrder)
    }

    //This fuction has the logic to remove correctly the property from the object named order
    const removeElementfromOrder=()=>{
        let newOrder
        if (itemIsShrimp()) {
            newOrder=removeShrimpLogic()
            newOrder=removePropertiesFromOrder(newOrder)
        }else if (itemIsCoctel()) {
            newOrder=removeCoctelLogic()
            newOrder=removePropertiesFromOrder(newOrder)
        }else{
            newOrder={...order}
            newOrder[category][item]['total']=count-1
            if (newOrder[category][item]['notYetDelivered']>0) {
                newOrder[category][item]['notYetDelivered']--
            }
            newOrder=removePropertiesFromOrder(newOrder)
        }
        return newOrder
    }


    const removeCoctelLogic=()=>{
       const newOrder={...order}
       newOrder[category][item]['total']=newOrder[category][item]['total']-1
       newOrder[category][item]['coctelesSequence'].pop()
       return newOrder
    }


    const removePropertiesFromOrder=(newOrder)=>{
        if (itemIsShrimp()) {
            if (newOrder[category][item]['cabeza']===0) {
                delete newOrder[category][item]['cabeza']
            }else if (newOrder[category][item]['pelados']===0) {
                delete newOrder[category][item]['pelados']
            }
            if (newOrder[category][item]['total']===0) {
                delete newOrder[category][item]
            }
            if (Object.getOwnPropertyNames(newOrder[category]).length===0) {
                delete newOrder[category]
            }
        }else if (itemIsCoctel()) {
            if (newOrder[category][item]['total']===0) {
                delete newOrder[category][item]
            }
            if (Object.getOwnPropertyNames(newOrder[category]).length===0) {
                delete newOrder[category]
            }
        } else{
            if (newOrder[category][item]['total']===0) {
                delete newOrder[category][item]
            }
            if (Object.getOwnPropertyNames(newOrder[category]).length===0) {
                delete newOrder[category]
            }
        }
        return newOrder
    }

    const removeShrimpLogic=()=>{
        const newOrder={...order}
        if (!disableCamaron) {
            const lastItem=newOrder[category][item]['shrimpSequence'].pop()
            newOrder[category][item][lastItem]['total']--
            if (newOrder[category][item][lastItem]['notYetDelivered']>0) {
                newOrder[category][item][lastItem]['notYetDelivered']--;    
            }
            // console.log(lastItem)
            // console.log(newOrder[category][item])
            //console.log(newOrder[category][item][lastItem])
            
        }
        newOrder[category][item]['total']=newOrder[category][item]['total']-1
            setDisabledCamaron(false)
            return newOrder
    }

    React.useEffect(()=>{
        
        if (order[category]) {

            if (!order[category][item]) {
                return
            }else{
                order[category][item]['total'] && setCount(order[category][item]['total'])
            }
        }
    },[order])

    return (
        <>
            <div className='item-order'>
                <p className='item-order__name'>{itemName}</p>

                <div className='order-handler'>
                    <img className='order-handler__icon' onClick={removeElement} src={useGetImageName('negative')} alt="" />
                    <p className='order-handler__p'>{count}</p>
                    <img className='order-handler__icon' onClick={addElement} src={useGetImageName('plus')} alt="" />

                </div>
            </div>
            
            {(category==='camarones' && disableCamaron===true && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')) && 
            
            <form className='form-Cabe-Pela-container' action="">
                <div onClick={()=>cabezaPeladoHandler('cabeza')}>
                    <input type="radio" name='PeladosCabeza' id='cabeza'/>
                    <label className='form-Cabe-Pela-container__label' htmlFor="cabeza">Con Cabeza</label>
                </div>

                <div onClick={()=>cabezaPeladoHandler('pelados')}>
                    <input type="radio" name='PeladosCabeza' id='pelados'/>
                    <label className='form-Cabe-Pela-container__label' htmlFor="pelados">Pelados</label>
                </div>
            </form>}
        </>
    )
}

export {ItemOrder}
