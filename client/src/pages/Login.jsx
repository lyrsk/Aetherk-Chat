import { ButtonForm } from '../components/ButtonForm/ButtonForm' // ButtonForm componente
import { Form } from '../components/Form/Form' // Form componente
import { InputForm } from '../components/InputForm/InputForm' // InputForm componente
import { FaUserAlt, FaLock } from 'react-icons/fa' // Iconos

export default function Login () {
  return (
    <Form
      linkAccount='/register'
      account={{ children: '¿No tienes cuenta? ¡Regístrate!' }}
    >
      <InputForm id='username' type='text' placeholder='Usuario' autoComplete='off'>
        <FaUserAlt />
      </InputForm>

      <InputForm id='password' type='password' placeholder='Contraseña' autoComplete='off'>
        <FaLock />
      </InputForm>

      <ButtonForm>Iniciar sesión</ButtonForm>

      <div id='form-forget-password'>
        <a href='/password'>¿Olvidaste tu contraseña?</a>
      </div>
    </Form>
  )
}
