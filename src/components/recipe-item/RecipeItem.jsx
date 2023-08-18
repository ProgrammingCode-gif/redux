import React from 'react'
import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'

const RecipeItem = ({recipe}) => {
    const favorites = useFavorites()
    const {toggleFavorites} = useActions()

    const isExist = favorites.some(r => r.id === recipe.id)

    return (
        <div className={styles.item}>
            <img src={recipe.image} alt="" />
            <h3 >{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}
            >
                {isExist ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    )
}

export default RecipeItem