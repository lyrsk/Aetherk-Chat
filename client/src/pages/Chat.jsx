import ChatContainer from '../components/chat-container/ChatContainer'
import Contacts from '../components/contacts/Contacts'
import MsgChat from '../components/msg-chat/MsgChat'

export default function Chat () {
  return (
    <>
      <ChatContainer>
        <Contacts />
        <MsgChat />
      </ChatContainer>
    </>
  )
}
