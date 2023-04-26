import './form-style.css'
import Logo from '../../assets/logo-black.png'

export function Form ({ children, linkAccount, account }) {
  return (
    <form>
      <img src={Logo} alt='' />
      {children}
      <div>
        <a href={linkAccount}>
          {account.children}
        </a>
      </div>
    </form>
  )
}
