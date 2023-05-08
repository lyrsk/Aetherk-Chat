import './css/msg-chat-style.css'
import Header from '../header-contacts/HeaderContacts'
import User from '../../assets/user.png'

function MsgChat ({ ...props }) {
  return (
    <div className='msg-chat-container'>
      <Header>
        <div>
          <img src={User} alt='' className='contact-profile' />
        </div>
      </Header>
      <div className='msg-chat'>
        {props.children}
      </div>
    </div>
  )
}

export default MsgChat
