import ContainerChat from '../components/ContainerChat/ContainerChat'
import Logo from '../assets/logo-white.png'

export default function Chat () {
  return (
    <>
      <div className='logo-container'>
        <img src={Logo} alt='Aetherk Logo' className='Logo' />
      </div>
      <ContainerChat />
    </>
  )
}
