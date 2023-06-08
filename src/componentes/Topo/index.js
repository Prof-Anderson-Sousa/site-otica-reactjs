import React from 'react';
import './style.css'

function Topo() {
    return (
        <header>
            <div className='limitar-secao topo'>
                <div>
                    <img src='../assets/logo.png' alt='logomarca - óticas vida' className="logo-topo"/>
                </div>
                <div>
                    <nav className='link-topo'>
                        <a href="#produtos">PRODUTOS</a>
                        <a href="#sobre">SOBRE</a>
                        <a href="#contato">CONTATO</a>
                    </nav>
                </div>
            </div>     
        </header>
    );
}

export default Topo;