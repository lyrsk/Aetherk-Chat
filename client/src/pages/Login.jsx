import React from 'react'
import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'

export default function Login () {
  return (
    <Form
      linkAccount='/register'
      account={{ children: '¿No tienes cuenta? ¡Regístrate!' }}
    >
      <h1>¡Bienvenido!</h1>
      <InputForm id='username' type='text' placeholder='Usuario' />
      <InputForm id='password' type='password' placeholder='Contraseña' />
      <ButtonForm>Iniciar sesión</ButtonForm>
      <div id='form-forget-password'>
        <a href='/password' id='test'>¿Olvidaste tu contraseña?</a>
      </div>
    </Form>
  )
}
