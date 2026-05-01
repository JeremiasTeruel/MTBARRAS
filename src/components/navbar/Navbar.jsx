import './Navbar.css'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa';


const pages = [
    {name: 'Inicio', href: '#'},
    {name: 'Servicios', href: '#services'},
    {name: 'Nosotros', href: '#aboutus'},
    {name: 'Contacto', href: '#contact'},
];

const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/mt_barras/', icon: BsInstagram },
    { name: 'Facebook', href: 'https://www.facebook.com/mtbarras.moviles', icon: FaFacebookF },
    { name: 'WhatsApp', href: 'https://wa.me/5492612304481', icon: BsWhatsapp },
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
                <div className="navbar-social">
                    {socialLinks.map(social => (
                        <a 
                            key={social.name} 
                            href={social.href} 
                            className='navbar-social-link' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            aria-label={social.name}
                            onClick={closeMenu}
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>
            </nav>
        </>
    )
}
