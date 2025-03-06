import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRecipe } from '../features/slices/recipeSlice'
import './Notification.css'

function Notification() {
  const notificationsInfos = useSelector(selectRecipe).notificationsInfos
  const [classList, setClassList] = useState('notification-body')
  const [style, setStyle] = useState({ display: 'none' })

  function closeNotification() {
    setClassList(() => 'outAnimation')
  }
  useEffect(() => {
    if (notificationsInfos && notificationsInfos.meal) {
      setClassList(() => 'notification-body')
      setStyle(() => {
        return { display: 'flex' }
      })

      const timer = () => {
        setTimeout(() => {
          closeNotification()
        }, 5000)
      }

      timer()

      return clearTimeout(timer)
    }
  }, [notificationsInfos])

  return (
    <div className={classList} style={style}>
      <div className='closeBtn'>
        <button onClick={closeNotification}>x</button>
      </div>
      <FontAwesomeIcon
        icon={notificationsInfos.isFav ? faHeart : faHeartBroken}
      />
      <div>
        <u> {notificationsInfos.meal ? notificationsInfos.meal.strMeal : ''}</u>{' '}
        has been{' '}
        {notificationsInfos.isFav ? 'added to' : 'removed from'} favorites!
      </div>
    </div>
  )
}

export default Notification
