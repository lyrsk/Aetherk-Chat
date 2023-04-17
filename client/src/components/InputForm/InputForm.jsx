import './input-style.css'

export function InputForm ({ children, ...props }) {
  return (
    <>
      <input {...props} required />
    </>
  )
}
