import './css/input-chat-style.css'
import { IoMdSend } from 'react-icons/io'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import ButtonChat from '../button-chat/ButtonChat'

function InputChat ({ ...props }) {
  return (
    <label className='label-chat'>
      <ButtonChat>
        <MdOutlineEmojiEmotions className='icon-chat' />
      </ButtonChat>
      <input {...props} className='input-chat' placeholder='Escribe un mensaje aquí' />
      <ButtonChat>
        <IoMdSend className='icon-chat' />
      </ButtonChat>
    </label>
  )
}

export default InputChat
