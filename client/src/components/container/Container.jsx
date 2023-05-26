import './css/container-style.css'

export default function Container({children, ...props}) {
    return (
        <div {...props} className='container'>
            {children}
        </div>
    )
}