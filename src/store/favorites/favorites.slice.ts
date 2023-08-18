import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState:IRecipe[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
            const isExist = state.some(r => r.id === recipe.id)

            if(isExist) {
                const index = state.findIndex(r => r.id === recipe.id)
                state.splice(index, 1)
            } else {
                state.push(recipe)

            }

        }
    }
})

export const {actions, reducer} = favoritesSlice