import  { createContext, useState } from 'react'
import { getContacts } from '../services/contactsService.js'

export const ContactContext = createContext {
    contacts: [],
    
}
