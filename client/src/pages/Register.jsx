import React from 'react'
import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'

export default function Register () {
  return (
    <Form
      linkAccount='/login'
      account={{ children: '¿Ya tienes cuenta? ¡Inicia sesión!' }}
    >
      <h1>¡Regístrate!</h1>
      <InputForm type='text' placeholder='Ingrese su usuario' />
      <InputForm type='email' placeholder='Ingrese su correo' />
      <InputForm type='password' placeholder='Ingrese su contraseña' />
      <InputForm type='password' placeholder='Repite la contraseña' />
      <ButtonForm>Registrarse</ButtonForm>
    </Form>
  )
}
