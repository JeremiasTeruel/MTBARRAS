import './Services.css'
import Service_card from './Service_card'
import servicio_basico from '../../assets/servicio_basico.png'
import servicio_avanzado from '../../assets/servicio_avanzado.png'
import servicio_personalizado from '../../assets/servicio_personalizado.png'

const Services = () => {

    const service = [
        {id: '1', image: servicio_basico, description: 'Este es el servicio basico de MT BARRAS'},
        {id: '2', image: servicio_avanzado, description: 'Este es el servicio avanzado de MT BARRAS'},
        {id: '3', image: servicio_personalizado, description: 'Este es el servicio personalizado de MT BARRAS'}
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