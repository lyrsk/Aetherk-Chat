import ButtonForm from '../components/button-form/ButtonForm' // ButtonForm componente
import Form from '../components/form/Form' // Form componente
import InputForm from '../components/input-form/InputForm' // InputForm componente
import { GrMail } from 'react-icons/gr'// Iconos
import { Formik } from 'formik'
import axios from 'axios'
import { passwordRoutes } from '../utils/APIRoutes'

export default function Password () {
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
      onSubmit={async (values, { resetForm }) => {
        resetForm()
        console.log('Enviando formulario', passwordRoutes)
        const { email } = values
        const { data } = await axios.post(passwordRoutes, { email })
        if (data.status === false) {
          console.log(data.message)
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
          onSubmit={handleSubmit}
          linkAccount='/login'
          account={{ children: 'o ¡Inicia sesión!' }}
        >
          <InputForm
            id='email'
            name='email'
            type='email'
            placeholder='Ingrese su correo'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <GrMail className='icon-form' />
          </InputForm>
          {touched.email && errors.email && <div className='error'>{errors.email}</div>}

          <ButtonForm type='submit'>Cambiar contraseña</ButtonForm>
        </Form>
      )}
    </Formik>
  )
}
