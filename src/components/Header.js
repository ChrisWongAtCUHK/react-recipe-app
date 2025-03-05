import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className='main_header' id='main-header'>
      <nav className='headerMain' id='mobile-nav'>
        <ul data-id='menuList'>
          <li data-id='menuList' className='menuLink'>
            <Link to='/' className={location.pathname === '/' ? 'activeLink' : ''}>
              <FontAwesomeIcon icon={faHome} />
              &nbsp;Home
            </Link>
          </li>
          <li data-id='menuList' className='menuLink'>
            <Link to='/favorites' className={location.pathname === '/favorites' ? 'activeLink' : ''}>
              <FontAwesomeIcon icon={faHeart} />
              &nbsp;Your Favorite Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
