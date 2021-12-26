//Import dependencies
import React from 'react'
//Import components
import { CategoryCard } from '@components/CategoryCard/CategoryCard'

const CategoryContainer = () => {
    return (
        <main>
            <CategoryCard description='Cocteles'    imageName='coctel'/>
            <CategoryCard description='Tostadas'    imageName='tostadas'/>
            <CategoryCard description='Tacos'       imageName='taco'/>
            <CategoryCard description='Filete'      imageName='filete'/>
            <CategoryCard description='Bebidas'     imageName='bebidas'/>
            <CategoryCard description='Camarones'   imageName='camaron'/>
            <CategoryCard description='Órdenes'     imageName='ordenes'/>
            <CategoryCard description='Sopas'       imageName='sopas'/>
            <CategoryCard description='Postres'     imageName='postres'/>
            <CategoryCard description='Pescados'    imageName='pescado'/>
            <CategoryCard description='Pulpo'       imageName='pulpo'/>
        </main>
    )
}

export {CategoryContainer}
