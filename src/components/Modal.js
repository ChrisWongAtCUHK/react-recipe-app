import { useSelector, useDispatch } from 'react-redux'
import {
  selectRecipe,
  setModalVisible,
  setSelectMeal,
} from '../features/slices/recipeSlice'

function Modal() {
  const recipe = useSelector(selectRecipe)
  const dispatch = useDispatch()

  function closeModal() {
    dispatch(setModalVisible({ modalVisible: false }))
    dispatch(setSelectMeal({ selectMeal: '' }))
  }

  function handleDownloadRecipe() {
    const {
      strMeal,
      ingredientList,
      strYoutube,
      strSource,
      strMealThumb,
      strInstructions,
    } = recipe.details

    const recipeDownload = `
    ${strMeal}  
    ____________________________________________________

    ${ingredientList.map((i) => {
      if (!i) return ''
      return `- ${i.ingredientList} - ${i.strMeasureList}`
    })}
   
   ____________________________________________________

   ${strInstructions}

   ____________________________________________________

   picture : ${strMealThumb} 

   Youtube recipe : ${strYoutube}

   fonte  ${strSource}
    `

    try {
      const blob = new Blob([recipeDownload], { type: 'text/csv' })
      const elem = window.document.createElement('a')
      elem.href = window.URL.createObjectURL(blob)
      elem.download = `${strMeal}.txt`
      document.body.appendChild(elem)
      elem.click()
      document.body.removeChild(elem)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className={['modal', recipe.modalVisible ? '' : 'modalVisible'].join(' ')}
      onClick={closeModal}
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
          <p class='source'>
            <a
              href={recipe.details.strSource}
              target='_blank'
              rel='noopener noreferrer'
              className='details_src'
            >
              Source
            </a>
          </p>
        </div>
      ) : (
        <iframe
          id='ytplayer'
          title={recipe.selectMeal}
          type='text/html'
          width='640'
          height='360'
          src={`https://www.youtube.com/embed/${recipe.selectMeal}`}
        ></iframe>
      )}
    </div>
  )
}

export default Modal
