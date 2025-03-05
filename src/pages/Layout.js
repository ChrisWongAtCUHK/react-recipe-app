import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
function Layout() {
  return (
    <>
    <div className="container">
      <Header />
    </div>
    <Outlet />
    </>
  )
}

export default Layout
