import './css/button-chat-style.css'

function ButtonChat ({ children, ...props }) {
  return (
    <button {...props} className='button-chat'>
      {children}
    </button>
  )
}

export default ButtonChat
