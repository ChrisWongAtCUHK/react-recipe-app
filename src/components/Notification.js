import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Notification.css'
import { selectRecipe } from '../features/slices/recipeSlice'

function Notification() {
  const notificationsInfos = useSelector(selectRecipe).notificationsInfos
  const [isVisible, setIsVisible] = useState(false)
  const [classList, setClassList] = useState('notification-body')
  const [style, setStyle] = useState({ display: 'none' })

  useEffect(() => {
    if (notificationsInfos && notificationsInfos.meal) {
      setClassList(() => 'notification-body')
      setStyle(() => {
        return { display: 'flex' }
      })
      setIsVisible(() => true)

      const timer = () => {
        setTimeout(() => {
          setClassList(() => 'outAnimation')
          setIsVisible(() => false)
        }, 5000)
      }

      timer()

      return clearTimeout(timer)
    }
  }, [isVisible, notificationsInfos])

  return (
    <div className={classList} style={style}>
      <div className='closeBtn'>
        <button>x</button>
      </div>
      <FontAwesomeIcon
        icon={notificationsInfos.isFav ? faHeart : faHeartBroken}
      />
    </div>
  )
}

export default Notification
