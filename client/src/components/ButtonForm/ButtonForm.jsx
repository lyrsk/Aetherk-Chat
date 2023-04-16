import './button-style.css'

export function ButtonForm ({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
