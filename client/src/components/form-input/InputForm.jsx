import './css/input-style.css'

export default function InputForm({children, ...props}) {
    return (
        <label className='label-form'>
        {children}
        <input {...props}/>
      </label>
    )
}

