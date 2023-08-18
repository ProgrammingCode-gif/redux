import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        image: ''
    })

    const [ createRecipe ] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(recipe);
        createRecipe(recipe).then(() => setRecipe({name: '', image: ''}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Create new recipe:</p>
                <label>
                    <input
                        type="text"
                        placeholder='Name'
                        value={recipe.name}
                        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder='Image'
                        value={recipe.image}
                        onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
                    />
                </label>
                <button type='submit'>Create</button>

            </form>
        </div>
    )
}

export default CreateRecipe