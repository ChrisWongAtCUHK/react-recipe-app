import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecipe } from '../features/slices/recipeSlice'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Notification from '../components/Notification'

function Layout() {
  const recipe = useSelector(selectRecipe)

  return (
    <>
    <Notification />
    <div className="container">
      <Header />
      <Outlet />
    </div>
    <Loader visible={recipe.isLoading} />
    </>
  )
}

export default Layout
