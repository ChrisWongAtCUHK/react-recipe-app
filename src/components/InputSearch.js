import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SvgAnimatedCooking from './SvgAnimatedCooking'
import './InputSearch.css'

function InputSearch() {
  const [focused, setFocused] = useState(false)
  return (
    <div className={['search', 'inputSearchMain', focused ? 'focused' : ''].join(' ')}>
      <SvgAnimatedCooking />
      <FontAwesomeIcon
        icon={faSearch}
        className={focused ? 'focusedIcon' : ''}
      />
      <input
        type='search'
        placeholder='Search a meal'
        onFocus={() => setFocused(() => true)}
        onBlur={() => setFocused(() => false)}
      />
    </div>
  )
}

export default InputSearch
