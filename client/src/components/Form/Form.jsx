import './css/form-style.css'
import Logo from '../../assets/logo-black.png'

export function Form ({ children, linkAccount, account, ...props }) {
  return (
    <form {...props}>
      <img src={Logo} alt='Aether Logo' />
      {children}
      <div>
        <a href={linkAccount}>
          {account.children}
        </a>
      </div>
    </form>
  )
}
