import Container from '../components/container/Container'
import Contacts from '../components/contacts/Contacts'
import ChatContainer from '../components/chat/ChatContainer'

function Chat() {
    return (
        <Container>
            <Contacts />
            <ChatContainer />
        </Container>
    )
}

export default Chat