import Form from '../components/form/Form'
import InputForm from '../components/form-input/InputForm'
import ButtonForm from '../components/form-button/ButtonForm'
import LinkForm from '../components/form-link/LinkForm'
import { Formik } from 'formik'
import { FaEnvelope } from 'react-icons/fa'
import { passwordValidation } from '../validations/passwordValidation'

function Password() {
  const initialValues = {
    email: ''
  }
    return (
        <Formik
        initialValues={initialValues}
        validate={passwordValidation}
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

            <div className='form-account'>
              <LinkForm linkAccount='/login' account={{ children: 'o ¡Inicia sesión!' }} />
            </div>
          </Form>
        )}
      </Formik>
    )
}

export default Password