import './Footer.css'
import LOGO from '../../assets/logo_transparente.png'


export default function Footer () {

    let fecha = new Date();
    let año = fecha.getFullYear();

    return (
        <div className='footer'>
            <div className='logo_container'>
                <small>MT BARRAS |</small>
                {año}
                <a href="#">
                    <img src={LOGO} alt="logo" className='logo_footer'/>
                </a>
            </div>
        </div>
    )
}
