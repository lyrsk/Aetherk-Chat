function validate (values)  {
  const { username, password } = values;
  const errors = {}

  if (!username || username.trim() === '') {
    errors.username = 'Debe ingresar un usuario';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Debe ingresar una contraseña';
  }

  return errors
}

export { validate }