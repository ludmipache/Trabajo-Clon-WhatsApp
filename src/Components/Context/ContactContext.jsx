import  { createContext, useState } from 'react'
import { getContacts } from '../../services/contactsService.js.jsx'

export const ContactContext = createContext(
    {
    contacts: [],
    
    }
) 

export default ContactsContextProvider