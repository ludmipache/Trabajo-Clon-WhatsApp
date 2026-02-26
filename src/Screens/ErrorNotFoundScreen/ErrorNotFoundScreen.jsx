import React from 'react'
import { Link } from 'react-router'
import './ErrorNotFoundScreen.css'

export default function ErrorNotFoundScreen() {
return (
    <div className='page-notfound' >
        <h1>Ups, página no encontrada</h1>
        <p>La página que estás buscando no existe o ha sido movida.</p>
        <Link to="/">Volver al inicio</Link>
    </div>
)
}