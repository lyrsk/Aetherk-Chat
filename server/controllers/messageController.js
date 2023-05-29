import { Message } from '../models/messageModel.js'

async function save (req, res) {
  try {
    const params = req.body
    const message = new Message()
    message.message = params.message
    message.from = params.from

    const messageStored = await message.save()

    if (!messageStored) {
      return res.status(404).send({
        status: 'error',
        message: 'El mensaje no se ha guardado'
      })
    }

    return res.status(200).send({
      status: 'success',
      message: messageStored
    })
  } catch (err) {
    return res.status(500).send({
      status: 'error',
      message: 'Error al guardar el mensaje'
    })
  }
}

async function getMessages (req, res) {
  try {
    const messages = await Message.find({}).sort('-_id').exec()

    if (messages.length === 0) {
      return res.status(200).send({
        status: 'success',
        message: 'No hay mensajes para mostrar'
      })
    }

    return res.status(200).send({
      status: 'success',
      messages
    })
  } catch (err) {
    return res.status(500).send({
      status: 'error',
      message: 'Error en la petición'
    })
  }
}

export {
  save,
  getMessages
}
