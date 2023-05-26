import './css/header-style.css'

export default function Header({children}) {
    return (
        <div className='header-container'>
            {children}
        </div>
    )
}