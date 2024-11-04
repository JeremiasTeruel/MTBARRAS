import './Footer.css'
import LOGO from '../../assets/logo_transparente.png'
import { BsInstagram } from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa'


export default function Footer () {

    let fecha = new Date();
    let año = fecha.getFullYear();

    return (
        <div className='footer'>

            <div className='socials_container'>
                <small>Nuestras redes: </small>
                <div className='footer_socials'>
                    <a href='https://www.instagram.com/mt_barras/' className='social_anchor'><BsInstagram /></a>
                    <a href='https://www.facebook.com/jere.teruel/' className='social_anchor'><FaFacebookF/></a>
                </div>
            </div>

            <div className='logo_container'>
                <small>
                    MT BARRAS
                </small>
                <p>|</p>
                {año}
                <a href="#">
                    <img src={LOGO} alt="logo" className='logo_footer'/>
                </a>
            </div>
        </div>
    )
}