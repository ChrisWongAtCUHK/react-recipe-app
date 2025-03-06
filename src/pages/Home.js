import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '../features/slices/recipeSlice'
import InputSearch from '../components/InputSearch'
import FoodCard from '../components/FoodCard'

function Home() {
  const dispatch = useDispatch()
  const [meals, setMeals] = useState(null)
  const [info, setInfo] = useState('')

  function getSearchValues(search) {
    if (search.length < 2) {
      return
    }

    dispatch(setIsLoading({ isLoading: true }))

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        if (response.data.meals) {
          setMeals(() => response.data.meals)
          setInfo(() => '')
        } else {
          setMeals(() => null)
          setInfo(() => 'Could not find recipe with this name 😔')
        }
        dispatch(setIsLoading({ isLoading: false }))
      })
      .catch((err) => setInfo(() => err))
  }
  return (
    <>
      <main>
        <h5>Search Recipes from Around the World</h5>
      </main>
      <InputSearch getSearchValues={getSearchValues} />
      {info ? <div className='info'>{info}</div> : null}
      <ul className='recipesContainer'>
        {meals
          ? meals.map((meal) => (
              <li key={`${meal.idMeal}`}>
                <FoodCard meal={meal} />
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

export default Home
