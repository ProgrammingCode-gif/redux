import React from 'react'
import RecipeItem from './recipe-item/RecipeItem'
import Header from './header/Header'

const App = () => {

  return (
    <section>
      <Header />
      <div>
        <RecipeItem recipe={{
          id: 1,
          name: 'Лазанья'
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Паста'
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Каша'
        }} />
      </div>
    </section>
  )
}

export default App