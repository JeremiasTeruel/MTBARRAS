import './Navbar.css'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


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


    return (
        <>
            <button className="menu-toggle" id="menuToggle" onClick={toggleMenu}><RxHamburgerMenu /></button> 
            <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
                {
                    pages.map(item => 
                        <a key={item.name} href={item.href} className='navbar-links'>
                            {item.name}
                        </a>
                        )
                }
            </nav>
        </>
    )
}