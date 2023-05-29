import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import { Formik, ErrorMessage } from 'formik'
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { registerRoute,
   checkUsernameRoute 
} from '../utils/APIRoutes'

function Register() {
  const navigate = useNavigate()
  const [ErrorMessage, setErrorMessage] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [isUsernameChecking, setIsUsernameChecking] = useState(false)


  const checkUsernameAvailability = async (username) => {
    try {
      setIsUsernameChecking(true);
      const { data } = await axios.post(checkUsernameRoute, { username })
      if (data.status === false) {
        setUsernameError(data.message)
      } else {
        setUsernameError('')
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error)
    } finally {
      setIsUsernameChecking(false)
    }
  };
  
  
  
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validate={(values) => {
        const errors = {}

        if (!values.username) {
          errors.username = 'Debe ingresar un usuario'
        } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![-';%])$/i.test(values.username)) {
          errors.username = 'El usuario debe tener entre 4 y 32 caracteres y no puede contener espacios'
        }

        if (!values.email) {
          errors.email = 'Debe ingresar un correo electrónico'
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
        ) {
          errors.email =
            'Correo eléctronico inválido'
        }

        if (!values.password) {
          errors.password = 'Ingresa una contraseña'
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(values.password)
        ) {
          errors.password =
            'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = 'Ingrese una contraseña'
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(values.confirmPassword)
        ) {
          errors.confirmPassword =
            'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Las contraseñas no coinciden'
        }

        return errors
      }}

      onSubmit={async (values, { resetForm }) => {
        resetForm()
        console.log('Enviando formulario', registerRoute)
        const { username, email, password } = values
        try {
          const { data } = await axios.post(registerRoute, { username, email, password })
          // if (data.status === false) { // Entra cuando el usuario o email ya existen
          //   console.log(data.message)
          //   setErrorMessage(data.message)
          // }
          if (data.status === true) { // Entra cuando el usuario se ha registrado correctamente
            localStorage.setItem('Aetherk', JSON.stringify(data.user))
            navigate('/login')
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error)
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur
      }) => (
        <Form
          action=''
          onSubmit={handleSubmit}
          linkAccount='/login'
          account={{ children: 'o ¡Inicia sesión!' }}
        >
          <InputForm
            id='username'
            name='username'
            className={(touched.username && errors.username) || usernameError ? 'error' : ''}
            type='text'
            placeholder='Ingrese un usuario'
            value={values.username}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              checkUsernameAvailability(values.username);
            }}
          >
            <FaUserAlt className='icon-form' />
          </InputForm>
          {(touched.username && errors.username && !isUsernameChecking) && (
          <div className='error'><small>{errors.username}</small></div>)}

          {(!errors.username && usernameError && !isUsernameChecking) && (
          <div className="error"><small>{usernameError}</small></div>)}


          <InputForm
            id='email'
            name='email'
            className={touched.email && errors.email ? 'error' : ''}
            type='email'
            placeholder='Ingrese su correo'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <FaEnvelope className='icon-form' />
          </InputForm>
          {touched.email && errors.email && <div className='error'><small>{errors.email}</small></div>}
          

          <InputForm
            id='password'
            name='password'
            className={touched.password && errors.password ? 'error' : ''}
            type='password'
            placeholder='Ingrese una contraseña'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <FaLock className='icon-form' />
          </InputForm>
          {touched.password && errors.password && <div className='error'><small>{errors.password}</small></div>}

          <InputForm
            id='confirmPassword'
            name='confirmPassword'
            className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
            type='password'
            placeholder='Confirme la contraseña'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <FaLock className='icon-form' />
          </InputForm>
          {touched.confirmPassword && errors.confirmPassword && <div className='error'> <small>{errors.confirmPassword}</small></div>}

          <ButtonForm type='submit'>Crear cuenta</ButtonForm>
        </Form>
      )}
    </Formik>
  )
}

export default Register
