import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'
import { FaUserAlt, FaLock } from 'react-icons/fa'

export default function Login () {
  return (
    <Form
      linkAccount='/register'
      account={{ children: '¿No tienes cuenta? ¡Regístrate!' }}
    >
      <h1>¡Bienvenido!</h1>
      <label htmlFor=''>
        <FaUserAlt />
        <InputForm id='username' type='text' placeholder='Usuario' />
      </label>
      <label htmlFor=''>
        <FaLock />
        <InputForm id='password' type='password' placeholder='Contraseña' />
      </label>
      <ButtonForm>Iniciar sesión</ButtonForm>
      <div id='form-forget-password'>
        <a href='/password' id='test'>¿Olvidaste tu contraseña?</a>
      </div>
    </Form>
  )
}
