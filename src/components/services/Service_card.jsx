import './Services.css'

const Service_card = (props) => {

    let {id, image, description} = props.data


  return (
    <div key={id} className='service_card'>
        <img src={image} alt="service img" className='card_img' />
        <strong className='service_description'>{description}</strong>
    </div>
  )
}

export default Service_card