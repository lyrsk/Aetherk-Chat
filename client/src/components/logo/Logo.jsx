import LogoJPG from '../../assets/logo-black.png'
import './css/logo-style.css'

function Logo () {
  return (
    <>
      <div id='logo-container'>
        <img src={LogoJPG} alt='Logo' id='logo' />
      </div>
    </>
  )
}

export default Logo
