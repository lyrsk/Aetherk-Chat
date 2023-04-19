import { ButtonForm } from '../components/ButtonForm/ButtonForm' // ButtonForm componente
import { Form } from '../components/Form/Form' // Form componente
import { InputForm } from '../components/InputForm/InputForm' // InputForm componente
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai' // Iconos
import { useState, useEffect } from 'react' // Hooks

export default function Register () {
  const [values, setValues] = useState({
    user: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Formulario enviado')
  }
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  return (
    <Form
      linkAccount='/login'
      account={{ children: '¿Ya tienes cuenta? ¡Inicia sesión!' }}
      onSubmit={(event) => handleSubmit(event)}
    >
      <h1>Logo</h1>

      <InputForm
        id='user' name='user' type='text' placeholder='Ingrese su usuario' autoComplete='off'
        onChange={(e) => handleChange(e)}
      >
        <AiOutlineUser />
      </InputForm>

      <InputForm
        id='email' name='email' type='email' placeholder='Ingrese su correo' autoComplete='off'
        onChange={(e) => handleChange(e)}
      >
        <AiOutlineMail />
      </InputForm>

      <InputForm
        id='password' name='password' type='password' placeholder='Ingrese su contraseña'
        onChange={(e) => handleChange(e)}
      >
        <AiOutlineLock />
      </InputForm>

      <InputForm
        id='password' name='confirmPassword' type='password' placeholder='Confirme su contraseña'
        onChange={(e) => handleChange(e)}
      >
        <AiOutlineLock />
      </InputForm>

      <ButtonForm type='submit'>Crear cuenta</ButtonForm>
    </Form>
  )
}
