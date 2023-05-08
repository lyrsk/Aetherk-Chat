import './css/container-style.css'

function ChatContainer ({ children }) {
  return (
    <div className='chat-container'>
      {children}
    </div>
  )
}

export default ChatContainer
