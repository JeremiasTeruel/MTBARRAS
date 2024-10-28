import './Header.css';
import LOGO from '../../assets/logo_transparente.png'
import Navbar from '../navbar/Navbar';


export default function Header () {
    return (
        <header>
            <div className='logo_h1_container'>
                <img src={LOGO} alt="logo" className='logo' />
                <h1>MT Barras</h1>
            </div>
            <Navbar />
        </header>
    )
}