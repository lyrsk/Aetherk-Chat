import React from 'react'
import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'

export default function Register () {
  return (
    <Form
      account={{ children: '¿Ya tienes cuenta?' }}
      link='/login'
      acct={{ children: '¡Inicia sesión!' }}
    >
      <h1>¡Regístrate!</h1>
      <InputForm type='text' placeholder='Ingrese su usuario' />
      <InputForm type='email' placeholder='ejemplo@gmail.com' />
      <InputForm type='password' placeholder='Ingrese su contraseña' />
      <InputForm type='password' placeholder='Repite la contraseña' />
      <ButtonForm>Registrarse</ButtonForm>
    </Form>
  )
}
