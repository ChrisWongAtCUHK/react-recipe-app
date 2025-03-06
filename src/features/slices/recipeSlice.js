import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload.isLoading
      return state
    }
  }
})

export const selectRecipe = (state) => state.recipe
export const { setIsLoading } = recipeSlice.actions
export default recipeSlice.reducer