import ButtonForm from '../components/button-form/ButtonForm'
import Form from '../components/form/Form'
import InputForm from '../components/input-form/InputForm'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loginRoute } from '../utils/APIRoutes'

export default function Login () {
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
          password: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Debe ingresar un usuario'
          }
          if (!values.password) {
            errors.password = 'Debe ingresar una contraseña'
          }

          return errors
        }}
        onSubmit={async (values, { resetForm }) => {
          resetForm()
          console.log('Enviando formulario', loginRoute)

          const { username, password } = values
          const { data } = await axios.post(loginRoute, { username, password })
          if (data.status === false) {
            console.log(data.message)
          }
          if (data.status === true) {
            localStorage.setItem('Aetherk', JSON.stringify(data.user))
            navigate('/')
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
            linkAccount='/register'
            account={{ children: '¿No tienes cuenta? ¡Regístrate!' }}
            onSubmit={handleSubmit}
          >
            <InputForm
              id='username'
              className={touched.username && errors.username ? 'error' : ''}
              type='text'
              placeholder='Usuario'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <FaUserAlt className='icon-form' />
            </InputForm>
            {touched.username && errors.username && <small className='error'>{errors.username}</small>}

            <InputForm
              id='password'
              className={touched.password && errors.password ? 'error' : ''}
              type='password'
              placeholder='Contraseña'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <FaLock className='icon-form' />
            </InputForm>
            {touched.password && errors.password && <small className='error'>{errors.password}</small>}

            <ButtonForm type='submit'>Iniciar sesión</ButtonForm>

            <div>
              <a href='/password' className='form-forget-password'>¿Olvidaste tu contraseña?</a>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
