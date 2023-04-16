import React from 'react'
import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'
import './style.css'

export default function Login () {
  return (
    <Form>
      <h1>¡Bienvenido!</h1>
      <InputForm id='username' type='text' placeholder='Usuario' />
      <InputForm id='password' type='password' placeholder='Contraseña' />
      <ButtonForm>Iniciar sesión</ButtonForm>

    </Form>
  )
}
