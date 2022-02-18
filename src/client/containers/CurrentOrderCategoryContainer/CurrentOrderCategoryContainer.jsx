import React from 'react'
import { ItemOrderCard } from '@components/ItemOrderCard/ItemOrderCard';


const CurrentOrderCategoryContainer = ({category,items}) => {

    const renderItems=()=>{
        const itemsArray=Object.keys(items);
        
        if (itemIsCoctel()) {
          return(
            itemsArray.map(key=>
                <ItemOrderCard ItemName={key} ItemCount={items[key]['total']} key={`Item Order Card ${key}`} />
            ))
        } else if (itemIsShrimp()) {

          return(
            itemsArray.map(key=>{
              if (shrimpWithOrWithoutHead(key)) {
                return <ItemOrderCard ItemName={key} ItemCount={items[key]['total']} key={`Item Order Card ${key}`} />
              }else{
                return  <ItemOrderCard ItemName={key} ItemCount={items[key]} key={`Item Order Card ${key}`} />
              }
            }))

            
        } else{
          return(
              itemsArray.map(key=>
                  <ItemOrderCard ItemName={key} ItemCount={items[key]} key={`Item Order Card ${key}`} />
              )
  
          )
        }

    }

    const itemIsShrimp=()=>{
      if (category==='camarones'){
          return true
      }
    }

    const shrimpWithOrWithoutHead=(item)=>{
      if (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural'){
        return true
      }else{
        return false
      }
    }
    
    
    const itemIsCoctel=()=>{
      if (category==='cocteles') {
          return true
      }
    }

  return (
        // The styles of this className are the same of the 'ItemOrderContainer.css'
      <div className='item-order-container'>
        <p className='item-order-container__name'>{category}</p>
        {renderItems()}
      </div>


  )
}

export {CurrentOrderCategoryContainer}