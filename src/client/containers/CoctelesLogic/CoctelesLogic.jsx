//Import dependencies
import React from 'react'
//Import components
import { CoctelesItemCard } from '@components/CoctelesItemCard/CoctelesItemCard'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import '@containers/CoctelesLogic/CoctelesLogic.css'

// const cocteles=[]



const CoctelesLogic = () => {

    const {order,setOrder,openModal} = React.useContext(AppContext);
    const [totalCoctel,setTotalCocteles] =React.useState(0);
    const [coctelesItem,setCoctelesItem] =React.useState([])
    const [insideCoctel,setInsideCoctel] =React.useState([])
    const [error,setError] =React.useState(false);

    
    
    const coctelesItemSelected=(category)=>{
        let arraysDeCocteles=[...coctelesItem];

        if (arraysDeCocteles.includes(category) ) {
            const index=arraysDeCocteles.findIndex(itemPosition=>itemPosition===category)
            arraysDeCocteles.splice(index,1)
        }else{
            arraysDeCocteles.push(category)
        }
        setCoctelesItem(arraysDeCocteles)
    }

    const whatIsInsideCoctel=(item)=>{
        let arraysDeCocteles=[...insideCoctel];

        if (arraysDeCocteles.includes(item) ) {
            const index=arraysDeCocteles.findIndex(itemPosition=>itemPosition===item)
            arraysDeCocteles.splice(index,1)
        }else{
            arraysDeCocteles.push(item)
        }
        setInsideCoctel(arraysDeCocteles)
    }

    const nextCoctel=(event)=>{
        event.preventDefault()
        if (coctelesItem.length===0 || insideCoctel.length===0) {
            setError(true)
        } else{
            const newOrder={...order};
            const currentCoctel={
                tamaño:newOrder['cocteles']['selectedSize'],
                deQue:[...coctelesItem],
                conQue:[...insideCoctel]
            }
            if (!newOrder['cocteles']['coctelesSequence']) {
                newOrder['cocteles']['coctelesSequence']=[currentCoctel];
                setOrder(newOrder)
            }else{
                newOrder['cocteles']['coctelesSequence'].push(currentCoctel);
                setOrder(newOrder)
            }
        }
        openModal(false)
    }


    return (
        <>
            <form className='cocteles-logic-container' action="">

                <p className='cocteles-logic__p'> ¿Cómo es es coctel:{` (${order['cocteles']['selectedSize']})`}?  </p>
                
                {error && (<p className='error-message'>Debes seleccionar cómo va el coctel</p>)}

                <div className='cocteles-items-list-container'>
                    <div>
                        <CoctelesItemCard onClick={()=>{coctelesItemSelected('camaron')}} coctelItem='camaron' coctelItemDescription='Camarón' />

                        <CoctelesItemCard onClick={()=>{coctelesItemSelected('pulpo')}} coctelItem='pulpo' coctelItemDescription='Pulpo' />
        
                        <CoctelesItemCard onClick={()=>{coctelesItemSelected('ostion')}} coctelItem='ostion' coctelItemDescription='Ostión' />
        
                        <CoctelesItemCard onClick={()=>{coctelesItemSelected('campechano')}} coctelItem='campechano' coctelItemDescription='Campechano' />
                    </div>

                    <div>
                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('con Todo')}} coctelItem='conTodo' coctelItemDescription='Con Todo' />

                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('Sin Ketchup')}} coctelItem='sinKetchup' coctelItemDescription='Sin Kétchup' />

                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('Sin Cebolla')}} coctelItem='sinCebolla' coctelItemDescription='Sin Cebolla' />

                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('Sin Jitomate')}} coctelItem='sinJitomate' coctelItemDescription='Sin Jitomate' />

                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('Sin Cilantro')}} coctelItem='sinCilantro' coctelItemDescription='Sin Cilantro' />

                        <CoctelesItemCard onClick={()=>{whatIsInsideCoctel('Sin Aguacate')}} coctelItem='sinAguacate' coctelItemDescription='Sin Aguacate' />

                    </div>
                </div>

                <button className='cocteles-logic-buttons-container__button--next' onClick={nextCoctel}>Siguiente</button>
                
                {/* <div className='cocteles-logic-buttons-container'>
                    <button className='cocteles-logic-buttons-container__button--cancel'>Cancelar</button>
                </div> */}
            </form>
        </>
    )
}

export {CoctelesLogic}
