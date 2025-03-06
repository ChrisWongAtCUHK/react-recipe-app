import './Loader.css'

function Loader({ visible }) {
  return (
    <>
      {visible ? (
        <div className='loader'>
          <div className='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Loader
