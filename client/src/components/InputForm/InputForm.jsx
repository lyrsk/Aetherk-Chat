import './input-style.css'

export function InputForm ({ children, ...props }) {
  return (
    <div>
      <label htmlFor={props.id}>
        {children}
      </label>
      <input {...props} required />
    </div>
  )
}
