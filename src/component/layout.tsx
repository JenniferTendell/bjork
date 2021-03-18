
import CartProvider from "../contexts/CartContext";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";


function Layout() {
    return (
        <CartProvider>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </CartProvider>
    )
}

export default Layout;