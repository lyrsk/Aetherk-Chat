import ChatContainer from '../components/chat-container/ChatContainer'
import Contacts from '../components/contacts/Contacts'
import MsgChat from '../components/msg-chat/MsgChat'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Chat () {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState({ undefined })

  // useEffect(async () => {
  //   if (!localStorage.getItem('Aetherk')) {
  //     navigate('/login')
  //   } else {
  //     setCurrentUser(await JSON.parse(localStorage.getItem('Aetherk')))
  //   }
  // }, [])

  return (
    <>
      <ChatContainer>
        <Contacts />
        <MsgChat />
      </ChatContainer>
    </>
  )
}
