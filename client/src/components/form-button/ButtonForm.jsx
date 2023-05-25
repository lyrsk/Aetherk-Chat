import './css/button-style.css'

export default function ButtonForm({children, ...props}) {
    return (
        <button {...props} className='button-form'>
            {children}
        </button>
    )
}