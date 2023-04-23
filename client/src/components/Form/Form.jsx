import './form-style.css'

export function Form ({ children, linkAccount, account }) {
  return (
    <form>
      {children}
      <div>
        <a href={linkAccount}>
          {account.children}
        </a>
      </div>
    </form>
  )
}
