import './css/input-style.css'

function InputForm ({ children, ...props }) {
  return (
    <label className='label-form'>
      {children}
      <input {...props} />
    </label>
  )
}

export default InputForm
