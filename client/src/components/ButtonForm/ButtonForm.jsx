import './button-style.css'

export function ButtonForm ({ children, ...props }) {
  return (
    <div>
      <button {...props}>
        {children}
      </button>
    </div>
  )
}
