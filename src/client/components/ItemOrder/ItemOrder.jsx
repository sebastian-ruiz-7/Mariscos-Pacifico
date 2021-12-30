//Import dependencies
import React from 'react'
//Import styles
import '@components/ItemOrder/ItemOrder.css'
//Import assets
import negative from '@assets/negative.png';
import plus from '@assets/plus.png';
//Import Context
import { AppContext } from '@context/AppContext';

const ItemOrder = ({itemName,category,item}) => {

    const {order,setOrder} = React.useContext(AppContext);

    const [count,setCount] = React.useState(0);

    const subtraction=()=>{
        if (count===0) {
            return
        } else{
            setCount(count-1);
            setOrder(prevState => ({...prevState,...prevState[category][item] = count-1}));
        }
    }

    const addElement=()=>{
        setCount(count+1)
        setOrder(prevState => ({...prevState,...prevState[category][item] = count+1}));
    }
    
    React.useEffect(()=>{
        console.log(order)
    },[order])

    return (
        <div className='item-order'>
            <p className='item-order__name'>{itemName}</p>

            <div className='order-handler'>
                <img className='order-handler__icon' onClick={subtraction} src={negative} alt="" />
                <p className='order-handler__p'>{count}</p>
                <img className='order-handler__icon' onClick={addElement} src={plus} alt="" />
            </div>
        </div>
    )
}

export {ItemOrder}
