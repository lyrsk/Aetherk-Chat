import './css/searcher-style.css'
import {FaSearch} from 'react-icons/fa'

export default function Searcher({...props}) {
    return (
        <label className='searcher-container'> 
            <input {...props} className='searcher-input' />
            <button type='submit' className='searcher-icon-container'>
                <FaSearch className='searcher-icon' />
            </button>
        </label>
    )
}