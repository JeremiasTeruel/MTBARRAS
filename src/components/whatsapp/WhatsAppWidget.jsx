import './WhatsAppWidget.css'
import { useState } from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const WHATSAPP_NUMBER = '5492612304481';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="whatsapp-widget">
            {isOpen && (
                <div className="whatsapp-popup">
                    <div className="whatsapp-header">
                        <div className="whatsapp-header-info">
                            <BsWhatsapp className="whatsapp-header-icon" />
                            <span>WhatsApp</span>
                        </div>
                        <button className="whatsapp-close" onClick={toggleWidget} aria-label="Cerrar">
                            <IoClose />
                        </button>
                    </div>
                    <div className="whatsapp-body">
                        <div className="whatsapp-message">
                            <p>¡Hola!</p>
                            <p>¿Cómo puedo ayudarte?</p>
                        </div>
                    </div>
                    <div className="whatsapp-footer">
                        <a 
                            href={WHATSAPP_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="whatsapp-cta"
                        >
                            Abrir chat
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            )}
            <button 
                className="whatsapp-button" 
                onClick={toggleWidget}
                aria-label="Abrir WhatsApp"
            >
                {isOpen ? <IoClose /> : <BsWhatsapp />}
            </button>
        </div>
    );
}
