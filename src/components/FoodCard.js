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
      </div>
    </div>
  )
}

export default FoodCard
