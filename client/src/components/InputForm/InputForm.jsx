import './css/input-style.css'

function InputForm ({ children, ...props }) {
  return (
    <label>
      {children}
      <input {...props} />
    </label>
  )
}

export default InputForm
