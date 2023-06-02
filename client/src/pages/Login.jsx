import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Formik } from 'formik'
import { FaUserAlt, FaLock } from 'react-icons/fa'

import { loginRoute } from '../utils/APIRoutes'
import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import LinkForm from '../components/form-link/LinkForm'


function Login() {
  const navigate = useNavigate()

  const [loginError, setLoginError] = useState('') // Estado para mostrar mensaje de error cuando los datos son incorrectos

    return (
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
            resetForm() // Limpia los campos del formulario

            const { username, password } = values // // Datos a enviar
            const { data } = await axios.post(loginRoute, { username, password }) // Envío de los datos al servidor
            console.log(data)

            if (data.status) {
              localStorage.setItem('Aetherk', JSON.stringify(data.user))
              navigate('/')
            } else {
              console.log(data.message)
              setLoginError(data.message)
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
            >
              <InputForm
                id='username'
                className={touched.username && errors.username ? 'error' : ''}
                type='text'
                placeholder='Usuario'
                value={values.username}
                onChange={(e) => {
                  handleChange(e)
                  setLoginError('')
                }}
                onBlur={handleBlur}
              >
                <FaUserAlt className='icon-form' />
              </InputForm>
              {touched.username && errors.username && <div className='error'><small>{errors.username}</small></div>}
              {loginError && (<div className='error'><small>{loginError}</small></div>)}
            
              <InputForm
                id='password'
                className={touched.password && errors.password ? 'error' : ''}
                type='password'
                placeholder='Contraseña'
                value={values.password}
                onChange={(e) => {
                  handleChange(e)
                  setLoginError('')
                }}
                onBlur={handleBlur}
              >
                <FaLock className='icon-form' />
              </InputForm>
              {touched.password && errors.password && <div className='error'><small>{errors.password}</small></div>}
              {loginError && (<div className='error'><small>{loginError}</small></div>)}

              <ButtonForm type='submit'>Iniciar sesión</ButtonForm>
  
              <div className='form-account'>
                <LinkForm linkAccount='/password' account={{ children: '¿Olvidaste tu contraseña?' }} />
                <LinkForm linkAccount='/register' account={{ children: '¿No tienes cuenta? ¡Regístrate!' }} />
              </div>

            </Form>
          )}
        </Formik>
    )
}

export default Login