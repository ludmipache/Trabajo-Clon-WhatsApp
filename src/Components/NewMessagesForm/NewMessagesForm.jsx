import React from 'react'
import { useContext } from 'react'
import { ContactContext } from '../Context/ContactContext'
import { useParams } from 'react-router'
import './NewMessagesFrom.css'


export default function NewMessagesForm() {
    const {sendMessage} = useContext(ContactContext)
    const {contact_id} = useParams ()


function NewMessages (event) {
    event.preventDefault()
    const texto = event.target.contenido.value
    sendMessage(contact_id, texto)
    event.target.reset()
}


return (
    <div className="form-container">
        <form onSubmit={NewMessages} style={{ display: 'flex', flex: 1, gap: '10px', alignItems: 'center' }}>
        <textarea
            name="contenido"
            className="message-input"
            placeholder="Escribe un mensaje..."
        />
        <button type="submit" className="send-button">➤</button>
        </form>
    </div>
)
}