import './css/chat-input-style.css'
import {IoMdSend} from 'react-icons/io'

export default function ChatInput({...props}) {
    return (
        <label className='chat-input-container'>
            <input {...props} className='chat-input'/>
            <IoMdSend className='chat-input-icon'/>
        </label>
    )
}