import { ButtonForm } from '../components/ButtonForm/ButtonForm' // ButtonForm componente
import { Form } from '../components/Form/Form' // Form componente
import { InputForm } from '../components/InputForm/InputForm' // InputForm componente
import { AiOutlineMail } from 'react-icons/ai' // Iconos

export default function Password () {
  return (
    <Form
      linkAccount='/login'
      account={{ children: 'o ¡Inicia sesión!' }}
    >
      <div>
        <h1>Logo</h1>
      </div>
      <InputForm id='email' type='email' placeholder='Ingrese su correo'>
        <AiOutlineMail />
      </InputForm>
      <ButtonForm>Cambiar contraseña</ButtonForm>
    </Form>
  )
}
