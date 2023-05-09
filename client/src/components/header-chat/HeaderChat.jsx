import './css/header-style.css'

function Header ({ ...props }) {
  return (
    <>
      <div className='header-container'>
        {props.children}
      </div>
    </>
  )
}

export default Header
