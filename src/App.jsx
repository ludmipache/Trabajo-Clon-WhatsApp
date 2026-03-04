import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Components/Context/ContactContext'
import { useContext } from 'react'
import { ContactContext } from './Components/Context/ContactContext'
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx'

function Rutas() {
  const { user } = useContext(ContactContext)

  return (
    <Routes>
      <Route path="/login" element={!user ? <LoginScreen /> : <Navigate to="/" />} />
      <Route path="/" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
      <Route path="/contact/:contact_id" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
      <Route path="*" element={<ErrorNotFoundScreen />} />
    </Routes>
  )
}

function App() {
  return (
    <ContactsContextProvider>
      <Rutas />
    </ContactsContextProvider>
  )
}

export default App
