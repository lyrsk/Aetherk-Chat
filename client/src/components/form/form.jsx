import Logo from '../logo/Logo'
import './css/form-style.css'

export default function Form({children,  linkAccount, account, ...props}) {
    return (
       <form {...props} className='form'>
        <div className='logo-container-form'>
            <Logo />
        </div>
           {children}
        <div className='form-account'>
            <a href={linkAccount} >
            {account.children}
            </a>
        </div>
       </form>
    )
}