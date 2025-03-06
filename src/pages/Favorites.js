import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectRecipe,
  loadFavMeals,
} from '../features/slices/recipeSlice'
import FoodCard from '../components/FoodCard'
import './Favorites.css'

function Favorites() {
  const recipe = useSelector(selectRecipe)
  const dispatch = useDispatch()
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    dispatch(loadFavMeals())
  }, [dispatch])
  function handleConfirmation() {
    setConfirm(() => true)
  }
  return (
    <>
      <main>
        <div className='fav-container'>
          {confirm ? (
            <div className='confirm'>
              <p>Tem certeza que desja limpar os favoritos?</p>
              <button
                type='button'
                onClick={() => handleConfirmation('confirm')}
              >
                Confirmar
              </button>
              <button
                type='button'
                onClick={() => handleConfirmation('cancel')}
              >
                Cancelar
              </button>
            </div>
          ) : null}
          <h5 className='fav-title'>Your Favorite Recipes</h5>
          <button className='fav-btn-clear' onClick={handleConfirmation}>
            <FontAwesomeIcon icon={faHeartBroken} /> Limpar Favoritos
          </button>
        </div>
      </main>
      <div className='favContainer'>
        <h1 className='title-recipe'>
          {!recipe.favMeals.length ? 'Nothing here 😕' : ''}
        </h1>
        <ul className='favList'>
          {recipe.favMeals.map((meal) => {
            return (
              <li key={meal.idMeal}>
                <FoodCard meal={meal} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Favorites
