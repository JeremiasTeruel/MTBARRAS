import './Services.css'
import Service_card from './Service_card'
import servicio_basico from '../../assets/servicio_basico.png'
import servicio_avanzado from '../../assets/servicio_avanzado.png'
import servicio_personalizado from '../../assets/servicio_personalizado.png'

const Services = () => {

    const service = [
        {id: '1', image: servicio_basico, description: 'Servicio básico de MT BARRAS ofrecemos el conjunto base de tragos y aperitivos para todo tipo de eventos. Fernet, daikiri, aperol y cerveza.'},
        {id: '2', image: servicio_avanzado, description: 'Con el servicio avanzado de MT BARRAS contarás con el servicio completo en tragos para tu evento. Fernet, daikiri, aperol, vodka, gin, cerveza y vino, siempre las mejores marcas y calidad asegurada.'},
        {id: '3', image: servicio_personalizado, description: 'Este es el servicio personalizado de MT BARRAS. Con estsa opción contarás con nuestra asesoría profesional para encontrar la mejor opción en tragos y aperitivos para armar tu evento a tu propia medida.'}
    ]


  return (
    <section id='services' className='services_container'>
        <h1>Nuestros Servicios</h1>

        <div className='cards_container'>
            {service.map(item => {return (<Service_card data={item} key={item.id} image={item.image} description={item.description}/>)})}
        </div>
    </section>
  )
}

export default Services