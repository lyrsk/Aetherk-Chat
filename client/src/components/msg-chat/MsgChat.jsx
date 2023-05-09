import './css/msg-chat-style.css'
import Header from '../header-chat/HeaderChat'
import User from '../../assets/user.png'
import InputChat from '../input-chat/InputChat'

function MsgChat ({ ...props }) {
  return (
    <div className='msg-chat-container'>
      <Header>
        <div className='chat-contact-profile'>
          <img src={User} alt='' className='chat-contact-picture' />
          <h3 className='chat-contact-name'>Test</h3>
        </div>
      </Header>
      <div className='msg-chat'>
        {props.children}
      </div>
      <InputChat />
    </div>
  )
}

export default MsgChat
