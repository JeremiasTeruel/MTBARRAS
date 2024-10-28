import './Navbar.css'


const pages = [
    {name: 'Inicio', href: '/'},
    {name: 'Productos', href: '/products'},
    {name: 'Contacto', href: '/contact'},
    {name: 'Carrito', href: '/cart'}
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