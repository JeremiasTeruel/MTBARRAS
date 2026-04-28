import './Navbar.css'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


const pages = [
    {name: 'Inicio', href: '#'},
    {name: 'Servicios', href: '#services'},
    {name: 'Nosotros', href: '#aboutus'},
    {name: 'Contacto', href: '#contact'},
];


export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button> 
            {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                {
                    pages.map(item => 
                        <a key={item.name} href={item.href} className='navbar-links' onClick={closeMenu}>
                            {item.name}
                        </a>
                    )
                }
            </nav>
        </>
    )
}
