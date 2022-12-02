import React from 'react';
import note from './eighth-note-music.png';
import './header.css'

function Header() {
    return(
        <header className='navbar navbar-expand-sm'>
            <div className='container-fluid'>
                <div className="navbar-brand">
                    <a href="#">
                        <img className='logo' src={note} />
                    </a>
                </div>
                <span className='header-tit'>Bandas Musicales</span>
            </div>
        </header>
    );
}

export default Header;