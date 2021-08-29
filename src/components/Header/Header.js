import React from 'react'
import logo from './logo-jobs.png'


import './Header.css'

const Header = () => (
    <header className="app-header">
           
        <img src={logo} alt="logo" width="240px" height="105px"/>
        <div className="titulo">
        <h1>Banco de Currículos - Preencha seus dados e venha com a gente!</h1>
        
        </div>
            
    </header>
)

export default Header