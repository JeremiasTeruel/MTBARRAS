import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import WhatsAppWidget from '../components/whatsapp/WhatsAppWidget'

function WebsiteLayout (props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            <WhatsAppWidget />
        </>
    )
}

export default WebsiteLayout;
