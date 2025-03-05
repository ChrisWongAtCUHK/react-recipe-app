import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faHeartBroken,
  faHouse,
  faLink
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeartBroken} />
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faLink} />
    </>
  )
}

export default App
