import { useState } from 'react'
import InputSearch from '../components/InputSearch'
import axios from 'axios'
import FoodCard from '../components/FoodCard'

function Home() {
  const [meals, setMeals] = useState(null)
  const [info, setInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function getSearchValues(search) {
    if (search.length < 2) {
      return
    }

    setIsLoading(() => true)

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        console.log(search)
        console.log(response.data)
        if (response.data.meals) {
          setMeals(() => response.data.meals)
          setInfo(() => '')
        } else {
          setMeals(() => null)
          setInfo(() => 'Could not find recipe with this name 😔')
        }
        setIsLoading(() => false)
      })
      .catch((err) => setInfo(() => err))
  }
  return (
    <>
      <main>
        <h5>Search Recipes from Around the World</h5>
      </main>
      <InputSearch getSearchValues={getSearchValues} />
      <ul className='recipesContainer'>
        {/* <Loader :visible="isLoading" /> */}
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
