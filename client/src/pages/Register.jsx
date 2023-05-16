import ButtonForm from '../components/button-form/ButtonForm'
import Form from '../components/form/Form'
import InputForm from '../components/input-form/InputForm'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { registerRoute } from '../utils/APIRoutes'

export default function Register () {
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (localStorage.getItem('Aetherk')) {
  //     navigate('/')
  //   }
  // }, [])

  return (
    <>
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
            errors.username = 'Ingrese un usuario válido'
          } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![-';%])$/i.test(values.username)) {
            errors.username = 'El usuario debe contener entre 4 y 32 caracteres y puede contener letras, números, guiones bajos y puntos.'
          }

          if (!values.email) {
            errors.email = 'Ingrese un correo válido'
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
          const { data } = await axios.post(registerRoute, { username, email, password })
          if (data.status === false) {
            console.log(data.message)
          }
          if (data.status === true) {
            console.log('test 1')
            localStorage.setItem('Aetherk', JSON.stringify(data.user))
            navigate('/')
            console.log('test 2')
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
              className={touched.username && errors.username ? 'error' : ''}
              type='text'
              placeholder='Ingrese su usuario'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <AiOutlineUser className='icon-form' />
            </InputForm>
            {touched.username && errors.username && <small className='error'>{errors.username}</small>}

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
              <AiOutlineMail className='icon-form' />
            </InputForm>
            {touched.email && errors.email && <small className='error'>{errors.email}</small>}

            <InputForm
              id='password'
              name='password'
              className={touched.password && errors.password ? 'error' : ''}
              type='password'
              placeholder='Ingrese su contraseña'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <AiOutlineLock className='icon-form' />
            </InputForm>
            {touched.password && errors.password && <small className='error'>{errors.password}</small>}

            <InputForm
              id='confirmPassword'
              name='confirmPassword'
              className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
              type='password'
              placeholder='Confirme su contraseña'
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <AiOutlineLock className='icon-form' />
            </InputForm>
            {touched.confirmPassword && errors.confirmPassword && <small className='error'>{errors.confirmPassword}</small>}

            <ButtonForm type='submit'>Crear cuenta</ButtonForm>
          </Form>
        )}
      </Formik>
    </>
  )
}
