import './css/contacts-style.css'
import Header from '../header-chat/HeaderChat'
import Logo from '../../assets/logo-white.png'
import Profile from '../../assets/picture.jpg'
import Searcher from '../searcher/Searcher'

function Contacts ({ ...props }) {
  return (
    <div className='contacts-container'>
      <Header>
        <div>
          <img src={Logo} alt='' id='logo-header' />
        </div>
        <div>
          <img src={Profile} alt='' id='profile' />
        </div>
      </Header>
      <Searcher />
      <div className='contacts'>
        {props.children}
      </div>
    </div>
  )
}

export default Contacts
