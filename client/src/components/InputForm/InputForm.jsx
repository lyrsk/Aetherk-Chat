import './input-style.css'

export function InputForm ({ children, ...props }) {
  return (
    <label>
      {children}
      <input {...props} required />
    </label>
  )
}
