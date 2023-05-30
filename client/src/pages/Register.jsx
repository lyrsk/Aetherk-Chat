import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import LinkForm from '../components/form-link/LinkForm'
import { Formik } from 'formik'
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { registerRoute, checkRegisterRoute } from '../utils/APIRoutes'

function Register() {
  const navigate = useNavigate()

  const [usernameError, setUsernameError] = useState('')
  const [isUsernameChecking, setIsUsernameChecking] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [isEmailChecking, setIsEmailChecking] = useState(false)

  const checkUsernameAvailability = async (username) => {
    try {
      setIsUsernameChecking(true)
      const { data } = await axios.post(checkRegisterRoute, { username })
      console.log(data)
      if (data.status === false) {
        setUsernameError(data.message)
      } else {
        setUsernameError('')
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
    } finally {
      setIsUsernameChecking(false)
    }
  }

  const checkEmailAvailability = async (email) => {
    try {
      setIsEmailChecking(true)
      const { data } = await axios.post(checkRegisterRoute, { email })
      console.log(data)
      if (data.status === false) {
        setEmailError(data.message)
      } else {
        setEmailError('')
      }
    } catch (error) {
      console.error('Error al verificar el email:', error)
    } finally {
      setIsEmailChecking(false)
    }
  }

  // const checkAvailability = async (value, setChecking, setDataError) => {  
  //   try {
  //     setChecking(true)
  //     const {data} = axios.post(checkRegisterRoute, {value})
  //     console.log(data)
  //     if (data.status === false) {
  //       setDataError(data.message)
  //     } else {
  //       setDataError('')
  //     }
  //   } catch (error) {
  //     console.error('Error al verificar', error)
  //   } finally {
  //     setChecking(false)
  //   }
  // }

  const handleDataChange = (e, handleChange, checkAvailability) => {
    const { value } = e.target
    handleChange(e)
    checkAvailability(value)
    }
    
    const handleUsernameChange = (e, handleChange) => {
    handleDataChange(e, handleChange, checkUsernameAvailability)
    }
    
    const handleEmailChange = (e, handleChange) => {
    handleDataChange(e, handleChange, checkEmailAvailability)
    }

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Debe ingresar un usuario'
        } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![-';%])$/i.test(values.username)) {
          errors.username =
            'El usuario debe tener entre 4 y 32 caracteres y no puede contener espacios'
        }

        if (!values.email) {
          errors.email = 'Debe ingresar un correo electrónico'
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Correo eléctronico inválido'
        }

        if (!values.password) {
          errors.password = 'Debe ingresar una contraseña'
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(values.password)) {
          errors.password =
            'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = 'Debe ingresar una contraseña'
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
        resetForm();
        console.log('Enviando formulario', registerRoute)
        const { username, email, password } = values;
        try {
          const { data } = await axios.post(registerRoute, { username, email, password });
          if (data.status === true) {
            localStorage.setItem('Aetherk', JSON.stringify(data.user));
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
        handleBlur,
      }) => (
        <Form
          action=''
          onSubmit={handleSubmit}
        >
          <InputForm
            id='username'
            name='username'
            className={(touched.username && errors.username) || usernameError ? 'error' : ''}
            type='text'
            placeholder='Ingrese un usuario'
            value={values.username}
            onChange={(e) => handleUsernameChange(e, handleChange)}
            onBlur={handleBlur}
          >
            <FaUserAlt className='icon-form' />
          </InputForm>
          {(touched.username && errors.username && !isUsernameChecking) && (
            <div className='error'><small>{errors.username}</small></div>
          )}
          {!errors.username && usernameError && !isUsernameChecking && (
            <div className="error"><small>{usernameError}</small></div>
          )}

          <InputForm
            id='email'
            name='email'
            className={touched.email && errors.email ? 'error' : ''}
            type='email'
            placeholder='Ingrese su correo'
            value={values.email}
            onChange={(e) => handleEmailChange(e, handleChange)}
            onBlur={handleBlur}
          >
            <FaEnvelope className='icon-form' />
          </InputForm>
          {(touched.email && errors.email && !isEmailChecking) && (
            <div className='error'><small>{errors.email}</small></div>
          )}
          {!errors.email && emailError && !isEmailChecking && (
            <div className="error"><small>{emailError}</small></div>
          )}

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
          {touched.password && errors.password && (
            <div className='error'><small>{errors.password}</small></div>
          )}

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
          {touched.confirmPassword && errors.confirmPassword && (
            <div className='error'><small>{errors.confirmPassword}</small></div>
          )}

          <ButtonForm type='submit'>Crear cuenta</ButtonForm>

          <div className='form-account'>
            <LinkForm linkAccount='/login' account={{ children: 'o ¡Inicia sesión!' }} />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Register

