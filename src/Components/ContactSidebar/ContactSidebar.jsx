import React, { useContext } from 'react'
import { ContactContext } from '../Context/ContactContext'
import { useNavigate, useSearchParams } from 'react-router'
import './ContactSidebar.css'

export default function ContactSidebar() {
const { contacts } = useContext(ContactContext)
const navigate = useNavigate()

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("search") || "";

const handleSearch = (e) => {
    const text = e.target.value;
    if (text) {
        setSearchParams({ search: text });
    } else {
        setSearchParams({}); 
    }
};

const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
);


return (
    <div className="sidebar">
        <div className="sidebar-header">
        <h1>WhatsApp</h1>
        {}
        <div className="search-container">
            <div className="search-wrapper">
                    <span class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></span>
                    <input
                        type="text"
                        placeholder="Buscar o empezar un chat nuevo"
                        value={query}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
        </div>
    </div>

    <div className="contacts-list">
        <h2>Chats</h2>
        {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
            <div
                key={contact.id}
                className="contact-item"
                onClick={() => navigate(`/contact/${contact.id}`)}
            >
                <img 
            src={contact.porfile_picture} 
            alt={contact.name} 
            className="contact-avatar" 
        />
            <div className="contact-info">
                <p className="contact-name">{contact.name}</p>
                <p className="contact-last-message">{contact.last_time_connection}</p>
            </div>
            </div>
        ))
        ) : (
            <p className="no-results">No se encontraron contactos</p>
        )}
        </div>
    </div>
);
}