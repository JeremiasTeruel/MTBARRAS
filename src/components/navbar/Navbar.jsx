import './Navbar.css'


const pages = [
    {name: 'Inicio', href: '/'},
    {name: 'Servicios', href: '/services'},
    {name: 'Nosotros', href: '/aboutus'},
    {name: 'Contacto', href: '/contact'},
];


export default function Navbar () {
    return (
        <nav>
            {
                pages.map(item => 
                    <a key={item.name} href={item.href} className='navbar-links'>
                        {item.name}
                    </a>
                    )
            }
        </nav>
    )
}