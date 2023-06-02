import './css/chat-style.css'
import Header from '../header/Header'
import Msg from '../chat-msg/Msg'
import ChatInput from '../chat-input/ChatInput'

export default function ChatContainer() {
    return (
        <div className='chat-container'>
            <Header />
            <Msg />
            <ChatInput 
                type='text'
                placeholder='Escriba aquí su mensaje...'
            />
        </div>
    )
}