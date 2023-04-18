import { ButtonForm } from '../components/ButtonForm/ButtonForm' // ButtonForm componente
import { Form } from '../components/Form/Form' // Form componente
import { InputForm } from '../components/InputForm/InputForm' // InputForm componente
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai' // Iconos

export default function Register () {
  return (
    <Form
      linkAccount='/login'
      account={{ children: '¿Ya tienes cuenta? ¡Inicia sesión!' }}
    >
      <h1>Logo</h1>

      <InputForm id='username' type='text' maxLength={20} placeholder='Ingrese su usuario'>
        <AiOutlineUser />
      </InputForm>

      <InputForm id='email' type='email' placeholder='Ingrese su correo'>
        <AiOutlineMail />
      </InputForm>

      <InputForm id='password' type='password' maxLength={30} placeholder='Ingrese su contraseña'>
        <AiOutlineLock />
      </InputForm>

      <InputForm id='password' type='password' maxLength={30} placeholder='Confirme su contraseña'>
        <AiOutlineLock />
      </InputForm>

      <ButtonForm>Registrarse</ButtonForm>
    </Form>
  )
}
