import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function WebsiteLayout (props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default WebsiteLayout;