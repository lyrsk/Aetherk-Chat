import './css/contacts-style.css'
import Header from '../header/Header'
import Searcher from '../searcher/Searcher'
import LogoW from '../logoW/LogoW'

export default function Contacts() {
    return (
        <div className='contacts-container'>
            <Header>
                <div className='logo-container-header'>
                    <LogoW />
                </div>
            </Header>
            {/* <Searcher /> */}
        </div>
    )
}