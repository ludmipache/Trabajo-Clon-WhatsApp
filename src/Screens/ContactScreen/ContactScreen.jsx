import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ContactContext } from '../../Components/Context/ContactContext'
import NewMessagesForm from '../../Components/NewMessagesForm/NewMessagesForm'
import './ContactScreen.css'

export default function ContactScreen() {
    const { contact_id } = useParams()
    const { contacts } = useContext(ContactContext)

    const contact = contacts.find((c) => c.id === Number(contact_id))
    
    if (!contact) {
    return <div>Contacto no encontrado</div>
    }

    return (
        <div className="chat-screen">
            <div className='chat-header'>
                <h2>{contact.name}</h2>
                <p>{contact.last_time_connection}</p>
            </div>
        

        <div className="messages">
        {contact.message.map((message) => (
            <div
            key={message.id}
            className={message.send_by_me ? 'message-mine' : 'message-theirs'}>
                <p>{message.text}</p>
            </div>
        ))}
        </div>
        
        <NewMessagesForm />
    </div>
    )
}