import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ContactContext } from '../../Components/Context/ContactContext'
import NewMessagesForm from '../../Components/NewMessagesForm/NewMessagesForm'
import './ContactScreen.css'

export default function ContactScreen() {
    const { contact_id,porfile_picture } = useParams()
    const { contacts } = useContext(ContactContext)

    const contact = contacts.find((c) => c.id === Number(contact_id))

    const activeContact = contacts.find(c => c.id === parseInt(contact_id))
    
    if (!contact) {
    return <div>Contacto no encontrado</div>
    }

    return (
        <div className="chat-screen">
            <div className='chat-header'>
                <img 
                        src={activeContact.porfile_picture} 
                        alt={activeContact.name} 
                        className="header-avatar" 
                    />
                <h2>{contact.name}</h2>
                
            </div>
        

        <div className="messages">
        {contact.message.map((message) => (
            <div
            key={message.id}
            className={message.send_by_me ? 'message-mine' : 'message-theirs'}>
                <p>{message.text}</p>
                <p className='messages-time'>{contact.last_time_connection}</p>
            </div>
        ))}
        </div>
        
        <NewMessagesForm />
    </div>
    )
}