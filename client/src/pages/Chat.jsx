import { useState, useEffect } from 'react'
import ChatContainer from '../components/chat-container/ChatContainer'
import Contacts from '../components/contacts/Contacts'
import MsgChat from '../components/msg-chat/MsgChat'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  // useEffect(async () => {
  //   if (currentUser) {
  //     if (currentUser.isAvatarImageSet) {
  //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
  //       setContacts(data.data)
  //     } else {
  //       navigate('/setAvatar')
  //     }
  //   }
  // }, [currentUser])

  return (
    <>
      <ChatContainer>
        <Contacts />
        <MsgChat />
      </ChatContainer>
    </>
  )
}
