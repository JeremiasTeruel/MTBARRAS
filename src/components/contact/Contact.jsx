import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa'

const Contact = () => {

    const form = useRef();

    try{
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_66zwtk4', 'template_kip23yg', form.current, {
            publicKey: '3FlhSFPIm_9WaHCs7',
          })
          .then(
            () => {
                Swal.fire({
                    title: 'Genial!',
                    text: 'Mensaje enviado con éxito 😁',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            },
            (error) => {
                Swal.fire({
                    title: 'Ups!',
                    text: 'Algo salió mal 🤔 Mensaje no enviado.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            },
          );
          e.target.reset()
      };

  return (
    <section id='contact' className='contact_container'>
        <div className='txt_container'>
            <h1>Contactanos</h1>
            <h2>Consulta por mas información sobre nuestros servicios, precios y disponibilidad</h2>
            <p>o dejanos un mensaje de agradecimiento o recomendación, tu opinión nos importa♥️</p>
        </div>

        <div className='contact_form_wrapper'>
            <div className='contact_socials'>
                <a href='https://www.instagram.com/mt_barras/' className='contact_social_link' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                    <BsInstagram />
                </a>
                <a href='https://www.facebook.com/mtbarras.moviles' className='contact_social_link' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                    <FaFacebookF />
                </a>
                <a href='https://wa.me/5492612304481' className='contact_social_link' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                    <BsWhatsapp />
                </a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='fullName' placeholder='Nombre y Apellido' required/>
                <input type="email" name='email' placeholder='Email' required/>
                <input type="tel" name='phone' placeholder='Teléfono' required/>
                <textarea name="message" cols="30" rows="10" placeholder='Tu mensaje...' required></textarea>
                <button type='submit' className='btn'>Enviar</button>
            </form>
        </div>
    </section>
  )
}
catch (error){
    alert('error: ' + error);
  }
}

export default Contact
