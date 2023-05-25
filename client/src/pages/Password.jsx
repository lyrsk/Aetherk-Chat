import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import { Formik } from 'formik'
import {FaEnvelope} from 'react-icons/fa'

function Password() {
    return (
        <Formik
        initialValues={{
          email: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Ingrese un correo válido'
          } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
          ) {
            errors.email =
              'Correo eléctronico inválido'
          }
          return errors
        }}
        // onSubmit={async (values, { resetForm }) => {
        //   resetForm()
        //   console.log('Enviando formulario', passwordRoute)
        //   const { email } = values
        //   const { data } = await axios.post(passwordRoute, { email })
        //   if (data.status === false) {
        //     console.log(data.message)
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
            onSubmit={handleSubmit}
            linkAccount='/login'
            account={{ children: 'o ¡Inicia sesión!' }}
          >
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
  
            <ButtonForm type='submit'>Cambiar contraseña</ButtonForm>
          </Form>
        )}
      </Formik>
    )
}

export default Password