import './Footer.css'
import LOGO from '../../assets/logo_transparente.png'


export default function Footer () {
    return (
        <>
            <div className='logo_container'>
                <img src={LOGO} alt="logo" className='logo_footer'/>
            </div>
        </>
    )
}