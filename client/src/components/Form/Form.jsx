import './form-style.css'

export function Form ({ children, linkAccount, account }) {
  return (
    <form>
      {children}

      <a href={linkAccount}>
        {account.children}
      </a>

    </form>
  )
}
