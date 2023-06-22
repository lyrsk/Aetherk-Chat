function passwordValidation (values) {
    const { email } = values
    const errors = {}

    if (!email) {
      errors.email = 'Ingrese un correo válido'
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) {
          errors.email = 'Correo eléctronico inválido'
        }
        return errors
}

export {
    passwordValidation
}