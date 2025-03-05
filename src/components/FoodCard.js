import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './FoodCard.css'

function FoodCard({ meal }) {
  return (
    <div className='containerFood'>
      <div className='card-header'>
        <h3>
          {meal.strMeal.length > 20
            ? `${meal.strMeal.substring(0, 20)} ...`
            : meal.strMeal}
        </h3>
        <button className='favButton'>
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
