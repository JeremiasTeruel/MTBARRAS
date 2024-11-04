import { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { VscArrowUp } from "react-icons/vsc";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) { // Muestra el botón cuando se haya hecho un scroll de 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Desplazamiento suave al inicio
        });
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} className="scroll-to-top">
                <VscArrowUp />
            </button>
        )
    );
};

export default ScrollToTop;
