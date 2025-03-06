import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectRecipe, setModalVisible } from '../features/slices/recipeSlice'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Notification from '../components/Notification'
import Modal from '../components/Modal'

function Layout() {
  const recipe = useSelector(selectRecipe)
  const dispatch = useDispatch()

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      dispatch(setModalVisible({ modalVisible: false }))
    }
  }

  return (
    <div tabIndex='0' onKeyDown={handleKeyDown}>
      <Notification />
      <Modal />
      <div className='container'>
        <Header />
        <Outlet />
      </div>
      <Loader visible={recipe.isLoading} />
    </div>
  )
}

export default Layout
