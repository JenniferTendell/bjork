import ShoppingCart from "./shoppingCart";
import "./CSS/header.css";


function Header() {
    return(
        <div className="header"> 
                <h1 className="logo">BJÖRK</h1>
            <ShoppingCart />
        </div>
    )
}



export default Header