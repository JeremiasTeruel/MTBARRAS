import './Header.css';
import LOGO from '../../assets/logo_transparente.png'
import Navbar from '../navbar/Navbar';
import { useState, useEffect } from 'react';


export default function Header () {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'header-scrolled' : ''}>
            <div className='logo_h1_container'>
                <a href="#">
                    <img src={LOGO} alt="logo" className='logo' />
                </a>
                <h1>MT Barras</h1>
            </div>
            <Navbar />
        </header>
    )
}
