const validate = (values) => {
    const { username, password } = values;
    const errors = {}

    if (!username || username.trim() === '') {
      errors.username = 'Debe ingresar un usuario';
      console.log(errors.username)
    }
    if (!password || password.trim() === '') {
      errors.password = 'Debe ingresar una contraseña';
      console.log(errors.password)
    }

    return errors
  }

export default validate