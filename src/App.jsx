import React, {useState} from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import { getContacts } from './services/contactsService.js'
import ContactsContextProvider from './Components/Context/ContactContext'

function App() {

  return (
    
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact/:contact_id" element={<HomeScreen />} />
          <Route path="*" element={<ErrorNotFoundScreen />} />
        </Routes>
      </ContactsContextProvider>
    
  )
}
export default App

