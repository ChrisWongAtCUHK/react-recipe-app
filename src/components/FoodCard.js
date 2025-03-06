import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectRecipe,
  loadFavMeals,
  setFavMeals,
  setNotificationsInfos,
  setDetails,
  setModalVisible,
} from '../features/slices/recipeSlice'
import './FoodCard.css'

function FoodCard({ meal }) {
  const favMeals = useSelector(selectRecipe).favMeals
  const dispatch = useDispatch()
  const [isFavorited, setIsFavorited] = useState()

  const isFav = useCallback(() => {
    return favMeals
      ? favMeals.find((recipe) => recipe.idMeal === meal.idMeal)
      : false
  }, [favMeals, meal.idMeal])

  useEffect(() => {
    dispatch(loadFavMeals())
  }, [dispatch])

  useEffect(() => {
    setIsFavorited(() => isFav())
  }, [isFav])

  function saveFavRecipe() {
    dispatch(
      setNotificationsInfos({
        infos: {
          meal: meal,
          isFav: (() => {
            const isFavorite = !!isFav()
            return !isFavorite
          })(),
        },
      })
    )

    if (isFav()) {
      // set off favorite
      const isFavoriteYet = favMeals.filter((fav) => fav.idMeal !== meal.idMeal)
      dispatch(setFavMeals({ favMeals: isFavoriteYet }))
      setIsFavorited(() => isFav())
      return
    }

    const newFavRecipes = [{ ...meal }, ...favMeals]
    dispatch(setFavMeals({ favMeals: newFavRecipes }))
    setIsFavorited(() => isFav())
  }

  function showDetails() {
    const ingredientList = []

    for (let iIn = 0; iIn <= 20; iIn++) {
      if (meal[`strIngredient${iIn}`] && meal[`strMeasure${iIn}`]) {
        ingredientList.push({
          ingredientList: meal[`strIngredient${iIn}`],
          strMeasureList: meal[`strMeasure${iIn}`],
        })
      }
    }
    const details = { ingredientList, ...meal }
    dispatch(setDetails({ details: details }))
    dispatch(setModalVisible({ modalVisible: true }))
  }

  return (
    <div className='containerFood'>
      <div className='card-header'>
        <h3>
          {meal.strMeal.length > 20
            ? `${meal.strMeal.substring(0, 20)} ...`
            : meal.strMeal}
        </h3>
        <button
          className={isFavorited ? 'favButton red' : 'favButton'}
          onClick={saveFavRecipe}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      <div className='imgContainer'>
        <img src={meal.strMealThumb} alt={meal.strMeal} loading='lazy' />
      </div>

      <div className='options'>
        <p className='fullName'>{meal.strMeal}</p>
        <button className='details' onClick={showDetails}>
          See Details
        </button>
        {/* <button className="playVideo" onClick="$emit('showModal', youtubeId)">
        <font-awesome-icon icon="play-circle" />
      </button> */}
      </div>
    </div>
  )
}

export default FoodCard
