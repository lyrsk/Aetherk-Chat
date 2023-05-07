import './css/form-style.css'
import Logo from '../../assets/logo-black.png'

function Form ({ children, linkAccount, account, ...props }) {
  return (
    <form {...props} className='form'>
      <img src={Logo} alt='Aether Logo' />
      {children}
      <div className='form-account'>
        <a href={linkAccount}>
          {account.children}
        </a>
      </div>
    </form>
  )
}

export default Form
