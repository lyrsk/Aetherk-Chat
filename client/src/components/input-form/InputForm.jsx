import './css/input-style.css'

function InputForm ({ children, ...props }) {
  return (
    <label className='label-form'>
      {children}
      <input {...props} className='input-form' />
    </label>
  )
}

export default InputForm
