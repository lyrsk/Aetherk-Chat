// import Container from '../components/container/Container'
// import ContainerContacts from '../components/container-contacts/ContainerContacts'
// import ContainerChat from '../components/container-chat/ContainerChat'
import { useState, useEffect } from 'react'

import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

function Chat() {

    return (
        // <Container>
        //     <ContainerContacts />
        //     <ContainerChat />
        // </Container>
        <h1 style={{color:'white'}}>Chat</h1>
    )
}

export default Chat