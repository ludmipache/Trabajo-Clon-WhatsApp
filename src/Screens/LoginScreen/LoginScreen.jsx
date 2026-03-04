import React, { useContext } from 'react'
import logoWhatsapp from "../../assets/imagenes/LogoWhatsApp.jpeg"
import { useNavigate } from 'react-router'
import { ContactContext } from '../../Components/Context/ContactContext'
import './LoginScreen.css'

export default function LoginScreen() {
    const { login } = useContext(ContactContext)
    const navigate = useNavigate()

function handleSubmit(event) {
    event.preventDefault()
    const nombre = event.target.login.value
    login(nombre)
    navigate('/')
}

return (
    <div className='login-conteiner'>
        <div className='login-logo'>
            <img src={logoWhatsapp} alt="Logo Whatsapp" />
            </div>
        
        <h2 className='login-title'>Bienvenido a WhatsApp</h2>
        <form  className='login-form' onSubmit={handleSubmit}>
        <input className='login-input' type="text" name="login" placeholder="Ingresá tu nombre" />
        <input className='login-input' type="password" name="password" placeholder="Ingresá una contraseña" />
        <button className='login-button' type="submit">Entrar</button>
    </form>
    </div>
)
}