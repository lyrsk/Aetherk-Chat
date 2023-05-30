/* eslint-disable react/prop-types */
import LogoB from '../logoB/LogoB'
import './css/form-style.css'

export default function Form({children, ...props}) {
    return (
       <form {...props} className='form'>
        <div className='logo-container-form'>
            <LogoB />
        </div>
           {children}
       </form>
    )
}