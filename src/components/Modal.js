import { useSelector, useDispatch } from 'react-redux'
import { selectRecipe, setModalVisible } from '../features/slices/recipeSlice'

function Modal() {
  const recipe = useSelector(selectRecipe)
  const dispatch = useDispatch()

  function handleCloseModal() {}
  function closeModal() {
    dispatch(setModalVisible({ modalVisible: false }))
  }
  function handleDownloadRecipe() {}

  return (
    <div
      className={['modal', recipe.modalVisible ? '' : 'modalVisible'].join(' ')}
      onClick={handleCloseModal}
    >
      {recipe.details ? (
        <div className='details_container'>
          <div className='header-modal'>
            <h3 className='details_title'>
              🍔 How to Make | {recipe.details.strMeal}
            </h3>
            <button onClick={closeModal} className='closeModal'>
              X
            </button>
          </div>

          <div className='strInstructions'>
            <img
              src={recipe.details.strMealThumb}
              className='strMealThumb'
              alt={recipe.details.strMealThumb}
            />
            <div className='ingredients'>
              <h4>ingredients</h4>
              <ul>
                {recipe.details.ingredientList.map((ingredient) => {
                  return (
                    <li key={ingredient.ingredientList}>
                      {ingredient.ingredientList} - {ingredient.strMeasureList}
                    </li>
                  )
                })}
              </ul>
            </div>
            <p className='strInstructions_details'>
              {recipe.details.strInstructions}
            </p>
            <div className='downloadContainer'>
              <button
                type='button'
                className='download'
                onClick={handleDownloadRecipe}
              >
                Download Recipe
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
