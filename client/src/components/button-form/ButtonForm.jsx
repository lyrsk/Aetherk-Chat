import './css/button-style.css'

function ButtonForm ({ children, ...props }) {
  return (
    <div className='button-container'>
      <button {...props}>
        {children}
      </button>
    </div>
  )
}

export default ButtonForm
