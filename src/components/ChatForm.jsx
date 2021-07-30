import { io } from 'socket.io-client'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const socket = io('http://localhost:5000')

console.log(socket)

function Chat() {

    let [conversationId, setConversationId] = useState(null)
    let [conversation, setConversation] = useState([])
    let [message, setMessage] = useState({ text: '' })

    function sendMessage(e) {
        e.preventDefault()
        socket.emit('incomingMessage', { conversationId, message: message.text })
        setConversation(conversation.concat(message))
        setMessage({ text: '' })
    }

    useEffect(function () {
        recieveMessage()
    }, [conversation])

    function recieveMessage() {
        socket.on('newConversation', data => {
            setConversationId(data.id)
        })
        socket.on('outputMessage', data => {
            setConversation(conversation.concat(data))

        })
    }


    function handleInput(e) {
        setMessage({ text: e.target.value })
    }

    function closeConversation() {
        socket.emit('closeConversation', { conversationId }) //el{conversationId} es lo mismo que poner {conversationId : conversationId}
    }

    return (

        <>
            <ul>
                {conversation.map((message, i) => <li key={i}>{message.text}</li>)}
            </ul>


            <form action="" onSubmit={sendMessage}>

                <textarea name="message" value={message.text} onInput={handleInput} />

                <button>Enviar</button>
                <button onClick={closeConversation}>Finalizar</button>
            </form>


        </>
    )
}

export default Chat