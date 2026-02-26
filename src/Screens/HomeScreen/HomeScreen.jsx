import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import ContactScreen from '../ContactScreen/ContactScreen'
import { useParams } from 'react-router'
import './HomeScreen.css'

export default function HomeScreen() {
    const { contact_id } = useParams()

    return (
    <div className='home-screen'>
        <ContactSidebar />
        {contact_id
        ? <ContactScreen />
        : <div>
            <p>Seleccioná un contacto para chatear</p>
        </div>
        }
    </div>
    )
}
