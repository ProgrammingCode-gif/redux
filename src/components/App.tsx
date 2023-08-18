import React from 'react'
import RecipeItem from './recipe-item/RecipeItem'
import Header from './header/Header'
import User from './user/User'
import { useGetRecipesQuery } from '../store/api/api'
import CreateRecipe from './create-recipe/CreateRecipe'

// const userId = null

const App = () => {
  const { isLoading, data } = useGetRecipesQuery(null)
    // undefined, {
    // skip: !!userId
  // })

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
      <div>
        {
          isLoading ? <div>Loading</div> :
            data ? data.map(recipe => 
              <RecipeItem key={recipe.id} recipe={recipe} />
            ) : <div>Not found</div>
        }
      </div>
    </section>
  )
}

export default App