//Import dependencies
import React from 'react'
//Import hooks
import { useGetProductPrices } from '@hooks/useGetProductPrices';
//Import components
import { ProductCard } from '@components/ProductCard/ProductCard';
//Import styles
import './ChangePriceContainer.css'

export const ChangePriceContainer = () => {

    const [selectedCategory,setSelectedCategory]=React.useState('Categoría');
    const [products,setProducts]=React.useState([])

    React.useEffect(()=>{
        async function fetchData() {
            const list=await useGetProductPrices(selectedCategory)
            setProducts(list.body)
        }

        fetchData()
    },[selectedCategory])
  return (
      <>
        <select className='change-price-list' onChange={event=>setSelectedCategory(event.target.value)} name="" id="">
            <option value="categoria">Escoge una categoría</option>
            <option value="cocteles">Cocteles</option>
            <option value="tostadas">Tostadas</option>
            <option value="tacos">Tacos</option>
            <option value="filetes">Filetes</option>
            <option value="bebidas">Bebidas</option>
            <option value="camarones">Camarones</option>
            <option value="ordenes">Órdenes</option>
            <option value="botanas">Botanas</option>
            <option value="sopas">Sopas</option>
            <option value="postres">Postres</option>
            <option value="pescados">Pescados</option>
            <option value="pulpos">Pulpos</option>
        </select>

        {selectedCategory!=='categoria' && products.map(product=>
            
            <ProductCard key={`product ${product.name}`} product={product} />
        
        )}
    
      </>
  )
}