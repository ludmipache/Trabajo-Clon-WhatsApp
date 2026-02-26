import React from 'react'
import { useContext } from 'react'
import { ContactContext } from '../Context/ContactContext'
import { useParams } from 'react-router'


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
    <div>
        <form onSubmit={NewMessages}>
            <textarea name="contenido" id="Nuevo Mensaje"></textarea>
            <button>Enviar</button>
        </form>
    </div>
)
}