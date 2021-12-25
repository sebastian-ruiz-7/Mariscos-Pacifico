//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';
//Import styles
import '@components/CategoryCard/CategoryCard.css'

const CategoryCard = ({description,imageName}) => {

    const image=useGetImageName(imageName);

    return (
        <div className='category-card'>
            <p className='category-card__p'>{description}</p>
            <img className='category-card__img' src={image} alt="" />
        </div>
    )
}

export {CategoryCard}