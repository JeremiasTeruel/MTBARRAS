import './AboutUs.css'
import barras from '../../assets/barras.jpeg'

const AboutUs = () => {
  return (
    <section id='aboutus' className='about_container'>
        <h1>🍍Sobre Nosotros🍍</h1>
        <p>
            En MT BARRAS, llevamos la fiesta a otro nivel con nuestras barras móviles diseñadas para hacer de cada evento una experiencia inolvidable. Nos especializamos en brindar un servicio de coctelería     premium para bodas, cumpleaños, eventos corporativos y celebraciones especiales.
            Nuestro equipo de bartenders profesionales crea tragos únicos y personalizados, combinando creatividad, sabor y un servicio de primera. Con una barra elegante, ingredientes de calidad y una atención impecable, transformamos cualquier ocasión en un momento especial.
            🎉 Tu evento, nuestra barra. ¡Brindemos por grandes momentos! 🍸
        </p>

        <div className='img_container'>
          <img src={barras} alt="barras" />
          <img src={barras} alt="barras" />
          <img src={barras} alt="barras" />
        </div>

    </section>
  )
}

export default AboutUs