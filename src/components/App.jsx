import React from 'react'
import RecipeItem from './recipe-item/RecipeItem'
import Header from './header/Header'
import User from './user/User'
import { useGetRecipesQuery } from '../store/api/api'

const App = () => {
  const { isLoading, data } = useGetRecipesQuery()

  return (
    <section>
      <Header />
      {/* <User /> */}
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