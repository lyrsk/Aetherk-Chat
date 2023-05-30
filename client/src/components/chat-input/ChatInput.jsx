import './css/chat-input-style.css'
import {IoMdSend} from 'react-icons/io'

export default function ChatInput({...props}) {
    return (
        <form className='chat-input-container'>
            <input {...props} className='chat-input'/>
            <button type='submit' className='searcher-icon-container'>
                <IoMdSend className='chat-input-icon'/>
            </button>
        </form>
    )
}