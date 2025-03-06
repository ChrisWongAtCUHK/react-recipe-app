import { createSlice } from '@reduxjs/toolkit'

const RECIPES_APP = '@RecipesApp'

const initialState = {
  isLoading: false,
  notificationsInfos: {},
  favMeals: [],
}

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload.isLoading
      return state
    },
    setNotificationsInfos: (state, actions) => {
      state.notificationsInfos = { ...actions.payload.infos }
      return state
    },
    loadFavMeals: (state) => {
      state.favMeals = JSON.parse(localStorage.getItem(RECIPES_APP)) || []
      return state
    },
    setFavMeals: (state, actions) => {
      state.favMeals = [...actions.payload.favMeals]
      localStorage.setItem(RECIPES_APP, JSON.stringify(state.favMeals)) 
      return state
    },
  },
})

export const selectRecipe = (state) => state.recipe
export const { setIsLoading, setNotificationsInfos, loadFavMeals, setFavMeals } = recipeSlice.actions
export default recipeSlice.reducer
