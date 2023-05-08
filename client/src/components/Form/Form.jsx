import './css/form-style.css'
import Logo from '../logo/Logo'

function Form ({ children, linkAccount, account, ...props }) {
  return (
    <form {...props} className='form'>
      <Logo />
      {children}
      <div className='form-account'>
        <a href={linkAccount} className='form-account'>
          {account.children}
        </a>
      </div>
    </form>
  )
}

export default Form
