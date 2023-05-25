import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import { Formik } from 'formik'
// import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import {FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'

function Register() {
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
            errors.username = 'Ingrese un usuario válido'
          } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![-';%])$/i.test(values.username)) {
            errors.username = 'El usuario debe contener entre 4 y 32 caracteres. Puede contener letras, números, guiones bajos y puntos.'
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
        // onSubmit={async (values, { resetForm }) => {
        //   resetForm()
        //   console.log('Enviando formulario', registerRoute)
        //   const { username, email, password } = values
        //   const { data } = await axios.post(registerRoute, { username, email, password })
        //   if (data.status === false) {
        //     console.log(data.message)
        //   }
        //   if (data.status === true) {
        //     console.log('test 1')
        //     localStorage.setItem('Aetherk', JSON.stringify(data.user))
        //     navigate('/')
        //     console.log('test 2')
        //   }
        // }}
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
              placeholder='Ingrese un usuario'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <FaUserAlt className='icon-form' />
            </InputForm>
            {touched.username && errors.username && <div className='error'><small>{errors.username}</small></div>}

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
              placeholder='Confirme su contraseña'
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