import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectRecipe,
  loadFavMeals,
  setFavMeals,
} from '../features/slices/recipeSlice'
import './FoodCard.css'

function FoodCard({ meal }) {
  const favMeals = useSelector(selectRecipe).favMeals
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavMeals())
  }, [dispatch])

  function saveFavRecipe() {
    if (isFav()) {
      // set off favorite
      const isFavoriteYet = favMeals.filter((fav) => fav.idMeal !== meal.idMeal)
      dispatch(setFavMeals({ favMeals: isFavoriteYet }))

      return
    }

    const newFavRecipes = [{ ...meal }, ...favMeals]
    dispatch(setFavMeals({ favMeals: newFavRecipes }))
  }

  function isFav() {
    console.log(favMeals)
    return favMeals
      ? favMeals.find((recipe) => recipe.idMeal === meal.idMeal)
      : false
  }

  return (
    <div className='containerFood'>
      <div className='card-header'>
        <h3>
          {meal.strMeal.length > 20
            ? `${meal.strMeal.substring(0, 20)} ...`
            : meal.strMeal}
        </h3>
        <button className='favButton' onClick={saveFavRecipe}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      <div className='imgContainer'>
        <img src={meal.strMealThumb} alt={meal.strMeal} loading='lazy' />
      </div>
    </div>
  )
}

export default FoodCard
