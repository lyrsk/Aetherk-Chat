import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Formik, useFormik } from 'formik'
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'

import { registerRoute, checkRegisterRoute } from '../utils/APIRoutes'
import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import LinkForm from '../components/form-link/LinkForm'


function Register() {
  const navigate = useNavigate()

  const [usernameError, setUsernameError] = useState('') 
  const [isUsernameChecking, setIsUsernameChecking] = useState(false) 
  const [emailError, setEmailError] = useState('')
  const [isEmailChecking, setIsEmailChecking] = useState(false) 

  const checkUsernameAvailability = async (username) => { // Verifica la disponibilidad del nombre de usuario
    try {
      setIsUsernameChecking(true)
      const { data } = await axios.post(checkRegisterRoute, { username })
      console.log(data)
      if (!data.status) { // Muestra mensaje de error cuando el nombre de usuario ya está en uso
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

  const checkEmailAvailability = async (email) => { // Verifica la disponibilidad del correo electrónico
    try {
      setIsEmailChecking(true)
      const { data } = await axios.post(checkRegisterRoute, { email })
      console.log(data)
      if (!data.status) { // Muestra mensaje de error cuando el correo electrónico ya está en uso
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

  const handleDataChange = (e, handleChange, checkAvailability) => { // Función para manejar los cambios en los campos de registro
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

    const initialValues = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    const validate = (values) => { // Validación de los campos del formulario
      const errors = {}
    
      if (!values.username) { // Validación del campo username
        errors.username = 'Debe ingresar un usuario'
      } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![-';% ])$/i.test(values.username)) {
        errors.username =
          'El usuario debe tener entre 4 y 32 caracteres y no puede contener espacios';
      }

      if (!values.email) { // Validación del campo email
        errors.email = 'Debe ingresar un correo electrónico'
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Correo eléctronico inválido'
      }

      if (!values.password) { // Validación del campo password
        errors.password = 'Debe ingresar una contraseña'
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(values.password)) {
        errors.password =
          'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
      }

      if (!values.confirmPassword) { // Validación del campo confirmPassword
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
    }

    const onSubmit = async (values, { resetForm }) => { // Envío de los datos de registro
      resetForm() // Limpia los campos del formulario

      const { username, email, password } = values // Datos a enviar

      try {
        const { data } = await axios.post(registerRoute, { username, email, password }) // Envío de los datos al servidor

        if (data.status) { // Redirección al login si el registro fue exitoso
          localStorage.setItem('Aetherk', JSON.stringify(data.user))
          navigate('/login')
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error)
      }
    }

    const formikProps = useFormik({ // Dudosa procedencia
      initialValues: initialValues,
      validate: validate,
      onSubmit: onSubmit
    })
  
    useEffect(() => {
      if (formikProps.values.username) { 
        checkUsernameAvailability(formikProps.values.username);
      }
    }, [formikProps.values.username])
  
    useEffect(() => {
      if (formikProps.values.email) {
        checkEmailAvailability(formikProps.values.email);
      }
    }, [formikProps.values.email])

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
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
            className={(touched.email && errors.email) || emailError ? 'error' : ''}
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

