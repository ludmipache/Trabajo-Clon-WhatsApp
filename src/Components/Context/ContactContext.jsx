import { createContext, useState } from 'react'
import { getContacts } from '../../services/contactsService.js'

export const ContactContext = createContext()

export default function ContactsContextProvider({ children }) {
    const [contacts, setContacts] = useState(getContacts())

function sendMessage(contact_id, text) {
    const newMessage = {
        id: Date.now(),
        text: text,
        send_by_me: true,
        created_at: '',
        is_read: false
    }

    setContacts(contacts.map((contact) => {
        if (contact.id === Number(contact_id)) {
            return {
                ...contact,
                message: [...contact.message, newMessage]
            }
        }
        return contact
        }))
}

return (
    <ContactContext.Provider value={{ contacts, sendMessage }}>
        {children}
    </ContactContext.Provider>
)
}