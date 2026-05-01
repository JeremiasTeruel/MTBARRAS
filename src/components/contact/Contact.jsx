import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

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

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='fullName' placeholder='Nombre y Apellido' required/>
            <input type="email" name='email' placeholder='Email' required/>
            <input type="tel" name='phone' placeholder='Teléfono' required/>
            <textarea name="message" cols="30" rows="10" placeholder='Tu mensaje...' required></textarea>
            <button type='submit' className='btn'>Enviar</button>
        </form>
    </section>
  )
}
catch (error){
    alert('error: ' + error);
  }
}

export default Contact
