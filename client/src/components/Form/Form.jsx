import './form-style.css'

export function Form ({ children, account, link, acct, linkPass, pass }) {
  return (
    <form>
      {children}
      {/* <div>
        <a href={linkPass}>
          {pass.children}
        </a>
        <a href={link}>
          {acct.children}
        </a>
      </div> */}

    </form>
  )
}
