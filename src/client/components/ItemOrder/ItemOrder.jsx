//Import dependencies
import React from 'react'
//Import styles
import '@components/ItemOrder/ItemOrder.css'
//Import assets
import negative from '@assets/negative.png';
import plus from '@assets/plus.png';
//Import Context
import { AppContext } from '@context/AppContext';

const camaronSequence=[];

const ItemOrder = ({itemName,category,item}) => {

    const {order,setOrder} = React.useContext(AppContext);

    const [count,setCount] = React.useState(0);

    //Este estado solo se usara para la lógica display del formulario de los camarones pelados o con cabeza
    const [disableCamaron,setDisabledCamaron] = React.useState(false); 

    //Este estado es utilizado para guardar la secuencia de los camarones pelados o con cabeza y que funcione correctamente cuando se elimina un elemento
    //const [camaronSequence,setCamaronSequence] = React.useState();

    const subtractElement=()=>{
        if (count===0) {
            return
        } else{
            if (category==='camarones' && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')){
                setOrder(prevState => ({...prevState,...prevState[category][item]['total'] = count-1}))

                if (disableCamaron===false) {
                    const lastItemSelected=camaronSequence.pop();
                    setOrder(prevState=>({...prevState,...prevState[category][item]['camaronSequence']=camaronSequence}));
                    lastItemSelected !==0 && setOrder(prevState => ({...prevState,...prevState[category][item][lastItemSelected] = prevState[category][item][lastItemSelected]-1}))
                }
                
            } else{
                setOrder(prevState => ({...prevState,...prevState[category][item] = count-1}));
            }
            disableCamaron===true && setDisabledCamaron(false)
            setCount(count-1);
        }
    }

    const addElement=()=>{
        if (disableCamaron === true) {
            return
        } else if (category==='camarones' && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')) {
            setDisabledCamaron(true)
            count===0 ? setOrder(prevState => ({...prevState,...prevState[category][item] = {total:count+1}})) : setOrder(prevState => ({...prevState,...prevState[category][item]['total'] = count+1}));
            setCount(count+1)
        } else{
            setCount(count+1)
            setOrder(prevState => ({...prevState,...prevState[category][item] = count+1}));
        }
    }
    
    const cabezaPeladoHandler=(itemSelected)=>{
        order[category][item][itemSelected] && setOrder(prevState => ({...prevState,...prevState[category][item][itemSelected] = prevState[category][item][itemSelected]+1}));
        !order[category][item][itemSelected] && setOrder(prevState => ({...prevState,...prevState[category][item][itemSelected] = 1}));
        
        camaronSequence.push(itemSelected);
        setOrder(prevState=>({...prevState,...prevState[category][item]['camaronSequence']=camaronSequence}))
        setDisabledCamaron(false);   
    }
    
    React.useEffect(()=>{
        if (category==='camarones' && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')){
            (count!==0) && setCount(order[category][item]['total'])
            //console.log(order[category][item]);
        }else{
            order[category][item] && setCount(order[category][item])
        }
        console.log(order)
    },[order])

    return (
        <>
            <div className='item-order'>
                <p className='item-order__name'>{itemName}</p>

                <div className='order-handler'>
                    <img className='order-handler__icon' onClick={subtractElement} src={negative} alt="" />
                    <p className='order-handler__p'>{count}</p>
                    <img className='order-handler__icon' onClick={addElement} src={plus} alt="" />

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
