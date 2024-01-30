import Header from './Header/Header';
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div class="container">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout