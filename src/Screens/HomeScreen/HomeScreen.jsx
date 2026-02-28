import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import ContactScreen from '../ContactScreen/ContactScreen'
import { useParams } from 'react-router'
import './HomeScreen.css'
import whatsappIllustration from '../../assets/imagenes/Descargas.png'
import documentIcon from "../../assets/imagenes/docs_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import contactIcon from "../../assets/imagenes/person_add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

export default function HomeScreen() {
    const { contact_id } = useParams()

    return (
        <div className='home-screen'>
            <ContactSidebar />
            
            <div className='content-area'>
                {contact_id ? (
                    <ContactScreen />
                ) : (
                    <div className="welcome-container">
                        
                        <div className="download-card">
                            <div className="illustration">
                                <img src={whatsappIllustration} alt="WhatsApp Desktop" />
                            </div>

                            <h2>Descarga WhatsApp para Windows</h2>
                            <p>Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más.</p>
                            <button className="btn-download">Descargar</button>
                        </div>

                        
                        <div className="action-buttons">
                            <div className="action-item">
                                <div className="icon-box"><img src={documentIcon} alt="documentos" /></div>
                                <span>Enviar documento</span>
                            </div>
                            <div className="action-item">
                                <div className="icon-box"><img src={contactIcon} alt="contacto" /></div>
                                <span>Añadir contacto</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
