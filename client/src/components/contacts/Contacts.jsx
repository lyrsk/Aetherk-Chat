import './css/contacts-style.css'
import Header from '../header-contacts/HeaderContacts'
import Logo from '../../assets/logo-white.png'
import Profile from '../../assets/picture.jpg'

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
      <div className='contacts'>
        {props.children}
      </div>
    </div>
  )
}

export default Contacts
