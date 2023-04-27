import { ButtonForm } from '../components/ButtonForm/ButtonForm' // ButtonForm componente
import { Form } from '../components/Form/Form' // Form componente
import { InputForm } from '../components/InputForm/InputForm' // InputForm componente
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai' // Iconos
import { useState, useEffect } from 'react' // Hooks
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Register () {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light'
  }
  const [values, setValues] = useState({
    user: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden', toastOptions)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleValidation()
  }

  return (
    <>
      <Form
        // submit={handleSubmit}
        action=''
        onSubmit={handleSubmit}
        linkAccount='/login'
        account={{ children: 'o ¡Inicia sesión!' }}
      >
        <InputForm
          id='user'
          name='user'
          type='text'
          placeholder='Ingrese su usuario'
          onChange={(e) => handleChange(e)}
        >
          <AiOutlineUser />
        </InputForm>

        <InputForm
          id='email'
          name='email'
          type='email'
          placeholder='Ingrese su correo'
          onChange={(e) => handleChange(e)}
        >
          <AiOutlineMail />
        </InputForm>

        <InputForm
          id='password'
          name='password'
          type='password'
          placeholder='Ingrese su contraseña'
          onChange={(e) => handleChange(e)}
        >
          <AiOutlineLock />
        </InputForm>

        <InputForm
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          placeholder='Confirme su contraseña'
          onChange={(e) => handleChange(e)}
        >
          <AiOutlineLock />
        </InputForm>

        <ButtonForm type='submit'>Crear cuenta</ButtonForm>
      </Form>
      <ToastContainer />
    </>
  )
}
