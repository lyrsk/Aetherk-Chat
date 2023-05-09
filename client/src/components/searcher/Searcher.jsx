import './css/searcher-style.css'
import { AiOutlineSearch } from 'react-icons/ai'

function Searcher () {
  return (
    <label className='searcher'>
      <AiOutlineSearch className='icon-chat' />
      <input type='text' placeholder='Search...' />
    </label>
  )
}

export default Searcher
