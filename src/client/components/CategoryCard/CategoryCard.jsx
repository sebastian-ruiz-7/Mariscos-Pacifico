//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';
//Import styles
import '@components/CategoryCard/CategoryCard.css'

const CategoryCard = ({description,imageName,onClick}) => {

    const image=useGetImageName(imageName);

    return (
        <div onClick={onClick} className={`category-card ${description==='Cocteles' && 'avoid-overflow-table'}`}>
            <p className='category-card__p'>{description}</p>
            <img className='category-card__img' src={image} alt="" />
        </div>
    )
}

export {CategoryCard}