function validate (values) { // Validación de los campos del formulario
    const { username, email, password, confirmPassword } = values
    const errors = {}
  
    if (!username || username.trim() === '') { // Validación del campo username
      errors.username = 'Debe ingresar un usuario'
    } else if (!/^[a-zA-Z0-9._-]{4,32}(?<![';%" ])$/i.test(username)) {
      errors.username =
        'El usuario debe tener entre 4 y 32 caracteres, no puede contener espacios ni caracteres especiales'
    } 

    if (!email) { // Validación del campo email
      errors.email = 'Debe ingresar un correo electrónico'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) { 
      errors.email = 'Correo eléctronico inválido'
    }

    if (!password) { // Validación del campo password
      errors.password = 'Debe ingresar una contraseña'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(password)) {
      errors.password =
        'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
    }

    if (!confirmPassword) { // Validación del campo confirmPassword
      errors.confirmPassword = 'Debe ingresar una contraseña'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/i.test(confirmPassword)) {
      errors.confirmPassword =
        'La contraseña debe contener al menos 8 caracteres, una letra y un número.'
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden'
    }

     return errors
  }

export {
  validate
}