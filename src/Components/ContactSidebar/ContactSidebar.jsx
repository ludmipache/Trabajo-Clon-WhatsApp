import React, { useContext } from 'react'
import { ContactContext } from '../Context/ContactContext'
import { useNavigate } from 'react-router'
import './ContactSidebar.css'

export default function ContactSidebar() {
const { contacts } = useContext(ContactContext)
const navigate = useNavigate()


return (
    <div className="sidebar">
        <h1>Whatsapp</h1>
        <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar o empezar un chat nuevo"
                    value={query}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
    <h2>Chats</h2>
    {contacts.map((contact) => (
        <div
        key={contact.id}
        className="contact-item"
        onClick={() => navigate(`/contact/${contact.id}`)} >
            <p className="contact-name">{contact.name}</p>
            <p className="contact-last-message">{contact.last_time_connection}</p>
        </div>
    ))}
    </div>
)
}