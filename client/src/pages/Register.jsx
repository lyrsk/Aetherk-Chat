import React from 'react'
import { ButtonForm } from '../components/ButtonForm/ButtonForm'
import { Form } from '../components/Form/Form'
import { InputForm } from '../components/InputForm/InputForm'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

export default function Register () {
  return (
    <Form
      linkAccount='/login'
      account={{ children: '¿Ya tienes cuenta? ¡Inicia sesión!' }}
    >
      <h1>¡Regístrate!</h1>
      <InputForm id='username' type='text' placeholder='Ingrese su suario'>
        <AiOutlineUser />
      </InputForm>
      <InputForm id='email' type='email' placeholder='Ingrese su correo'>
        <AiOutlineMail />
      </InputForm>
      <InputForm id='password' type='password' placeholder='Ingrese su contraseña'>
        <AiOutlineLock />
      </InputForm>
      <InputForm id='password' type='password' placeholder='Confirme su contraseña'>
        <AiOutlineLock />
      </InputForm>
      <ButtonForm>Registrarse</ButtonForm>
    </Form>
  )
}
